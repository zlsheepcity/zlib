//nom:authUser
import {
  IObject as IO,
  IDocument,
  IResponse,
} from 'Interfaces'
import {
  IAuthUser,
  IAuthCredentials,
  authRequestCredentials,
  authRequestLogout,
  localStorageCRUD,
} from 'Auth'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// Set any user object as current user 
export const authUserSet = async (user:IAuthUser, remember = false):Promise<IResponse> => {
  const response = await localStorageCRUD.update({...user, remember})
  return response;
};

// Read current user object
export const authUserGet = async ():Promise<IAuthUser> => {
  const response = await localStorageCRUD.read()
  const user = response.data
  return user;
};

// Read token string from current user
export const authUserGetToken = async ():Promise<string> => {
  const user = await authUserGet()
  const token = user.token || ''
  return token;
};

// Do login request with credentials
export const authUserLogin = async (credentials:IAuthCredentials, remember = false):Promise<IResponse> => {
  const response = await authRequestCredentials(credentials)
  if (response.success) {
    const user = response.data
    await authUserSet(user, remember)
  }
  return response;
};

// Do logout request
export const authUserLogout = async ():Promise<IResponse> => {
  const apiResponse = await authRequestLogout()
  const localResponse = await localStorageCRUD.delete()
  return apiResponse;
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
