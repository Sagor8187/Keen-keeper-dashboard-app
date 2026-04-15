import React, { Suspense } from "react";

import Route from "./Component/Route/Route";
import { RouterProvider } from "react-router";
import Layout from "./Component/Layout/Layout";
import Datacontext from "./Component/Context/Datacontext";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <div>
      <Datacontext>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Flip}
        />
        <RouterProvider router={Route}>
          <Suspense fallback={<p>sagor....</p>}>
            <Layout></Layout>
          </Suspense>
        </RouterProvider>
      </Datacontext>
    </div>
  );
}
