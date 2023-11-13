import { authUserGetToken } from 'Auth';
import {
  dataSources,
  dataSourceTemplate,
} from 'Data';
const API_BASE = process.env.API_BASE;

export const dataRequest = async (
  request = {}
) => {

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Apply request

  const sourceKey = request.source || 'dataSourceTemplate'
  const source    = request.sourceObject || dataSources[sourceKey]
  const document  = request.document || documentTemplate
  const params    = request.params || {}

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

  let fetchResponse;
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
}) => {

  // prefix
  let urlBaseroot = API_BASE

  // endpoint string or function to make string
  let urlEndpoint = typeof(source.makeEndpoint) === 'function'
    ? source.makeEndpoint(document)
    : source.endpoint || ''

  // url object with params
  let urlObject = new URL(`${urlBaseroot}${urlEndpoint}`)
  let urlParam;
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

const makeFetchErrorResponse = (error) => ({
  ...responseTemplate,
  success: false,
  message: `try fetch failed with error: ${JSON.stringify(error)}`,
});

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export default {};
