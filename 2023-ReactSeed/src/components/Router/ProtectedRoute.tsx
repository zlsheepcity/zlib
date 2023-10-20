import React from 'react'
import { IRoute } from 'Interfaces'
import * as PAGES from 'Pages'

export interface IProtectedRouteProps {
  route: IRoute;
}
export const ProtectedRoute:React.FC<IProtectedRouteProps> = ({route}) => {

  //todo: check access
  //...

  return route?.component || <PAGES.Error404 />;
}

export default ProtectedRoute;
