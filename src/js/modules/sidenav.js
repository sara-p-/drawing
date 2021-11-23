import { gsap } from 'gsap'

export default function sidenav() {
  const sideNav = document.querySelector('nav.sidenav')
  const sideNavOpen = document.querySelector('button#open')
  const sideNavClose = document.querySelector('button#close')

  // ******************* Opening/Closing the sidenav ******************* //
  gsap.set(sideNav, {
    x: '-100%',
  })

  sideNavOpen.addEventListener('click', (e) => {
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

  // ******************* Selecting the Items ******************* //
  const backgroundItems = document.querySelectorAll('.background__button')
  const shapeItems = document.querySelectorAll('.shapes__button')

  // Background Items
  backgroundItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('selected')
    })
  })

  // Shape Items
  shapeItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('selected')
    })
  })
}
