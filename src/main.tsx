import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import { CartProvider } from "./store/CartContext";
import { Analytics } from "@vercel/analytics/next";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <CartProvider>
        <App />
        <Analytics />
      </CartProvider>
    </LanguageProvider>
  </React.StrictMode>
);
