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



const productNames = [
  "Americano",
  "Cappuccino",
  "Macchiato",
  "Iced Mocha",
  "Frappe",
  "Cold brew",
  "Breve",
  "Turkish Coffee",
  "Cortado",
  "Dalgona",
  "Dirty Chai",
  "Mazagran"
];

const searchInput = document.getElementById('searchInput');
const datalist = document.getElementById('productSuggestions');
const coffeeCards = document.querySelectorAll('.coffeetypes__card');

function updateSuggestions() {
  const query = searchInput.value.toLowerCase();
  datalist.innerHTML = '';

  productNames.forEach(name => {
    if (name.toLowerCase().includes(query)) {
      const option = document.createElement('option');
      option.value = name;
      datalist.appendChild(option);
    }
  });
}

function filterProducts() {
  const query = searchInput.value.toLowerCase();
  let hasResults = false; 

  coffeeCards.forEach(card => {
    const productName = card.querySelector('h3').textContent.toLowerCase();
    if (productName.includes(query) || query === '') {
      card.style.display = 'block';
      hasResults = true; 
    } else {
      card.style.display = 'none';
    }
  });

  const noResultsDiv = document.querySelector('.no-results');
  if (hasResults) {
    noResultsDiv.style.display = 'none';
    document.getElementById("viewMoreBtn").style.display = "none"; 
    document.getElementById("backBtn").style.display = "none"; // Hide back button
  } else {
    noResultsDiv.style.display = 'block';
    document.getElementById("viewMoreBtn").style.display = "none"; // Hide view more button
    document.getElementById("backBtn").style.display = "none"; // Hide back button
  }
}

searchInput.addEventListener('input', () => {
  updateSuggestions();
  filterProducts();
});
