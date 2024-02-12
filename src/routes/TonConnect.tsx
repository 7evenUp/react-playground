import {
  useTonAddress,
  useTonConnectModal,
  useTonConnectUI,
} from "@tonconnect/ui-react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from 'lucide-react'

const TonConnect = () => {
  const { state, open, close } = useTonConnectModal()
  const userFriendlyAddress = useTonAddress()
  const rawAddress = useTonAddress(false)
  const [tonConnectUI] = useTonConnectUI()

  return (
    <div className="flex flex-col">
      <h2 className="text-5xl text-teal-400 font-extrabold mb-10">
        Ton connect
      </h2>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-zinc-300 hover:bg-zinc-200 px-[15px] font-medium">
            Open dialog
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content
            className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
            // onPointerDownOutside={(e) => e.preventDefault()}
            // onInteractOutside={(e) => e.preventDefault()}
          >
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              Connect TON Wallet
            </Dialog.Title>
            <>
              {userFriendlyAddress && (
                <span>Wallet address: {userFriendlyAddress}</span>
              )}
              <button onClick={open}>Open modal</button>
              <button
                onClick={() => {
                  tonConnectUI.disconnect()
                }}
              >
                Disconnect
              </button>
            </>
            <Dialog.Close asChild>
              <button
                className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center"
                aria-label="Close"
              >
                <X />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default TonConnect
