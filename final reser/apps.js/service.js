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

// footer
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  backToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
