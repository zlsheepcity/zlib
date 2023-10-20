# Router docs
- [react-router](https://reactrouter.com/en/v6.3.0/api)
- [@types/react-router-dom](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router-dom/index.d.ts)
- [history](https://github.com/remix-run/history/tree/dev/docs)

# Developer guides

## Routes config
- [interfaces.ts](./interfaces.ts)
- [routes.tsx](./routes.tsx)
  - [routesAppCore.tsx](./routes.tsx) — login, 404, etc...
  - [AppRoutes.tsx](../../AppRoutes.tsx)

```ts
const routes:IRoutes = {
  CustomPageTemplate: {
    ...routeTemplate,
    path: '/TemplatePath',
    title: 'TemplateTitle',
    component: <PageComponent />,
  },
}
```

## Add routes provider
- [ReactProviderRoutes](./components/ReactProviderRoutes.tsx)
- [App.tsx](../../App.tsx)

#### App.tsx
```tsx
import { ReactProviderRoutes } from 'Components'
export const App:React.FC = () => {
  return(
    <div id="App">
      <ReactProviderRoutes />
    </div>
  );
}
```

## Use routes provider
#### Component.tsx
```tsx
import { useRoutesProvider } from 'Components'
export const Component:React.FC = () => {
  const { routes, routePath } = useRoutesProvider()
  return <>...</>;
}
```

### `routes :IRoutes`
```ts
const { routes, IRoute } = useRoutesProvider()
const routeKey = 'AuthLogin'
const routeObject:IRoute = routes[routeKey]
```

### `routePath( routeKey:string, [params:object] ) :string`
```ts
const { routePath } = useRoutesProvider()
const pathString = routePath('AuthLogin')
const pathStringUseParams = routePath('AuthLoginMode', {mode:'test'})
```