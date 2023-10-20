import React from 'react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import { theme as themeDefault } from './theme'
import './custom.css'

export interface IUIThemeReactProvider {
  children?: React.ReactNode
}

const themeSelected = createTheme(themeDefault)
const Provider:React.FC<IUIThemeReactProvider> = ({
  children
}) => {
  return (
    <ThemeProvider theme={themeSelected}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export const ReactProviderTheme = Provider
export default ReactProviderTheme
