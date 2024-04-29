import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/UserContext.jsx';
import App from "./App.jsx";
import "./index.css";
import { CardProvider } from "./contexts/CardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <CardProvider>
      <App />
      </CardProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
