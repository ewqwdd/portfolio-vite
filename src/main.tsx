import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ScreenProvider } from './components/ScreenProvider/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScreenProvider>
      <App />
    </ScreenProvider>
  </React.StrictMode>,
)
