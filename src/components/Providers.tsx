import React, { CSSProperties } from "react"
import { WagmiConfig } from "wagmi"

import { chains, projectId, wagmiConfig } from "@/lib/wagmi-config"
import { Web3Modal } from "@web3modal/react"
import { EthereumClient } from "@web3modal/ethereum"
import { Toaster } from "sonner"

const ethereumClient = new EthereumClient(wagmiConfig, chains)

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      <Toaster
        className="2xl:![--width:23.17vw] 2xl:![--offset:2.083vw] 2xl:![--gap:0.911vw]"
        position="top-right"
        style={{}}
        // style={
        //   {
        //     "--width": "30vw",
        //   } as CSSProperties
        // }
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
