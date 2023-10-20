//nom:RoutesConfig
import React from 'react'
import {
  IObject as IO,
  IRoutes,
  routeTemplate,
} from 'Interfaces'
import * as PAGES from 'Pages'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const routesAppCore:IRoutes = {

  Index: {
    ...routeTemplate,
    path: '/',
    title: 'Index',
    roleRequired: false,
    component: <PAGES.HomeIndex />,
  },

  AuthLogin: {
    ...routeTemplate,
    path: '/login',
    title: 'Login',
    roleRequired: false,
    component: <PAGES.AuthLogin />,
  },

  AuthLoginMode: {
    ...routeTemplate,
    pathMaker: (params:IO) => `/login/${params.mode}`,
    path: '/login/:mode',
    title: 'Login',
    roleRequired: false,
    component: <PAGES.AuthLogin />,
  },

  AuthLogout: {
    ...routeTemplate,
    path: '/logout',
    title: 'Logout',
    roleRequired: false,
    component: <PAGES.AuthLogout />,
  },

  AuthProfile: {
    ...routeTemplate,
    path: '/profile',
    title: 'Profile',
    roleRequired: true,
    component: <PAGES.AuthProfile />,
  },

  AuthHome: {
    ...routeTemplate,
    path: '/home',
    title: 'Home',
    roleRequired: false,
    component: <PAGES.HomeIndex />,
  },
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export default routesAppCore
