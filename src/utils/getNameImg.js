const getNameImg = (parentCard) => {
  let img = parentCard.querySelector('figure img')

  let name_img = img.src.split('/').at(-1)
  let name = name_img.split('.').at(0)

  return name
}

export default getNameImg
