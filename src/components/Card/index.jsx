import { memo } from 'react'

import flipCard from '../../utils/flipCard'

function Card({ src, onFlip }) {
  return (
    <div
      className="card-container"
      onClick={(event) => flipCard(event.target, onFlip)}
    >
      <div className="relative p-2 w-full h-full card" data-flip="true">
        <figure className="absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black border-solid border-2 border-[#BFB37A] rounded-md cursor-pointer z-10 back-card">
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover pointer-events-none"
          />
        </figure>
        <figure className="absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black border-solid border-2 border-[#BFB37A] rounded-md cursor-pointer front-card z-20">
          <img
            src="/logo-2.png"
            alt=""
            className="w-full h-full object-contain pointer-events-none"
          />
        </figure>
      </div>
    </div>
  )
}

export default memo(Card, (prevProps, props) => prevProps.src === props.src)
