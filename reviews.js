document.addEventListener("DOMContentLoaded", () => {
  const indicators = document.querySelectorAll(".indicator");
  const cards = document.querySelectorAll(".reviews__card");
  const leftArrow = document.querySelector(".prev");
  const rightArrow = document.querySelector(".next");
  const cardsPerPage = 3; 
  let currentPage = 0;
  function showCards(page) {
    cards.forEach((card, index) => {
      card.style.display =
        index >= page * cardsPerPage && index < (page + 1) * cardsPerPage
          ? "block"
          : "none";
    });

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === page);
    });

    currentPage = page;
  }

  // Event për klikimet te indikatorët
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showCards(index);
    });
  });

  leftArrow.addEventListener("click", () => {
    if (currentPage > 0) {
      showCards(currentPage - 1);
    }
  });
  rightArrow.addEventListener("click", () => {
    if (currentPage < Math.ceil(cards.length / cardsPerPage) - 1) {
      showCards(currentPage + 1);
    }
  });

  showCards(currentPage);
});
