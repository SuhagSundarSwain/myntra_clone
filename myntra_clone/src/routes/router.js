import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Bag from "./Bag";
import Home from "./Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);
