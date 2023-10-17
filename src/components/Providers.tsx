import React, { CSSProperties } from "react"

import { Toaster } from "sonner"

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react"
import { WagmiConfig } from "wagmi"
import { arbitrum, mainnet } from "wagmi/chains"

const chains = [arbitrum, mainnet]
const projectId = "9869f436bc873846db37f90c8cfc8ee9"

 const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
    "18388be9ac2d02726dbac9777c96efaac06d744b2f6d580fccdd4127a6d01fd1",
  ],
})

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Toaster
        className="2xl:![--width:23.17vw] 2xl:![--offset:2.083vw] 2xl:![--gap:0.911vw]"
        position="top-right"
        toastOptions={{
          style: {
            backgroundColor: "palegoldenrod",
          } as CSSProperties,
          className: "2xl:!text-[0.846vw] 2xl:!p-[1.041vw] 2xl:!rounded-[0.52vw]",
        }}
      />
    </>
  )
}

export default Providers
