let currentIndex = 0;

function plusSlides(direction) {
  const reviewsGrid = document.querySelector('.reviews-grid');
  const cards = document.querySelectorAll('.cards');
  const cardWidth = cards[0].offsetWidth + 20; 
  const totalCards = cards.length;
  const visibleCards = 3;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalCards - visibleCards;
  } else if (currentIndex > totalCards - visibleCards) {
    currentIndex = 0;
  }

  reviewsGrid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
