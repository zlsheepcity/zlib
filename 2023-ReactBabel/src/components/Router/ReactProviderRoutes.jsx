import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { routes } from './routes'
import { ProtectedRoute } from './ProtectedRoute'
import { Error404 as Error404Page } from 'Pages'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Convert routes

const routesKeyAdded = {...routes}

Object.keys(routesKeyAdded).forEach(
  key => routesKeyAdded[key] = { ...routesKeyAdded[key], key }
)

const routesForReactRouter = [

  // convert routes
  ...Object.values(routes).map(
    (route) => ({
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

const initialRoutesContext = {
  routes,
  routePath: (key, params = {}) => '',
}
const RoutesContext = React.createContext(initialRoutesContext);
export const useRoutesProvider = () => React.useContext(RoutesContext);


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Provider component

export const ReactProviderRoutes = () => {
  const [routesList, setRoutesList] = React.useState(routesKeyAdded)
  const value = {
    ...initialRoutesContext,
    routes: routesList,
    routePath: (key, params = {}) => {
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
