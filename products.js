let currentStartIndex = 0;
document.getElementById("viewMoreBtn").addEventListener("click", function () {
  const allCards = document.querySelectorAll(".coffeetypes__card");

  for (
    let i = currentStartIndex;
    i < currentStartIndex + 6 && i < allCards.length;
    i++
  ) {
    allCards[i].classList.add("hidden");
    allCards[i].classList.remove("add");
  }

  currentStartIndex += 6;

  for (
    let i = currentStartIndex;
    i < currentStartIndex + 6 && i < allCards.length;
    i++
  ) {
    allCards[i].classList.remove("hidden");
    allCards[i].classList.add("add");
  }

  if (currentStartIndex + 6 >= allCards.length) {
    this.style.display = "none";
  }

  document.getElementById("backBtn").style.display = "inline-block";
});

document.getElementById("backBtn").addEventListener("click", function () {
  const allCards = document.querySelectorAll(".coffeetypes__card");

  for (let i = currentStartIndex - 6; i < currentStartIndex && i >= 0; i++) {
    allCards[i].classList.remove("hidden");
    allCards[i].classList.add("add");
  }

  for (
    let i = currentStartIndex;
    i < currentStartIndex + 6 && i < allCards.length;
    i++
  ) {
    allCards[i].classList.add("hidden");
    allCards[i].classList.remove("add");
  }

  currentStartIndex -= 6;

  if (currentStartIndex <= 0) {
    currentStartIndex = 0;
    this.style.display = "none";
  }

  document.getElementById("viewMoreBtn").style.display = "inline-block";
});
