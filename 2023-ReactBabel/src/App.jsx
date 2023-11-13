import React from 'react'
import { ReactProviderRoutes } from 'Components/Router'
import {
  ReactProviderAuth,
  authUserGet,
  authUserTemplate,
} from 'Auth'
import { ReactProviderTheme } from 'Src/ui/ReactProviderTheme'
import { ReactProviderRedux } from 'Components/Redux'

//nom:AppProviderDefault
export const AppDefault = () => {
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ auth
  const [authUser, setAuthUser] = React.useState(authUserTemplate)
  const readAuthUser = async () => {
    const user = await authUserGet()
    setAuthUser(user)
  }

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ mounted
  const [loading, setLoading] = React.useState(true)
  const appMounted = async () => {
    /// run on mounted
    setLoading(true)
    readAuthUser()
    setLoading(false)
  }
  React.useEffect(() => {appMounted()}, [])

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ render

  return (
    <div id="App">
      <ReactProviderRedux>
        <ReactProviderAuth user={authUser}>
          <ReactProviderTheme>
            <ReactProviderRoutes />
          </ReactProviderTheme>
        </ReactProviderAuth>
      </ReactProviderRedux>
    </div>
  );

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
}

export const App = AppDefault
export default App
