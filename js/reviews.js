let currentIndex = 0;

function plusSlides(direction) {
  const reviewsGrid = document.querySelector(".reviews-grid");
  const cards = document.querySelectorAll(".cards");
  const cardWidth = cards[0].offsetWidth + 20;
  const totalCards = cards.length;

  let visibleCards = 3;
  if (window.innerWidth <= 768) {
    visibleCards = 1;
  }

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalCards - visibleCards;
  } else if (currentIndex > totalCards - visibleCards) {
    currentIndex = 0;
  }

  reviewsGrid.style.transition = "transform 0.5s ease-in-out";
  reviewsGrid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

window.addEventListener("resize", () => {
  plusSlides(0);
});
