/** 2023.11.13 Typescript removed **/

/**
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
**/

/** 2023.11.13 Javascript **/

export const objectTemplate     = {};
export const documentTemplate   = {};
export const requestTemplate    = {};
export const responseTemplate   = {};

export const responseTemplateSuccess = {
  ...responseTemplate,
  success: true,
};

export const responseTemplateReject = {
  ...responseTemplate,
  success: false,
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Utils

export const responseMakerCatchError = (error) => ({
  ...responseTemplateReject,
  message: JSON.stringify(error),
  data: error,
});
