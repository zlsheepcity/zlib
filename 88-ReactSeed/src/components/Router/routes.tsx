import { IRoutes } from 'Interfaces'
import { routesAppCore } from './routesAppCore'
import { routes as routesAppProject } from 'Src/AppRoutes'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const routes:IRoutes = {
  ...routesAppCore,
  ...routesAppProject,
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export default {}
