import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import NoPage from './NoPage';

const Body = () => {
    const Approuter=createBrowserRouter([
        {
          path:"/",
          element:<Login/>,
          
        },
        {
          path:"/browse",
          element:<Browse/>
        },
        {
            path: "*",
            element: <NoPage /> // Catch-all route for undefined paths
          }
      ])
  return (
    <div>
      <RouterProvider router={Approuter}/>
    </div>
  )
}

export default Body
