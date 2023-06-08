/**
 *  CRUD for storing user data in the browser
 *  nom:authUserLocalStorage
 */
import { IResponse, responseTemplate, responseTemplateSuccess, responseTemplateReject } from 'Interfaces'
import { IAuthUser, authUserTemplate } from 'Auth'
const USER_STORAGE_KEY = 'user'
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ authUser CRUD

export const authUserLocalStorageCreate = async (data:IAuthUser):Promise<IResponse> => {
  let response:IResponse = responseTemplate
  const { rememberDevice, ...user } = data
  try {
    const userToString = JSON.stringify(user)
    sessionStorage.setItem(USER_STORAGE_KEY, userToString)
    if (rememberDevice) localStorage.setItem(USER_STORAGE_KEY, userToString)
    response = responseTemplateSuccess
  } catch(error) {
    response = { ...responseTemplateReject, message:JSON.stringify(error) }
  }
  return { ...response, data:user };
}

export const authUserLocalStorageRead = async ():Promise<IResponse> => {
  let response:IResponse = responseTemplate
  let user:IAuthUser = authUserTemplate
  let storageUser
  try {
    storageUser = sessionStorage.getItem(USER_STORAGE_KEY);
    if (!storageUser) storageUser = localStorage.getItem(USER_STORAGE_KEY);
    if (!storageUser) storageUser = JSON.stringify(authUserTemplate);
    user = await JSON.parse(storageUser)
    response = responseTemplateSuccess
  } catch(error) {
    response = { ...responseTemplateReject, message:JSON.stringify(error) }
  }
  return { ...response, data:user };
}

export const authUserLocalStorageUpdate = authUserLocalStorageCreate

export const authUserLocalStorageDelete = async ():Promise<IResponse> => {
  let response:IResponse = responseTemplate
  try {

    // Option 1: delete only authUser related data
    localStorageDeleteUser()

    // Option 2: delete all data
    // localStorageDeleteAllData()

    response = responseTemplateSuccess
  } catch(error) {
    response = { ...responseTemplateReject, message:JSON.stringify(error) }
  }

  return { ...response, data:authUserTemplate };
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Parts

const localStorageDeleteUser = () => {
  sessionStorage.removeItem(USER_STORAGE_KEY)
  localStorage.removeItem(USER_STORAGE_KEY)
}
const localStorageDeleteAllData = () => {
  sessionStorage.clear()
  localStorage.clear()
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Export container
export const localStorageCRUD = {
  create: authUserLocalStorageCreate,
  read: authUserLocalStorageRead,
  update: authUserLocalStorageUpdate,
  delete: authUserLocalStorageDelete,
};
