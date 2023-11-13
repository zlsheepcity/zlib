import React from "react"
import { Outlet } from "react-router-dom"

export const ProtectedOutlet = () => {

  //todo: check access
  //...

  return <Outlet />;
}

export default ProtectedOutlet;
