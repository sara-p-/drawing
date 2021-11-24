import { createShape } from './html-components'

export default function shapeSelector() {
  const canvas = document.querySelector('.canvas')
  const applyButton = document.querySelector('.button--apply')
  const shapeButtons = document.querySelectorAll('.shapes__button')

  applyButton.addEventListener('click', (e) => {
    const selectedShapes = document.querySelectorAll('.shapes__button.selected')

    selectedShapes.forEach((shape) => {
      const theImage = shape.querySelector('.shapes__image')
      canvas.append(createShape(theImage))
    })
  })
}
