import React from 'react'
import {
  IResponse,
  responseTemplate,
  responseTemplateSuccess,
} from 'Interfaces'
import {
  authUserLogout as appAuthUserLogout,
  authUserLogin as appAuthUserLogin,
  authUserSet as appAuthUserSet,
  IAuthUser,
  IAuthCredentials,
  authUserTemplate,
} from 'Auth'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ AuthContext

export interface IAuthContext {
  auth: boolean;
  authUser: IAuthUser;
  authUserLogout: () => Promise<IResponse>;
  authUserLogin: (credentials:IAuthCredentials, remember:boolean) => Promise<IResponse>;
  authUserSet: (user:IAuthUser, remember:boolean) => Promise<IResponse>;
};
export const authContextInitial:IAuthContext = {
  auth: false,
  authUser: authUserTemplate,
  authUserLogout: appAuthUserLogout,
  authUserLogin: appAuthUserLogin,
  authUserSet: appAuthUserSet,
};

const AuthContext = React.createContext<IAuthContext>(authContextInitial)

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Provider Component

export interface IAuthProviderProps {
  user: IAuthUser;
  children?: React.ReactNode;
};
export const ReactProviderAuth:React.FC<IAuthProviderProps> = ({ user, children }) => {
  let [authUser, setAuthUser] = React.useState(user)
  let [auth, setAuth] = React.useState(!!user.id)

  const authUserLogout = async () => {
    const response = await appAuthUserLogout()
    if (response.success) setAuthUser(authUserTemplate)
    return response;
  }

  const authUserLogin = async (credentials:IAuthCredentials, remember:boolean) => {
    const response = await appAuthUserLogin(credentials, remember)
    if (response.success) setAuthUser(response.data)
    return response;
  }

  const authUserSet = async (user:IAuthUser, remember:boolean) => {
    const response = await appAuthUserSet(user, remember)
    if (response.success) setAuthUser(response.data)
    return response;
  }

  React.useEffect(() => { // watch authUser
    setAuth(!!authUser.id)
  }, [authUser])

  const providerValue = {
    auth,
    authUser,
    authUserLogout,
    authUserLogin,
    authUserSet,
  }
  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ useAuthProvider

export const useAuthProvider = () => React.useContext(AuthContext);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

export default {};
