
let currentPage = 1;
const itemsPerPage = 6;

function showPage(page) {
  const allCards = document.querySelectorAll(".coffeetypes__card");
  const totalItems = allCards.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (page < 1 || page > totalPages) {
    return;
  }

  currentPage = page;

  allCards.forEach((card) => card.classList.add("hidden"));


  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  for (let i = start; i < end && i < totalItems; i++) {
    allCards[i].classList.remove("hidden");
    allCards[i].classList.add("add");
  }


  document.querySelectorAll(".page-number").forEach((number) => {
    number.classList.remove("active");
  });
  document.querySelector(`.page-number[data-page="${page}"]`).classList.add("active");
}


document.querySelectorAll(".page-number").forEach((number) => {
  number.addEventListener("click", () => {
    const page = parseInt(number.dataset.page);
    showPage(page);
  });
});

showPage(1);


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
  "Mazagran",
];

const searchInput = document.getElementById("searchInput");
const datalist = document.getElementById("productSuggestions");
const coffeeCards = document.querySelectorAll(".coffeetypes__card");

function updateSuggestions() {
  const query = searchInput.value.toLowerCase();
  datalist.innerHTML = "";

  productNames.forEach((name) => {
    if (name.toLowerCase().includes(query)) {
      const option = document.createElement("option");
      option.value = name;
      datalist.appendChild(option);
    }
  });
}

function filterProducts() {
  const query = searchInput.value.toLowerCase();
  let hasResults = false;

  coffeeCards.forEach((card) => {
    const productName = card.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(query) || query === "") {
      card.style.display = "block";
      hasResults = true;
    } else {
      card.style.display = "none";
    }
  });

  const noResultsDiv = document.querySelector(".no-results");
  if (hasResults) {
    noResultsDiv.style.display = "none";
    document.getElementById("viewMoreBtn").style.display = "none";
    document.getElementById("backBtn").style.display = "none"; 
  } else {
    noResultsDiv.style.display = "block";
    document.getElementById("viewMoreBtn").style.display = "none"; 
    document.getElementById("backBtn").style.display = "none"; 
  }
}

searchInput.addEventListener("input", () => {
  updateSuggestions();
  filterProducts();
});

let selectedFilter = 'all'; 
function filterProducts() {
  const query = searchInput.value.toLowerCase();
  let hasResults = false;

  coffeeCards.forEach((card) => {
    const productName = card.querySelector("h3").textContent.toLowerCase();
    const isHot = card.classList.contains('hot'); 
    const isCold = card.classList.contains('cold'); 

    const matchesQuery = productName.includes(query) || query === "";
    const matchesFilter = (selectedFilter === 'all') ||
                          (selectedFilter === 'hot' && isHot) ||
                          (selectedFilter === 'cold' && isCold);

    if (matchesQuery && matchesFilter) {
      card.style.display = "block";
      hasResults = true;
    } else {
      card.style.display = "none";
    }
  });

  const noResultsDiv = document.querySelector(".no-results");
  if (hasResults) {
    noResultsDiv.style.display = "none";
    document.getElementById("viewMoreBtn").style.display = "none";
    document.getElementById("backBtn").style.display = "none"; 
  } else {
    noResultsDiv.style.display = "block";
    document.getElementById("viewMoreBtn").style.display = "none"; 
    document.getElementById("backBtn").style.display = "none"; 
  }
}


document.getElementById("filterHot").addEventListener("click", () => {
  selectedFilter = 'hot';
  filterProducts();

  
  document.getElementById("filterHot").classList.add("active");
  document.getElementById("filterCold").classList.remove("active");
});

document.getElementById("filterCold").addEventListener("click", () => {
  selectedFilter = 'cold';
  filterProducts();

 
  document.getElementById("filterCold").classList.add("active");
  document.getElementById("filterHot").classList.remove("active");
});


document.getElementById("filterAll").addEventListener("click", () => {
  selectedFilter = 'all';
  filterProducts();


  document.getElementById("filterHot").classList.remove("active");
  document.getElementById("filterCold").classList.remove("active");
});


