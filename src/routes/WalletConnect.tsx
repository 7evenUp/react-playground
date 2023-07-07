import { Web3Button, useWeb3Modal } from "@web3modal/react"
import { useAccount } from "wagmi"

const WalletConnect = () => {
  const { open, close } = useWeb3Modal()
  const { address, isConnected } = useAccount()

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div>Prebuilt button component:</div>
        <Web3Button />
      </div>

      <div>
        <div>Prebuilt custom button component:</div>
        <Web3Button
          avatar="hide"
          balance="show"
          icon="hide"
          label="Custom label"
        />
      </div>

      <div>
        <div>Custom button</div>
        <button
          className="rounded-md px-2 py-1 bg-emerald-400 text-white w-fit"
          onClick={() => open()}
        >
          Custom Connect
        </button>
      </div>

      {isConnected && address && <p>Connected address: {address}</p>}
    </div>
  )
}

export default WalletConnect
