let currentPage = 1;
const itemsPerPage = 6;
let selectedFilter = "all";

const coffeeCards = document.querySelectorAll(".coffeetypes__card");
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

function getFilteredCards() {
  const query = searchInput.value.toLowerCase();
  const filteredCards = [];

  coffeeCards.forEach((card) => {
    const productName = card.querySelector("h3").textContent.toLowerCase();
    const isHot = card.classList.contains("hot");
    const isCold = card.classList.contains("cold");

    const matchesQuery = productName.includes(query) || query === "";
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "hot" && isHot) ||
      (selectedFilter === "cold" && isCold);

    if (matchesQuery && matchesFilter) {
      filteredCards.push(card);
    }
  });

  return filteredCards;
}

function showPage(page) {
  const filteredCards = getFilteredCards();
  const totalItems = filteredCards.length;

  currentPage = page;

  coffeeCards.forEach((card) => card.classList.add("hidden"));

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  for (let i = start; i < end && i < totalItems; i++) {
    filteredCards[i].classList.remove("hidden");
  }
  document.querySelectorAll(".page-number").forEach((number) => {
    number.classList.remove("active");
  });
  document
    .querySelector(`.page-number[data-page="${page}"]`)
    .classList.add("active");

  const noResultsDiv = document.querySelector(".no-results");
  if (filteredCards.length > 0) {
    noResultsDiv.style.display = "none";
    document.getElementById("viewMoreBtn").style.display = "none";
    document.getElementById("backBtn").style.display = "none";
  } else {
    noResultsDiv.style.display = "block";
    document.getElementById("viewMoreBtn").style.display = "none";
    document.getElementById("backBtn").style.display = "none";
  }
}

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
  showPage(1);
}

searchInput.addEventListener("input", () => {
  updateSuggestions();
  filterProducts();
});

document.getElementById("filterHot").addEventListener("click", () => {
  if (selectedFilter === "hot") {
    selectedFilter = "all";
    document.getElementById("filterHot").classList.remove("active");
  } else {
    selectedFilter = "hot";
    document.getElementById("filterHot").classList.add("active");
    document.getElementById("filterCold").classList.remove("active");
  }
  filterProducts();
});

document.getElementById("filterCold").addEventListener("click", () => {
  if (selectedFilter === "cold") {
    selectedFilter = "all";
    document.getElementById("filterCold").classList.remove("active");
  } else {
    selectedFilter = "cold";
    document.getElementById("filterCold").classList.add("active");
    document.getElementById("filterHot").classList.remove("active");
  }
  filterProducts();
});

document.getElementById("filterAll").addEventListener("click", () => {
  selectedFilter = "all";
  filterProducts();

  document.getElementById("filterHot").classList.remove("active");
  document.getElementById("filterCold").classList.remove("active");
});

document.querySelectorAll(".page-number").forEach((number) => {
  number.addEventListener("click", () => {
    const page = parseInt(number.dataset.page);
    showPage(page);
  });
});

showPage(1);
//drag and drop
function finalizeOrder() {
  var drink = document.getElementById("drink-customization").innerHTML;
  var modal = document.getElementById("order-modal");

  if (drink.trim() === "") {
    alert("Please select your drink options.");
  } else {
    document.getElementById(
      "order-summary"
    ).innerHTML = `<p><strong>Drink Customization:</strong> ${drink}</p>`;
    modal.style.display = "block";
  }
}

function closeModal() {
  var modal = document.getElementById("order-modal");
  modal.style.display = "none";
}

function submitOrder() {
  var name = document.getElementById("user-name").value;
  var location = document.getElementById("location").value;
  var phone = document.getElementById("phone").value;

  if (name && location && phone) {
    alert(
      `Order placed successfully!\nName: ${name}\nLocation: ${location}\nPhone: ${phone}`
    );
    closeModal();
  } else {
    alert("Please fill in all the fields.");
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);

  var newElement = document.createElement("p");
  newElement.textContent = draggedElement.textContent;
  document.getElementById("drink-customization").appendChild(newElement);
}
