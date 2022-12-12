import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Details from "./components/Details";
import ChangeBatch from "./components/ChangeBatch";
import MakePayment from "./components/MakePayment";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1 className="display-4">Yoga Classes</h1>
        <Details />
      </>
    ),
  },
  {
    path: "/changeBatch",
    element: (
      <>
        <h1 className="display-4">Yoga Classes</h1>
        <ChangeBatch />
      </>
    ),
  },
  {
    path: "/makePayment",
    element: (
      <>
        <h1 className="display-4">Yoga Classes</h1>
        <MakePayment />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
