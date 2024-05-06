import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <root></root>,
    errorElement:<ErrorPage></ErrorPage>,
    
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('jobs/json')
      },
      {
        path:"/job/;id",
        elements:<jobDetails></jobDetails>,
        loader:()=>fetch('../jobs/json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
