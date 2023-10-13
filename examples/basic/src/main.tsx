import { ThemeProvider } from 'caixa'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

const theme = {
  breakpoints: {
    sm: 0,
    md: 600,
    lg: 1200,
  },
  colors: {
    brand: '#1e31e3',
  },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
