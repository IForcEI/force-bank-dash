import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/dash_board";
import Transactions from "./pages/transaction";
import Accounts from "./pages/accounts";
import Investments from "./pages/investments";
import Creditcards from "./pages/credit_cards";
import Loans from "./pages/loans";
import Services from "./pages/services";
import Myprivileges from "./pages/my_privileges";
import Setting from "./pages/setting";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/Transactions", element: <Transactions /> },
  { path: "/Accounts", element: <Accounts /> },
  { path: "/Investments", element: <Investments /> },
  { path: "/Creditcards", element: <Creditcards /> },
  { path: "/Loans", element: <Loans /> },
  { path: "/Services", element: <Services /> },
  { path: "/Myprivileges", element: <Myprivileges /> },
  { path: "/Setting", element: <Setting /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
