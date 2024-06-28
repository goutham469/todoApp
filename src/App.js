import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

// components

import Main from './components/Main/Main'
import Login from './components/Login/Login'

function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element:<Login/>
    },
    {
      path:'user',
      element:<Main/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
