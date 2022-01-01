import { gsap } from 'gsap'

export default function sidenav() {
  const sideNav = document.querySelector('nav.sidenav')
  const sideNavOpen = document.querySelector('button#open')
  const sideNavClose = document.querySelector('button#close')
  const sideNavApply = document.querySelector('button#apply')

  // ******************* Opening/Closing the sidenav ******************* //
  gsap.set(sideNav, {
    x: '-100%',
  })

  sideNavOpen.addEventListener('click', (e) => {
    const selectedShapes = document.querySelectorAll('.shapes__button.selected')
    selectedShapes.forEach((shape) => {
      shape.classList.remove('selected')
    })
    gsap.to(sideNav, {
      x: 0,
      duration: 1.5,
      ease: 'power3.out',
    })
  })
  sideNavClose.addEventListener('click', (e) => {
    gsap.to(sideNav, {
      x: '-100%',
      duration: 1.5,
      ease: 'power3.out',
    })
  })
  sideNavApply.addEventListener('click', (e) => {
    gsap.to(sideNav, {
      x: '-100%',
      duration: 1.5,
      ease: 'power3.out',
    })
  })

  // ******************* Selecting the Items ******************* //
  const backgroundItems = document.querySelectorAll('.background__button')
  const shapeItems = document.querySelectorAll('.shapes__button')

  // Background Items
  backgroundItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      // remove 'selected' class from all background items, and then add it to the clicked item
      backgroundItems.forEach((newItem) => {
        newItem.classList.remove('selected')
      })
      item.classList.toggle('selected')
    })
  })

  // Shape Items
  shapeItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('selected')
    })
  })

  // ******************* Un-selecting the Items ******************* //
  const unselectButton = document.querySelector('.button--unselect')

  unselectButton.addEventListener('click', (e) => {
    const selected = document.querySelectorAll('.selected')
    selected.forEach((item) => {
      item.classList.remove('selected')
    })
  })
}
