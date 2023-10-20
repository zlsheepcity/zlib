import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject as IRouteObject,
} from 'react-router-dom'

import {
  IObject as IO,
  IRoute,
  IRoutes
} from 'Interfaces'
import { routes } from './routes'
import { ProtectedRoute } from 'Components'
import { Error404 as Error404Page } from 'Pages'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Convert routes

const routesKeyAdded: IRoutes = {...routes}

Object.keys(routesKeyAdded).forEach(
  key => routesKeyAdded[key] = { ...routesKeyAdded[key], key }
)

const routesForReactRouter:IRouteObject[] = [

  // convert routes
  ...Object.values(routes).map(
    (route:IRoute) => ({
      path: route.path,
      element: <ProtectedRoute route={route} />,
    })
  ),

  // append special routes
  { path: '*', element: <Error404Page /> }
]

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ React router

const router = createBrowserRouter(routesForReactRouter)

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Context

export interface IRoutesContext {
  routes: IRoutes;
  routePath: (key:string, params?:IO) => string;
}
const initialRoutesContext:IRoutesContext = {
  routes,
  routePath: (key:string, params:IO = {}) => '',
}
const RoutesContext = React.createContext<IRoutesContext>(initialRoutesContext);
export const useRoutesProvider = () => React.useContext(RoutesContext);


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Provider component

export const ReactProviderRoutes:React.FC = () => {
  const [routesList, setRoutesList] = React.useState<IRoutes>(routesKeyAdded)
  const value = {
    ...initialRoutesContext,
    routes: routesList,
    routePath: (key:string, params:IO = {}) => {
      const { pathMaker } = routes[key] || {pathMaker:undefined}
      if (typeof pathMaker === 'function') return pathMaker(params)
      return routes[key] && routes[key]?.path || ''
    }
  }
  return (
    <RoutesContext.Provider value={value}>
      <RouterProvider
        router={router}
        fallbackElement={<Error404Page />}
        />
    </RoutesContext.Provider>
  );
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export default ReactProviderRoutes;
