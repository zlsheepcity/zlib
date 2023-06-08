import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

export type IReduxRootState = ReturnType<typeof store.getState>
export type IReduxAppDispatch = typeof store.dispatch
export interface IReduxProviderProps {
  children?: React.ReactNode;
}

export const ReactProviderRedux:React.FC<IReduxProviderProps> = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReactProviderRedux
