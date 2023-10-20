import { IResponse } from 'Interfaces'
import { dataRequest, IDataRequest } from 'Data'

export async function authRequestLogout():Promise<IResponse> {
  const logoutRequest:IDataRequest = { source:'AuthLogout' }
  const logoutResponse:IResponse = await dataRequest(logoutRequest)
  return logoutResponse;
};
