import { IDocument, IResponse, IObject as IO } from 'Interfaces'
import { dataResponseCollection, dataResponseDocument } from 'Data'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export interface IDataSource {
  method: string;
  endpoint?: string;
  token?: string;
  [key:string]: any;

  makeEndpoint?: (params:IDocument) => string;
  makeData?: (response:IResponse) => IDocument | IDocument[] | any;
};
export const dataSourceTemplate:IDataSource = {
  method: 'GET',
  endpoint: '',
  token: undefined,
  makeEndpoint: undefined,
//makeEndpoint: (params:IO) => `/endpoint/${params.value}`,
  makeData: undefined,
//makeData: dataResponseCollection,
//makeData: dataResponseDocument,
//makeData: response => response?.data || {},
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export interface IDataSources {
  [key:string]:IDataSource
}
