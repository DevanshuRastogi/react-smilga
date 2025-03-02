import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import {
  About,
  Landing,
  HomeLayout,
  Error,
  Cocktail,
  NewsLetters,
} from "./pages/index";
import { Children } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout /> ,
    children:[
      {
        path: "about",
        element: <About />,
      },
    
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "Error",
        element: <Error />,
      },
      {
       index:true,
        element: <Landing />,
      },
      {
        path: "News",
        element: <NewsLetters />,
      }

    ]
  },

 
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
