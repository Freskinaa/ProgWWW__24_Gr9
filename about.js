const cards = document.querySelectorAll(".reviews__card");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

function showCards(index) {
  cards.forEach((card, i) => {
    card.style.display = i >= index && i < index + 3 ? "block" : "none";
  });
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === Math.floor(index / 3));
  });
}

showCards(currentIndex);

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    currentIndex = i * 3;
    showCards(currentIndex);
  });
});

const reserveBtn = document.getElementById("reserveBtn");
const popupModal = document.getElementById("popupModal");
const closePopupBtn = document.getElementById("closePopup");

reserveBtn.addEventListener("click", () => {
  popupModal.style.display = "flex";
});

closePopupBtn.addEventListener("click", () => {
  popupModal.style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slidecard .img");
  const dots = document.querySelectorAll(".dots-container .dot");
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img, idx) => {
      img.style.display = (idx === index) ? 'block' : 'none';
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });

    currentIndex = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  showSlide(currentIndex);
});
