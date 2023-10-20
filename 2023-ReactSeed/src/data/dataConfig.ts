import { IObject as IO } from 'Interfaces'

export const dataResponseCollection = (apiResponse:IO) => apiResponse.data || []
export const dataResponseDocument = (apiResponse:IO) => apiResponse.data || {}
