// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ IRoute 2023.03.14
/**
import { IObject as IO } from 'Interfaces'
export interface IRoute extends IO {
  path?: string;
  pathMaker?: (params:IO) => string;

  roleRequired?: boolean;
  roleAccessList?: string[];

  title?: string;
  titleMaker?: (params:IO) => string;
  titleHtml?: string;
  titleShortAlias?: string;

  hideInNavigation?: boolean;
  component?: any; //React.ReactNode;
}
export const routeTemplate:IRoute = {
  path: '',              // '/path/with/props/:id/:name',
  pathMaker: undefined,  // (params:IO) => `/example/with/props/${params.id}/${params.name}`,
  roleRequired: false,
  roleAccessList: [],    // [ROLES.super_user, ROLES.developer],
  title: '',
  titleMaker: undefined, // (params:IO) => `Title: ${params.id}`,
  titleHtml: '',
  titleShortAlias: '',
  hideInNavigation: undefined,
  component: undefined,  // <PageComponent />,
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ IRoutes

export interface IRoutes { [key:string]:IRoute }
export const routesTemplate:IRoutes = {}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
**/

/** 2023.11.13 Typescript removed **/

export const routeTemplate = {
  path: '',              // '/path/with/props/:id/:name',
  pathMaker: undefined,  // (params) => `/example/with/props/${params.id}/${params.name}`,
  roleRequired: false,
  roleAccessList: [],    // [ROLES.super_user, ROLES.developer],
  title: '',
  titleMaker: undefined, // (params) => `Title: ${params.id}`,
  titleHtml: '',
  titleShortAlias: '',
  hideInNavigation: undefined,
  component: undefined,  // <PageComponent />,
};

export const routesTemplate = {};
