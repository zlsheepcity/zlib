import React from 'react'
import {
  authUserLogout as appAuthUserLogout,
  authUserLogin as appAuthUserLogin,
  authUserSet as appAuthUserSet,
  authUserTemplate,
} from 'Auth'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ AuthContext

export const authContextInitial = {
  auth: false,
  authUser: authUserTemplate,
  authUserLogout: appAuthUserLogout,
  authUserLogin: appAuthUserLogin,
  authUserSet: appAuthUserSet,
};

const AuthContext = React.createContext(authContextInitial);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Provider Component

export const ReactProviderAuth = ({ user, children }) => {
  let [authUser, setAuthUser] = React.useState(user)
  let [auth, setAuth] = React.useState(!!user.id)

  const authUserLogout = async () => {
    const response = await appAuthUserLogout()
    if (response.success) setAuthUser(authUserTemplate)
    return response;
  }

  const authUserLogin = async (credentials, remember) => {
    const response = await appAuthUserLogin(credentials, remember)
    if (response.success) setAuthUser(response.data)
    return response;
  }

  const authUserSet = async (user, remember) => {
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
