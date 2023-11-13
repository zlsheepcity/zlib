//nom:authUser
import {
  authRequestCredentials,
  authRequestLogout,
  localStorageCRUD,
} from 'Auth'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// Set any user object as current user
export const authUserSet = async (user, remember = false) => {
  const response = await localStorageCRUD.update({...user, remember})
  return response;
};

// Read current user object
export const authUserGet = async () => {
  const response = await localStorageCRUD.read()
  const user = response.data
  return user;
};

// Read token string from current user
export const authUserGetToken = async () => {
  const user = await authUserGet()
  const token = user.token || ''
  return token;
};

// Do login request with credentials
export const authUserLogin = async (credentials, remember = false) => {
  const response = await authRequestCredentials(credentials)
  if (response.success) {
    const user = response.data
    await authUserSet(user, remember)
  }
  return response;
};

// Do logout request
export const authUserLogout = async () => {
  const apiResponse = await authRequestLogout()
  const localResponse = await localStorageCRUD.delete()
  return apiResponse;
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
