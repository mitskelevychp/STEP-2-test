let mobileMenuIcon = document.querySelector(".header__nav-wrapper");
let burgerMenu = document.querySelector(".header__nav__icon");
let crossIcon = document.querySelector(".header__nav__cross-icon");
let mobileMenu = document.querySelector(".header__nav");
let status = false;

document.addEventListener("DOMContentLoaded", function () {
  mobileMenuIcon.addEventListener("click", (event) => {
    if (status) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener("click", function (event) {
    let targetElement = event.target;
    if (
      // ! ?
      //   !mobileMenu.contains(targetElement) &&
      !mobileMenuIcon.contains(targetElement)
    ) {
      closeMenu();
    }
  });

  mobileMenu.addEventListener("click", function (event) {
    let targetElement = event.target;
    if (
      //   !targetElement.classList.contains("header__nav__item") ||
      !targetElement.classList.contains("header__nav")
    ) {
      closeMenu();
    }
  });

  function openMenu() {
    status = true;
    burgerMenu.classList.add("header__nav__icon--passive");
    crossIcon.classList.add("header__nav__cross-icon--active");
    mobileMenu.classList.add("header__nav--active");
  }

  function closeMenu() {
    status = false;
    burgerMenu.classList.remove("header__nav__icon--passive");
    crossIcon.classList.remove("header__nav__cross-icon--active");
    mobileMenu.classList.remove("header__nav--active");
  }
});

// mobileMenuIcon.addEventListener("click", (event) => {
//   if (status) {
//     burgerMenu.classList.remove("header__nav__icon--passive");
//     crossIcon.classList.remove("header__nav__cross-icon--active");
//     mobileMenu.classList.remove("header__nav--active");
//     status = false;
//   } else {
//     status = true;
//     burgerMenu.classList.add("header__nav__icon--passive");
//     crossIcon.classList.add("header__nav__cross-icon--active");
//     mobileMenu.classList.add("header__nav--active");
//   }
// });
