import getNameImg from './getNameImg'

const flipCard = (target, onFlip) => {
  let card = target.closest('[data-flip]')

  const canFlip = card.dataset.flip

  if (canFlip !== 'true') return

  card.classList.toggle('flip')

  let isFlip = card.classList.contains('flip')

  if (isFlip) {
    let name = getNameImg(card)

    onFlip((stateGame) => {
      let cardNames = stateGame.cardNames.concat(name)

      return { ...stateGame, cardNames }
    })
  } else {
    onFlip((stateGame) => {
      let cardNames = stateGame.cardNames.slice(0, 0)

      return { ...stateGame, cardNames }
    })
  }
}

export default flipCard
