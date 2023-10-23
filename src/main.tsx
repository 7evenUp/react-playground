import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Providers from "./components/Providers.tsx"

import Root from "./routes/Root.tsx"
import Sonner from "./routes/Sonner.tsx"
import Web3Modal from "./routes/Web3Modal.tsx"
import WaterGridAnimation from "./routes/WaterGridAnimation.tsx"

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/sonner",
        element: <Sonner />,
      },
      {
        path: "/web3-modal",
        element: <Web3Modal />,
      },
      {
        path: "/water-grid-animation",
        element: <WaterGridAnimation />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
)
