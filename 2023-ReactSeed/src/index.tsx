import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppDefault } from './App'

//nom:AppIndexTSX
const App:React.FC = () => <AppDefault />
const appContainer = document.getElementById('AppHtmlContainer')
createRoot(appContainer!).render(<App />)
