import React from 'react'

import Route from './Component/Route/Route'
import { RouterProvider } from 'react-router'
import Layout from './Component/Layout/Layout'
import Datacontext from './Component/Context/Datacontext'

export default function App() {

  return (

    <div>
      <Datacontext>
        <RouterProvider router={Route}>
        <Layout></Layout>

      </RouterProvider>
      </Datacontext>
      
     
    </div>
  )
}
