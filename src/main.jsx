
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.scss";
import { MyContextProvider } from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvider>
      <App></App>
    </MyContextProvider>
  </React.StrictMode>
);
