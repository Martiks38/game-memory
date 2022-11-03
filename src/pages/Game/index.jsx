import { useEffect } from 'react'
import GridGame from '../../components/GridGame'
import colorToGray from '../../utils/colorToGray'
import Layout from '../Layout'

function Game() {
  useEffect(() => {
    const id_interval_ruins = colorToGray('#background-image-game')

    return () => clearInterval(id_interval_ruins)
  }, [])

  return (
    <Layout>
      <div className="grid place-content-center h-full w-full">
        <img
          src="/ruins.jpg"
          alt=""
          className="absolute top-1/2 -translate-y-1/2 w-full object-cover transitionGame -z-10"
          id="background-image-game"
        />
        <GridGame />
      </div>
    </Layout>
  )
}

export default Game
