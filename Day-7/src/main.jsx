import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
 [ {
    path: "/",
    element: <h1>Home page</h1>,
  },

  {
    path: "/about",
    element: (
      <div>
        <h1>About Page</h1>
      </div>
    ),
  }]
);
const App = ()=>{
  return <RouterProvider router={router} />
  
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default  App;