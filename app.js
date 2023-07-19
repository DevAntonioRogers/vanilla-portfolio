// NAVBAR
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

// STICKY NAV
const nav = document.querySelector('nav');
const backToTopButton = document.querySelector('.btt-button')
function handleScroll() {
  if (window.scrollY > 0) {
    nav.classList.add('sticky-nav');
    backToTopButton.classList.add('show-btt-button')
  } else {
    nav.classList.remove('sticky-nav');
    backToTopButton.classList.remove('show-btt-button')
  }
}
window.addEventListener('scroll', handleScroll);
