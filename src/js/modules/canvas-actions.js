import 'webpack-jquery-ui/draggable'
import 'webpack-jquery-ui/resizable'

export default function canvasActions() {
  const canvas = document.querySelector('.canvas')
  const applyButton = document.querySelector('.button--apply')

  // ***************** Shape Actions **************** //
  // grab the shapes after they've been created by the sidenav options
  applyButton.addEventListener('click', (e) => {
    $('.shape').draggable()
    $('.shape').resizable()

    const allShapes = document.querySelectorAll('.shape')
    // Shape click events/classes
    allShapes.forEach((shape) => {
      shape.addEventListener('mousedown', (e) => {
        shape.classList.add('mouse-down')
      })
      shape.addEventListener('mouseleave', (e) => {
        shape.classList.remove('mouse-down')
      })
    })
  })
}
