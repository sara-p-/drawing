// Creating the shapes on the canvas
export function createShape(item) {
  const button = document.createElement('button')
  button.classList.add('shape')

  const img = document.createElement('img')
  img.classList.add('shape__image', 'image--contain')
  img.src = item.src
  img.alt = item.alt

  button.append(img)

  return button
}
