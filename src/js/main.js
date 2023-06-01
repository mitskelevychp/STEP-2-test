let mobileMenuIcon = document.querySelector(".header__nav-wrapper");

let burgerMenu = document.querySelector(".header__nav__icon");
let crossIcon = document.querySelector(".header__nav__cross-icon");
let mobileMenu = document.querySelector(".header__nav");
let mobileMenuItems = document.querySelectorAll(".header__nav__item");

let status = false;
mobileMenuIcon.addEventListener("click", (event) => {
  if (status) {
    burgerMenu.classList.remove("header__nav__icon--passive");
    crossIcon.classList.remove("header__nav__cross-icon--active");
    mobileMenu.classList.remove("header__nav--active");
    status = false;
  } else {
    status = true;
    burgerMenu.classList.add("header__nav__icon--passive");
    crossIcon.classList.add("header__nav__cross-icon--active");
    mobileMenu.classList.add("header__nav--active");
  }
});
