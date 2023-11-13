import React from 'react'
import * as PAGES from 'Pages'

export const ProtectedRoute = ({route}) => {

  //todo: check access
  //...

  return route?.component || <PAGES.Error404 />;
}

export default ProtectedRoute;
