import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import Card from '../Card'
import Modal from '../Modal'

import generateGame from '../../utils/generateGame'
import getNameImg from '../../utils/getNameImg'

const ModalVictory = React.lazy(() => import('../ModalVictory'))

function GridGame() {
  const [grid, setGrid] = useState(() => generateGame.generateMatrix())
  const [viewModalWin, setViewModalWin] = useState(false)
  const [nameFlippedCards, setNameFlippedCards] = useState(() => [])
  const dataGame = useRef({ flips: 0, time: 0 })

  const initGameTime = useCallback(() => {
    if (dataGame.current.time === 0) dataGame.current.time = Date.now()
  }, [])

  const tryGame = useCallback(() => {
    let newGameMatrix = generateGame.generateMatrix()

    setGrid(newGameMatrix)
    setViewModalWin((prevValue) => !prevValue)
    setNameFlippedCards(() => [])

    dataGame.current = { flips: 0, time: 0 }

    let flips = document.querySelectorAll('.flip')

    flips.forEach((card) => {
      card.classList.toggle('flip')
      card.dataset.flip = 'true'
    })

    setTimeout(() => {
      let flips = document.querySelectorAll('.correct')

      flips.forEach((card) => {
        card.classList.toggle('correct')
      })
    }, 100)
  }, [])

  useEffect(() => {
    let view = null
    let win = null

    if (nameFlippedCards.length !== 2) return

    const grid = document.querySelector('#gameGrid')
    grid.style.pointerEvents = 'none'

    view = setTimeout(() => {
      let flipped_cards = Array.from(document.querySelectorAll('.flip'))
      let same_names = new Set(nameFlippedCards).size === 1

      flipped_cards = flipped_cards.filter((card) => {
        let name = getNameImg(card)

        return nameFlippedCards.includes(name)
      })

      flipped_cards.forEach((card) => {
        if (same_names) {
          card.dataset.flip = 'false'
          card.classList.toggle('correct')
        } else {
          card.classList.toggle('flip')
        }
      })

      let total_flip = document.querySelectorAll('.flip').length
      let total_cards = document.querySelectorAll('.card').length

      let won = total_cards - total_flip === 0

      if (won) {
        win = setTimeout(() => {
          dataGame.current.time = Date.now() - dataGame.current.time

          setViewModalWin(true)
        }, 200)
      } else {
        setNameFlippedCards([])
      }

      dataGame.current.flips += 1

      grid.style.pointerEvents = 'auto'
    }, 600)

    return () => {
      if (view) clearTimeout(view)
      if (win) clearTimeout(win)
    }
  }, [nameFlippedCards])

  return (
    <>
      <div
        className="grid grid-rows-6 grid-cols-6 gap-2 z-10 max-h-[80vmin] max-w-[80vmin] min-h-[70vmin] min-w-[70vmin]"
        id="gameGrid"
        onClick={initGameTime}
      >
        {grid.map((card) => (
          <Card key={card.id} src={card.url_img} onFlip={setNameFlippedCards} />
        ))}
      </div>

      <Suspense
        fallback={
          <Modal isClose={false}>
            <figure className="h-48 w-80">
              <img src="/loader.gif" alt="" className="object-fit" />
            </figure>
          </Modal>
        }
      >
        {viewModalWin ? (
          <ModalVictory dataGame={dataGame.current} tryGame={tryGame} />
        ) : null}
      </Suspense>
    </>
  )
}

export default GridGame
