import React from 'react'
import { IRoutes, routeTemplate } from 'Interfaces'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const routes:IRoutes = {
  CustomPageTemplate: {
    ...routeTemplate,
    path: '/template',
    title: 'TemplatePage',
    component: <div></div>,
  },
  CustomPageTemplateAllProps: {
    ...routeTemplate,
    path: '/template',
    title: 'TemplatePage',
    roleRequired: false,
    roleAccessList: [],
    component: <div></div>,
  },
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export default routes
