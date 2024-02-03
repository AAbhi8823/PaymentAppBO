import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@app/pages/app'
import AppProvider from '@app/store/appProvider'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)