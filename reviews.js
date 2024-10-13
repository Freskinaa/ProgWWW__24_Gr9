document.addEventListener("DOMContentLoaded", () => {
  const indicators = document.querySelectorAll(".indicator");
  const cards = document.querySelectorAll(".reviews__card");
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

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showCards(index);
    });
  });

  showCards(currentPage);
});
