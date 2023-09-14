import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import HomeUser from './HomeUser';
import Homeadmin from './Homeadmin';
import App from './App'
import Owner from './Owner';





const router = createBrowserRouter([
 
  {
  path:"/",
    element: <App />
  },
  {
    path:"/homeuser",
      element:<HomeUser />
    },
  {
    path:"/homeadmin",
    element: <Homeadmin />
  },
  {
    path:"/owner",
    element: <Owner /> 
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
