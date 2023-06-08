import {
  IObject as IO,
  IDocument, documentTemplate,
  IResponse, responseTemplate,
} from 'Interfaces'
import { authUserGetToken } from 'Auth'
import {
  dataSources,
  IDataSource,
  dataSourceTemplate,
} from 'Data'
const API_BASE = process.env.API_BASE

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Interfaces

export interface IDataRequestParams extends IO {}
export interface IDataRequest {
  // Primary fetch
  source?: keyof typeof dataSources;
  document?: IDocument;
  params?: IO;
  // Plugin options
  sourceObject?: IDataSource;
  token?: string;
  [key:string]: any;
};

export const dataRequest = async (
  request:IDataRequest = {}
):Promise<IResponse> => {

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Apply request

  const sourceKey = request.source || 'dataSourceTemplate'
  const source:IDataSource = request.sourceObject || dataSources[sourceKey]
  const document:IDocument = request.document || documentTemplate
  const params:IDataRequestParams = request.params || {}

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Get token

  let token = request.token;
  if (!token) token = await authUserGetToken()

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Prepare fetch

  const hasBody = ['PUT', 'POST', 'DELETE', 'PATCH'].includes(source.method)
  const fetchURL = makeFetchUrlString({source, document, params})
  const fetchOptions = {
    method: source.method,
    body: hasBody ? JSON.stringify(document) : undefined,
    headers: {
      ...(true ? {'Content-Type': 'application/json'} : {}),
      ...(token ? {'Authorization': `Bearer ${token}`} : {}),
      ...(source.headers || {}),
    },
  }

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Fetch response

  let fetchResponse:IResponse
  try {
    fetchResponse = await
      fetch(fetchURL, fetchOptions)
      .then(response => response.json())
  } catch(error) {
    fetchResponse = makeFetchErrorResponse(error)
  }

  return {
    ...responseTemplate,
    ...fetchResponse,
  };
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Utils makeFetchUrlString

const makeFetchUrlString = ({
  source = dataSourceTemplate,
  document = documentTemplate,
  params = {},
}:{
  source:IDataSource;
  document:IDocument;
  params:IDataRequestParams;
}):string => {

  // prefix
  let urlBaseroot = API_BASE

  // endpoint string or function to make string
  let urlEndpoint = typeof(source.makeEndpoint) === 'function'
    ? source.makeEndpoint(document)
    : source.endpoint || ''

  // url object with params
  let urlObject = new URL(`${urlBaseroot}${urlEndpoint}`)
  let urlParam: keyof IDataRequestParams;
  for (urlParam in params)
    urlObject
      .searchParams
      .append(urlParam, `${params[urlParam]}`)
  
  // full string `url?params=`
  const urlString =
    urlObject
      .toString()
      .replace( /%5B/g, '[' )
      .replace( /%5D/g, ']' )
      .replace( /%7C/g, '|' )
  return urlString;
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Utils makeFetchErrorResponse

const makeFetchErrorResponse = (error?:any):IResponse => ({
  ...responseTemplate,
  success: false,
  message: `try fetch failed with error: ${JSON.stringify(error)}`,
});

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export default {}
