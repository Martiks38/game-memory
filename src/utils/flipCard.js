import getNameImg from './getNameImg'

const flipCard = (target, setNameFlippedCards) => {
  const card = target.closest('[data-flip]')

  const canFlip = card.dataset.flip

  if (canFlip !== 'true') return

  card.classList.toggle('flip')

  let isFlip = Array.from(card.classList).includes('flip')

  if (isFlip) {
    let name = getNameImg(card)

    setNameFlippedCards((prevValue) => prevValue.concat(name))
  } else {
    setNameFlippedCards((prevValue) => {
      let names = prevValue.slice()

      names.length = 0

      return names
    })
  }
}

export default flipCard
