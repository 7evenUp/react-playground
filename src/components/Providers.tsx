import React from "react"
import { WagmiConfig } from "wagmi"

import { chains, projectId, wagmiConfig } from "@/lib/wagmi-config"
import { Web3Modal } from "@web3modal/react"
import { EthereumClient } from "@web3modal/ethereum"

const ethereumClient = new EthereumClient(wagmiConfig, chains)

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default Providers
