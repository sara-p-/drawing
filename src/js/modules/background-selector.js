export default function backgroundSelector() {
  const section = document.querySelector('.section.fullscreen')
  const applyButton = document.querySelector('.button--apply')
  const backgroundButtons = document.querySelectorAll('.background__button')

  applyButton.addEventListener('click', (e) => {
    section.className = 'section fullscreen'
    const selectedBackground = document.querySelector(
      '.background__button.selected'
    )
    section.classList.add(selectedBackground.dataset.background)
  })
}
