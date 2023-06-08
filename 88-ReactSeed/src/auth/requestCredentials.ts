//nom:authRequestCredentials
import {
  IObject as IO,
  IDocument,
  IRequest,
  IResponse,
} from 'Interfaces'
import {
  AUTH_ROLE,
  IAuthUser,
  IAuthCredentials,
  authUserTemplate,
} from 'Auth'
import {
  dataRequest,
  IDataRequest,
} from 'Data'

export const authRequestCredentials = async (credentials:IAuthCredentials):Promise<IResponse> => {

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Step 1 token

  const tokenRequest:IDataRequest = {source:'AuthToken', document:credentials}
  const tokenResponse:IResponse = await dataRequest(tokenRequest)
  const token:string = tokenResponse.data
  if (!token) return tokenResponse;

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Step 2 user

  const userRequest:IDataRequest = {source:'AuthUserCurrent', token}
  const userResponse:IResponse = await dataRequest(userRequest)
  const user:IAuthUser = userResponse.data

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Step 2 modify

  user.token = token 
  user.rolesList = []

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  return { ...userResponse, data:user };
};
