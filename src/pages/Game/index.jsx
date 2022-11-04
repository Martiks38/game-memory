import GridGame from '../../components/GridGame'
import Layout from '../Layout'

function Game({ trial = false }) {
  return (
    <Layout>
      <div className="grid place-content-center h-full w-full">
        <img
          src="/ruins.webp"
          alt=""
          className="absolute top-1/2 -translate-y-1/2 w-full object-cover transitionGame -z-10"
          id="background-image-game"
        />
        <GridGame trial={trial} />
      </div>
    </Layout>
  )
}

export default Game
