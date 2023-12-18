import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Store/DataStore";
import { StrictMode } from "react";
// import Keycloak from "keycloak-js";
// import initOptions from "./Services/KeycloakInitOPtions/InitOptions";



// const keycloak = new Keycloak(initOptions);

// keycloak.init({
//   onLoad: "login-required",
//   checkLoginIframe: true,
// }).then(
//   (auth) => {
//     if (!auth) {
//       window.location.reload();
//     } else {
//       console.info("Authenticated");
//       console.log(keycloak.token)
//     }
//   },
//   () => {
//     console.error("Authentication Failed");
//   }
// ).catch((e)=>{console.log("error",e)});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
