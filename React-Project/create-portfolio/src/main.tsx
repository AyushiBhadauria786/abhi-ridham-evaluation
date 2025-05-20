import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PortfolioProvider } from "./Context/PortfolioContext.tsx";
import { BrowserRouter } from "react-router";
// import { Provider } from 'react-redux'
// import { store } from './store/store.ts'

createRoot(document.getElementById("root")!).render(
  <PortfolioProvider>
    <App />
  </PortfolioProvider>
);
