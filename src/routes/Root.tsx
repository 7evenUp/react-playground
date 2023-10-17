import { Link, Outlet } from "react-router-dom"

const Root = () => {
  return (
    <main className="w-screen h-screen bg-zinc-100 flex">
      <div className="px-6 py-3 bg-zinc-900 text-zinc-100 flex flex-col items-center">
        <h1 className="text-xl text-teal-400 font-medium mb-6">Playground</h1>
        <nav className="flex flex-col gap-2">
          <Link to={"/first"} className="hover:underline">
            First
          </Link>
          <Link to={"/second"} className="hover:underline">
            Second
          </Link>
          <Link to={"/sonner"} className="hover:underline">
            Sonner
          </Link>
          <Link to={"/web3-modal"} className="hover:underline">
            Web3 Modal
          </Link>
        </nav>
      </div>
      <div className="flex-1 flex justify-center items-center bg-zinc-50 border">
        <Outlet />
      </div>
    </main>
  )
}

export default Root
