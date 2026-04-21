import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <Auth0Provider
    domain="dev-ymsq6tdomk5i8abl.us.auth0.com"
    clientId="98PKiEPHPurSILfmj8aSzWKF24ThZJfF"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
   </BrowserRouter>
);