// NAVBAR
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
  body.classList.toggle('no-scroll')

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

// Active Links


const navLinks = document.querySelectorAll('.nav-menu li a');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    navLinks.forEach(link => link.parentElement.classList.remove('active'),
      navMenu.classList.remove('active'),
      hamburger.classList.remove('active'),
      body.classList.remove('no-scroll'));
    this.parentElement.classList.add('active');
  });
});



const animateElements = gsap.utils.toArray(".animate");

gsap.from(animateElements, {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: animateElements[0],
    start: "top 80%",
    end: "bottom 80%",
    toggleActions: "play none none reset",
  },
});







