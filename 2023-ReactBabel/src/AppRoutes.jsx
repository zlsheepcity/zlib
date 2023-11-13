import React from 'react'
import { routeTemplate } from 'Interfaces'

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Pages
import * as Pages from 'Pages';

export const routes = {
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Routes
  CustomPageTemplate: {
    ...routeTemplate,
    path: '/template',
    title: 'TemplatePage',
    component: <div></div>,
  },
  CustomPageTemplateComplete: {
    ...routeTemplate,
    path: '/templateComplete',
    title: 'TemplateCompletePage',
    roleRequired: false,
    roleAccessList: [],
    component: <div></div>,
  },
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  TemplateUI: {
    ...routeTemplate,
    path: '/TemplateUI',
    title: 'TemplateUI',
    component: <Pages.TemplateUI />,
  },
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
};

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export default routes;
