import { ThemeProvider } from 'caixa'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider
      value={{ breakpoints: { mobile: 0, tablet: 500, desktop: 1000 } }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
