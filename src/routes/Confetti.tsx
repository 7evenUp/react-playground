import { useEffect, useState } from "react"
import { TConductorInstance } from "react-canvas-confetti/dist/types"
import Fireworks from "react-canvas-confetti/dist/presets/fireworks"

const Confetti = () => {
  const [conductor, setConductor] = useState<TConductorInstance>()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPrefersReducedMotion(true)
    }
  }, [])

  const onRun = () => {
    if (prefersReducedMotion) {
      console.log("no animation - reduced motion is set")
    } else {
      conductor?.run({ speed: 2 })

      setTimeout(() => {
        conductor?.pause()
      }, 5000)
    }
  }

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor)
  }

  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-5xl text-teal-400 font-extrabold mb-10">
          Confetti
        </h2>
        <button
          onClick={onRun}
          className="rounded-md text-2xl border py-2 hover:bg-zinc-100 active:bg-opacity-50"
        >
          Run
        </button>
      </div>
      <Fireworks onInit={onInit} />
    </>
  )
}

export default Confetti
