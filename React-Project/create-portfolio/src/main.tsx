import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PortfolioProvider } from './Context/PortfolioContext.tsx'

createRoot(document.getElementById('root')!).render(
  <PortfolioProvider>
    <App />
  </PortfolioProvider>
  
)
