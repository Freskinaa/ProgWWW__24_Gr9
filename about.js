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



//slideshow
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex1 = 0;

function showSlide(index) {
  if (index >= slide.length) {
    currentIndex1 = 0;
  } else if (index < 0) {
    currentIndex1 = slide.length - 1;
  }
  slides.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}

next.addEventListener("click", () => {
  currentIndex1++;
  showSlide(currentIndex1);
});

prev.addEventListener("click", () => {
  currentIndex1--;
  showSlide(currentIndex1);
});
