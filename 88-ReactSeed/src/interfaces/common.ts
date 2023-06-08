export interface IObject {
  [key:string]: any;
}
export interface IDocument {
  [key:string]: any;
}
export interface IRequest {
  [key:string]: any;
}
export interface IResponse {
  [key:string]: any;
}

export const objectTemplate:IObject = {}
export const documentTemplate:IDocument = {}
export const requestTemplate:IRequest = {}
export const responseTemplate:IResponse = {}

export const responseTemplateSuccess:IResponse = {
  ...responseTemplate,
  success: true,
}
export const responseTemplateReject:IResponse = {
  ...responseTemplate,
  success: false,
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Utils

export const responseMakerCatchError = (error:any) => ({
  ...responseTemplateReject,
  message: JSON.stringify(error),
  data: error,
})
