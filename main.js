const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

let menuButton = document.querySelector('.menu-button')
let menuContent = document.querySelector('.menu-content')

menuButton.addEventListener('change',(e)=>{
  if (menuButton.checked) {
    menuContent.classList.add('opened')
  } else {
    menuContent.classList.remove('opened')
  }
})