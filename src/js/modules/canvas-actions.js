import 'webpack-jquery-ui/draggable'
import 'webpack-jquery-ui/resizable'

export default function canvasActions() {
  const canvas = document.querySelector('.canvas')
  const applyButton = document.querySelector('.button--apply')

  // grab the shapes after they've been created by the sidenav options
  applyButton.addEventListener('click', (e) => {
    $('.shape').draggable()
    $('.shape').resizable()
  })
}
