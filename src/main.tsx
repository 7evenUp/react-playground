import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Providers from "./components/Providers.tsx"

import Root from "./routes/Root.tsx"
import First from "./routes/First.tsx"
import Second from "./routes/Second.tsx"
import WalletConnect from "./routes/WalletConnect.tsx"

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/first",
        element: <First />,
      },
      {
        path: "/second",
        element: <Second />,
      },
      {
        path: "/wallet-connect",
        element: <WalletConnect />,
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
