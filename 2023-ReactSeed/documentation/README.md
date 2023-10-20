# react app boilerplate documentation

```
npm install
npm run start
```

# Resources

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)

- [React](https://reactjs.org/)
- [react-router](https://reactrouter.com/en/v6.3.0/api)
- [react-redux](https://redux.js.org/api/api-reference)

- [Material UI](https://mui.com/material-ui/getting-started/overview/)
- [Localization i18next](https://www.i18next.com/)

# Core parts

- Project configuration
  - [package.json](../package.json)
  - [webpack.config.js](../webpack.config.js)
  - [typescript.json](../tsconfig.json)
- App Configuration — [about](../src/AppAbout.md)
- Auth: user, roles — [about](../src/auth/about.md)
- Backend: data, requests, endpoints — 

# Components

- Router navigation — [about](../src/components/Router/about.md)
- Redux store — [about](../src/components/Redux/about.md)

# Code standarts

#### Naming
```
namedEntity       — variable
namedEntityAction — function
NamedEntity       — react component
INamedEntity      — typescript interface
```



# SRC Architecture
- `/assets`
- - `/icons` [index](../src/assets/icons/index.ts)
- `/auth` [docs](../src/auth/about/README.md)
- `/data` [docs](../src/data/about/README.md)
- `/components`
- `/interfaces` [index](../src/interfaces/index.ts)
- `/pages` [index](../src/pages/index.ts)
- `/routes` [docs](../src/routes/about/README.md)
- - `/routes.tsx` [config](../src/routes/routes.tsx)
- `/ui`
- `/utils` [index](../src/utils/index.ts)


