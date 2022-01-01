// Creating the shapes on the canvas
export function createShape(item) {
  const div = document.createElement('div')
  div.classList.add('shape')

  const handle = document.createElement('div')
  handle.classList.add('shape__handle')

  const rotateHandle = document.createElement('div')
  rotateHandle.classList.add('shape__rotate-handle')

  const rotateIcon = document.createElement('i')
  rotateIcon.classList.add('fas', 'fa-sync-alt')

  rotateHandle.append(rotateIcon)

  const img = document.createElement('img')
  img.classList.add('shape__image', 'image--contain')
  img.src = item.src
  img.alt = item.alt

  div.append(img)
  div.append(handle)
  div.append(rotateHandle)

  return div
}
