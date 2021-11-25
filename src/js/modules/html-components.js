// Creating the shapes on the canvas
export function createShape(item) {
  const div = document.createElement('div')
  div.classList.add('shape')

  const img = document.createElement('img')
  img.classList.add('shape__image', 'image--contain')
  img.src = item.src
  img.alt = item.alt

  div.append(img)

  return div
}
