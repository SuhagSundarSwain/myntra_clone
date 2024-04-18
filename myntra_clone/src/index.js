import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/router";
import { Provider } from "react-redux";
import myntraStore from "./store/myntraStore";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
);
//