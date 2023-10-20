import React from "react"
import { Outlet } from "react-router-dom"

export interface IProtectedOutletProps {
}

export const ProtectedOutlet:React.FC<IProtectedOutletProps> = () => {

  //todo: check access
  //...

  return <Outlet />;
}

export default ProtectedOutlet;
