# //nom:AuthAbout
- [index.ts](./index.ts)
- [interfaces.ts](./interfaces.ts)
- [config.ts](./config.ts) — roles list

## authUser — current user module
- [authUser](./authUser.ts)

```ts
import {
  IAuthUser,
  IAuthCredentials,
  authUserSet,          // async authUserSet(user, remember) :IResponse
  authUserGet,          // async authUserGet() :IResponse
  authUserGetToken,     // async authUserGetToken() :string
  authUserLogin,        // async authUserLogin(credentials, remember) :IResponse
  authUserLogout,       // async authUserLogout() :IResponse
} from 'Auth'
```

## authRole — current user role module
- [authRole](./authRole.ts)

```js
import {
  AUTH_ROLE,            // { admin:'admin', guest:'guest', ... }
  authRoleMatchAccess,  // authRoleMatchAccess(user.roles, accessList) :boolean
} from 'Auth'
```

## ReactProviderAuth
- [ReactProviderAuth](./ReactProviderAuth.tsx)

```ts
import { useAuthProvider } from 'Auth'
export const MyComponent:React.FC = () => {
  const {
    auth,               // true/false
    authUser,           // {id, token, roles, ...}
    authUserLogin,      // async authUserLogin(credentials, remember) :IResponse
    authUserLogout,     // async authUserLogout() :IResponse
    authUserSet,        // async authUserSet(user, remember) :IResponse
  } = useAuthProvider()
  return <>Authorized: {auth ? 'yes':'no'}</>;
}
```
