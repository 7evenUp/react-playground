import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useBalance, useAccount, useDisconnect } from "wagmi"

const Web3Modal = () => {
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const { disconnect, isLoading } = useDisconnect()

  return (
    <div className="flex flex-col gap-2 items-center">
      <h1>Web3Modal</h1>
      {isConnected ? (
        <button
          className="bg-indigo-800 text-indigo-100 hover:bg-indigo-700 rounded-md px-2 py-1"
          onClick={() => disconnect()}
        >
          disconnect
        </button>
      ) : (
        <button
          className="bg-indigo-800 text-indigo-100 hover:bg-indigo-700 rounded-md px-2 py-1"
          onClick={() => open()}
        >
          open
        </button>
      )}
      {address && address}
    </div>
  )
}

export default Web3Modal
