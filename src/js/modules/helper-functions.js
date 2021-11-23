import { gsap } from 'gsap'

export function sideNavToggle() {
  const sideNav = document.querySelector('nav.sidenav')
  tl.to(sideNav, {
    duration: 1.5,
    ease: 'power3.out',
    x: 0,
  }).reverse()
}
