// Variables
// var responsiveBtn = document.querySelector(".responsive-btn");

// responsiveBtn.addEventListener("click", function () {
//   var mobileMenu = document.getElementsByClassName("mobile-responsive-menu");

//   if (mobileMenu.length > 0) {
//     var currentDisplay = mobileMenu[0].style.display;
//     mobileMenu[0].style.display =
//       currentDisplay === "block" || currentDisplay === "" ? "none" : "block";
//   }
// });

// popular places slider
// const slider = document.querySelector(".slider ul");
// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");
// const totalItems = document.querySelectorAll(".slider li").length;
// const itemsVisible = 1; // Adjust this to show one item at a time
// const totalSlides = totalItems - itemsVisible + 1;
// let currentIndex = 0;

// prevButton.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//   } else {
//     currentIndex = totalSlides - 1;
//   }
//   updateSliderPosition();
// });

// nextButton.addEventListener("click", () => {
//   if (currentIndex < totalSlides - 1) {
//     currentIndex++;
//   } else {
//     currentIndex = 0;
//   }
//   updateSliderPosition();
// });

// function updateSliderPosition() {
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// FOR FAQ DROPDOWN

// faq

document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach((dropdownBtn) => {
    dropdownBtn.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      const icon = this.querySelector(".icon");

      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        icon.textContent = "▼";
      } else {
        dropdownContent.style.display = "block";
        icon.textContent = "▲";
      }
    });
  });
});

// section third
// this is for the second section

const centerCards = document.querySelector(".center-cards");
const cards = document.querySelectorAll(".center-card");
const totalCards = cards.length;

// Clone the first card and append it to the end
const firstCardClone = cards[0].cloneNode(true);
centerCards.appendChild(firstCardClone);

let currentIndex = 0;

function scrollCards() {
  currentIndex++;
  centerCards.style.transition = "transform 0.5s ease";
  centerCards.style.transform = `translateX(-${currentIndex * 320}px)`;

  if (currentIndex === totalCards) {
    setTimeout(() => {
      centerCards.style.transition = "none";
      centerCards.style.transform = `translateX(0)`;
      currentIndex = 0;
    }, 500);
  }
}

setInterval(scrollCards, 5000);
// responsive ness

// this is for my hamburger
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector("nav ul");

  hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});

// arrow work


