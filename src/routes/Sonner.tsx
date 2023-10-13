import { toast } from "sonner"

const Sonner = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-5xl text-teal-400 font-extrabold mb-10">Sonner</h2>
      <button
        onClick={() => toast("This is a toast", {
          description: "All I want to do is suck my balls",
          duration: 60000
        })}
        className="rounded-md text-2xl border py-2 hover:bg-zinc-100 active:bg-opacity-50"
      >
        Toast me
      </button>
    </div>
  )
}

export default Sonner
