import anime from "animejs"

const GRID_WIDTH = 25
const GRID_HEIGHT = 20

const WaterGridAnimation = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-5xl text-blue-400 font-extrabold mb-10">
        Water Grid Animation
      </h2>
      <WaterDropGrid />
    </div>
  )
}

const WaterDropGrid = () => {
  return (
    <div className="relative grid h-[500px] place-content-center bg-zinc-900 px-8">
      <DotGrid />
    </div>
  )
}

const DotGrid = () => {
  const dots = []
  let index = 0

  const handleDotClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget.dataset.index
      ? e.currentTarget.dataset.index
      : "0"
      
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -5, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: parseInt(target),
      }),
    })
  }

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-pointer rounded-full p-2 transition-colors hover:bg-zinc-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-400 opacity-50 group-hover:from-teal-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      )
      index++
    }
  }

  return (
    <div
      className="grid w-fit"
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
    >
      {dots}
    </div>
  )
}

export default WaterGridAnimation
