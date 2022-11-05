/**
 *
 * @param {string} selectorImage - DOM element selector.
 * @returns {number} Interval ID.
 */

const colorToGray = (selectorImage) => {
  const $image = document.querySelector(selectorImage)
  let scale = 0

  const id_interval = setInterval(() => {
    scale += 0.1
    $image.style.filter = `grayscale(${Math.min(scale, 1)})`
  }, 30000)

  return id_interval
}

export default colorToGray
