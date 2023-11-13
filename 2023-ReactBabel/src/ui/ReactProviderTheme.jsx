import React from 'react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import { theme as themeDefault } from './theme'
import './custom.css'

const themeSelected = createTheme(themeDefault)
const Provider = ({
  children
}) => {
  return (
    <ThemeProvider theme={themeSelected}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export const ReactProviderTheme = Provider;
export default ReactProviderTheme;
