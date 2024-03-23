import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './context'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-eggxp8zop5p6blvw.us.auth0.com"
  clientId="7cU5BfXTmeNOShseJ8bPpV0BHwrjKUqM"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
  <AppProvider>
    <App />
  </AppProvider>
  </Auth0Provider>
);
