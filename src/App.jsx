import React from 'react'

import Route from './Component/Route/Route'
import { RouterProvider } from 'react-router'
import Layout from './Component/Layout/Layout'

export default function App() {

  return (

    <div>
      
      <RouterProvider router={Route}>
        <Layout></Layout>

      </RouterProvider>
     
    </div>
  )
}
