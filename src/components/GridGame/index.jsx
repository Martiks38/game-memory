import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import Card from '../Card'
import Modal from '../Modal'
import ViewTime from '../ViewTime'

import generateGame from '../../utils/generateGame'
import getNameImg from '../../utils/getNameImg'
import { $, $$ } from '../../utils/selectors'
import colorToGray from '../../utils/colorToGray'

const ModalResult = React.lazy(() => import('../ModalResult'))

/**
 * Card matrix and game state container.
 *
 * @param {boolean} trial - Indicates if the game is against the clock.
 */
function GridGame({ trial }) {
  const [gameState, setGameState] = useState({
    status: 'playing',
    cardNames: [],
  })
  const dataGame = useRef({ flips: 0, time: 0 })

  const grid = useMemo(() => {
    if (gameState.status === 'playing') return generateGame.generateMatrix()

    return []
  }, [gameState.status])

  const initGameTime = useCallback(() => {
    if (dataGame.current.time === 0) dataGame.current.time = Date.now()
  }, [])

  const tryGame = useCallback(() => {
    let $flips = $$('.flip')

    $flips.forEach((card) => {
      card.classList.toggle('flip')
      card.dataset.flip = 'true'
    })

    setTimeout(() => {
      let $correct = $$('.correct')

      $correct.forEach((card) => {
        card.classList.toggle('correct')
      })
    }, 100)

    dataGame.current = { flips: 0, time: 0 }
    setGameState({ status: 'playing', cardNames: [] })
  }, [])

  useEffect(() => {
    let interval_ruins = null
    let $img = $('#background-image-game')

    if (trial && gameState.status === 'playing') {
      $img.style.filter = 'grayscale(0)'
      interval_ruins = colorToGray('#background-image-game')
    }

    if (gameState.status !== 'playing') {
      clearInterval(interval_ruins)
    }

    return () => {
      if ($img) $img.style.filter = 'grayscale(0)'

      clearInterval(interval_ruins)
    }
  }, [gameState.status])

  useEffect(() => {
    const { cardNames } = gameState
    let timeout_game = null
    let timeout_win = null

    if (cardNames.length !== 0) dataGame.current.flips += 1
    if (cardNames.length !== 2) return

    let $grid = $('#gameGrid')
    $grid.style.pointerEvents = 'none'

    timeout_game = setTimeout(() => {
      let flipped_cards = Array.from($$('.flip'))
      let same_names = new Set(cardNames).size === 1

      flipped_cards = flipped_cards.filter((card) => {
        let name = getNameImg(card)

        return cardNames.includes(name)
      })

      flipped_cards.forEach((card) => {
        if (same_names) {
          card.dataset.flip = 'false'
          card.classList.toggle('correct')
        } else {
          card.classList.toggle('flip')
        }
      })

      // You win if the total number of cards is equal to the number of cards turned over.
      let $total_flip = $$('.flip').length
      let $total_cards = $$('.card').length

      let won = $total_cards - $total_flip === 0

      if (won) {
        timeout_win = setTimeout(() => {
          dataGame.current.time = Date.now() - dataGame.current.time

          setGameState((gameState) => {
            return { ...gameState, status: 'victory' }
          })
        }, 200)
      } else {
        setGameState((gameState) => {
          return { ...gameState, cardNames: [] }
        })
      }

      $grid.style.pointerEvents = 'auto'
    }, 600)

    return () => {
      if (timeout_game) clearTimeout(timeout_game)
      if (timeout_win) clearTimeout(timeout_win)
    }
  }, [gameState.cardNames])

  return (
    <>
      {trial && gameState.status === 'playing' ? (
        <ViewTime
          initTime={dataGame.current.time}
          status={gameState.status}
          onFinish={setGameState}
        />
      ) : null}
      <div
        className="grid grid-rows-6 grid-cols-6 gap-2 max-h-[80vmin] max-w-[80vmin] z-10 min-h-[70vmin] min-w-[70vmin]"
        id="gameGrid"
        onClick={initGameTime}
      >
        {grid.map((card) => (
          <Card key={card.id} src={card.url_img} onFlip={setGameState} />
        ))}
      </div>

      <Suspense
        fallback={
          <Modal isClose={false}>
            <figure className="h-48 w-80">
              <img src="/loader.webp" alt="" className="object-fit" />
            </figure>
          </Modal>
        }
      >
        {gameState.status !== 'playing' ? (
          <ModalResult
            dataGame={dataGame.current}
            tryGame={tryGame}
            status={gameState.status}
          />
        ) : null}
      </Suspense>
    </>
  )
}

export default GridGame
