import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// pages
import About from './pages/About.jsx';
import Career from './pages/Career.jsx';
import Work from './pages/Work.jsx';
import Services from './pages/Services.jsx';
import App from './App.jsx';
import Home from './pages/Home.jsx';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/work",
        element: <Work />,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
