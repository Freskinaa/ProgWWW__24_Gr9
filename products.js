let currentPage = 1;
const productsPerPage = 6;

const products = [
  {
    name: "Americano",
    description:
      "Caffè americano, also known as americano or American, is a type of coffee drink prepared by diluting an espresso shot with hot water.",
    image: "./assets/images/americane.jpg",
    price: "5.00$",
    type: "hot",
  },
  {
    name: "Cappuccino",
    description:
      "Cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk including a layer of milk foam.",
    image: "./assets/images/capuccino.jpg",
    price: "3.50$",
    type: "hot",
  },
  {
    name: "Macchiato",
    description:
      "Macchiato, sometimes called espresso macchiato and often shortened to just macchiato in English.",
    image: "./assets/images/machiato.jpg",
    price: "3.75$",
    type: "hot",
  },
  {
    name: "Iced Mocha",
    description:
      "When you order an iced mocha coffee, you'll receive a decadent beverage consisting of mocha sauce, espresso, milk, and ice.",
    image: "./assets/images/icedmochaa.jpg",
    price: "4.00$",
    type: "cold",
  },
  {
    name: "Frappe",
    description:
      "If you're a fan of having your coffee blended into a frothy, a frappe might just be the perfect choice for you.",
    image: "./assets/images/frappe.jpg",
    price: "2.50$",
    type: "cold",
  },
  {
    name: "Cold brew",
    description:
      "Cold brew also called cold water extraction or cold pressing. We're huge fans of cold brew as a fantastic variant of iced coffee.",
    image: "./assets/images/coldbrew.jpg",
    price: "3.00$",
    type: "cold",
  },
  {
    name: "Breve",
    description:
      "Breve coffee isn't just another coffee trend. It's a testament to the art of brewing, a blend of tradition and creativity.",
    image: "./assets/images/brave.jpg",
    price: "2.75$",
    type: "hot",
  },
  {
    name: "Turkish Coffee",
    description:
      "Turkish coffee combines special preparation and brewing techniques with a rich communal traditional culture.",
    image: "./assets/images/turkish.jpg",
    price: "2.50$",
    type: "hot",
  },
  {
    name: "Cortado",
    description:
      "A cortado is a Spanish beverage consisting of espresso mixed with a roughly equal amount of warm milk to reduce the acidity.",
    image: "./assets/images/cortado.jpg",
    price: "3.50$",
    type: "hot",
  },
  {
    name: "Dalgona",
    description:
      "Dalgona Coffee is incredibly easy to make with only 3 ingredients! You’ll have a fluffy and deliciously whipped coffee in no time!",
    image: "./assets/images/dalgona.jpg",
    price: "3.50$",
    type: "cold",
  },
  {
    name: "Dirty Chai",
    description:
      "Dirty chai is a popular espresso drink served in coffee shops. It consists of a shot of espresso mixed into 'spiced tea'.",
    image: "./assets/images/dirtychai.jpg",
    price: "4.50$",
    type: "hot",
  },
  {
    name: "Mazagran",
    description:
      "Mazagran is a cold, sweetened coffee drink that originated in Algeria. Portuguese may use espresso, lemon, mint and rum.",
    image: "./assets/images/mazagran.jpg",
    price: "2.80$",
    type: "cold",
  },
  {
    name: "Flat white",
    description:
      "The flat white originated from Australia, purportedly invented for customers wanting a milky coffee drink.",
    image: "./assets/images/flatwhite.jpg",
    price: "2.50$",
    type: "hot",
  },
  {
    name: "Doppio",
    description:
      "A doppio needs little explanation beyond that it’s also known as a double espresso — this makes for a highly concentrated.",
    image: "./assets/images/doppio.jpg",
    price: "1.50$",
    type: "hot",
  },
  {
    name: "Arabica",
    description:
      "Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using.",
    image: "./assets/images/arabica.jpg",
    price: "2.30$",
    type: "hot",
  },
  {
    name: "Galao",
    description:
      "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. It contains twice as much foamed milk.",
    image: "./assets/images/galão.jpg",
    price: "2.00$",
    type: "hot",
  },
  {
    name: "Bulletproof",
    description:
      "Bulletproof coffee is a trendy beverage known for its unique ingredients and potential health benefits.",
    image: "./assets/images/bulletproof.jpg",
    price: "2.20$",
    type: "hot",
  },
  {
    name: "Cafe au Lait",
    description:
      "Mazagran is a cold, sweetened coffee drink that originated in Algeria. Portuguese may use espresso, lemon, mint and rum.",
    image: "./assets/images/caféaulait.jpg",
    price: "1.50$",
    type: "hot",
  },
  {
    name: "Affogato",
    description:
      "The name “Affogato” translates to “drowned”, signifying the act of drowning the ice cream in and aromatic espresso.",
    image: "./assets/images/Aaffogato.jpg",
    price: "1.80$",
    type: "cold",
  },
  {
    name: "Ristretto",
    description:
      "The ristretto originated in the early 20th century and is believed to be the original espresso. “Ristretto” means ‘restricted’.",
    image: "./assets/images/ristretto.jpg",
    price: "3.20$",
    type: "hot",
  },
  {
    name: "Shakerato",
    description:
      "Shakerato, a delightful Italian coffee creation, is crafted by vigorously shaking freshly brewed espresso, ice, and sugar.",
    image: "./assets/images/shakerato.jpg",
    price: "1.90$",
    type: "cold",
  },
];

let currentProducts = [...products];

function getPaginatedProducts() {
  const start = (currentPage - 1) * productsPerPage;
  const end = currentPage * productsPerPage;
  return currentProducts.slice(start, end);
}

function searchProducts(searchTerm) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function filterProducts(type) {
  return products.filter((product) => product.type === type || type === "all");
}

function sortProducts(order) {
  return [...products].sort((a, b) => {
    if (order === "asc") {
      return a.name.localeCompare(b.name);
    } else if (order === "desc") {
      return b.name.localeCompare(a.name);
    }
  });
}

function onSearch() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  currentProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  currentPage = 1;
  updateUI();
}

function onFilter(filterType) {
  currentProducts = products.filter(
    (product) => filterType === "all" || product.type === filterType
  );
  currentPage = 1;
  updateUI();
}

function onSort(order) {
  currentProducts.sort((a, b) => {
    if (order === "asc") {
      return a.name.localeCompare(b.name);
    } else if (order === "desc") {
      return b.name.localeCompare(a.name);
    } else if (order === "priceLowHigh") {
      const priceComparison = parsePrice(a.price) - parsePrice(b.price);
      return priceComparison === 0
        ? a.name.localeCompare(b.name)
        : priceComparison;
    } else if (order === "priceHighLow") {
      const priceComparison = parsePrice(b.price) - parsePrice(a.price);
      return priceComparison === 0
        ? a.name.localeCompare(b.name)
        : priceComparison;
    }
  });
  currentPage = 1;
  updateUI();
}

function parsePrice(priceString) {
  return parseFloat(priceString.replace("$", ""));
}

function displayProducts(products) {
  const productContainer = document.getElementById("product-list");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const productCard = `
      <div class="coffeetypes__card">
        <div class="coffeetypes__img">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="coffeetypes__content">
                <h3>${product.name}</h3>
                <p>
                ${product.description}
                </p>
                <div class="shop">
                  <span>${product.price}</span>
                  <div class="btn__group order__btn">
                    <button onclick='saveProductDetails(${JSON.stringify(
                      JSON.stringify(product)
                    )})'>Order now</button>
                  </div>
                </div>
          </div>
      </div>`;
    productContainer.innerHTML += productCard;
  });
}

function saveProductDetails(productDetails) {
  localStorage.setItem("selectedProduct", productDetails);
  window.location.href = "./order.html";
}

function createPaginationControls(totalProducts) {
  const pageCount = Math.ceil(totalProducts / productsPerPage);
  const paginationContainer = document.getElementById("pagination-controls");
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    const pageButton = `<button class="page-number" onclick="goToPage(${i})">${i}</button>`;
    paginationContainer.innerHTML += pageButton;
  }
}

function goToPage(page) {
  currentPage = page;
  updateUI();
}

function updateUI() {
  const paginatedProducts = getPaginatedProducts();
  displayProducts(paginatedProducts);
  createPaginationControls(currentProducts.length);

  const noResults = document.querySelector(".no-results");
  noResults.style.display = currentProducts.length === 0 ? "block" : "none";
}

function getRandomProducts() {
  const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
  displayProducts(shuffledProducts.slice(0, 6));
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === "/products.html") {
    updateUI();
  } else {
    getRandomProducts();
  }
});

document.getElementById("searchInput").addEventListener("input", onSearch);
document
  .getElementById("filterAll")
  .addEventListener("click", () => onFilter("all"));
document
  .getElementById("filterHot")
  .addEventListener("click", () => onFilter("hot"));
document
  .getElementById("filterCold")
  .addEventListener("click", () => onFilter("cold"));
document
  .getElementById("sortAZ")
  .addEventListener("click", () => onSort("asc"));
document
  .getElementById("sortZA")
  .addEventListener("click", () => onSort("desc"));
document
  .getElementById("sortPriceLowHigh")
  .addEventListener("click", () => onSort("priceLowHigh"));
document
  .getElementById("sortPriceHighLow")
  .addEventListener("click", () => onSort("priceHighLow"));
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const column1 = document.getElementById("column-1");
  const column2 = document.getElementById("column-2");
  const clone = draggedElement.cloneNode(true);
  clone.id = data + "-" + Math.random().toString(36).substr(2, 9);

  const totalItems = column1.children.length + column2.children.length;

  if (totalItems < 12) {
    if (column1.children.length < 6) {
      column1.appendChild(clone);
    } else {
      column2.appendChild(clone);
    }
  } else {
    alert("You can only add up to 12 items!");
  }
}

function finalizeOrder() {
  const column1 = Array.from(document.getElementById("column-1").children).map(
    (child) => child.textContent.trim()
  );
  const column2 = Array.from(document.getElementById("column-2").children).map(
    (child) => child.textContent.trim()
  );
  const selectedOptions = column1.concat(column2);

  if (selectedOptions.length > 0) {
    alert("Your drink has been customized with: " + selectedOptions.join(", "));
  } else {
    alert("Please select at least one option to customize your drink.");
  }
}
const loggedInUser = {
  firstName: loggedInUser.firstName,
  lastName: "Gashi",
};

function finalizeOrder() {
  const modal = document.getElementById("order-modal");
  modal.style.display = "flex";

  if (loggedInUser) {
    document.getElementById("first-name").value = loggedInUser.firstName;
    document.getElementById("last-name").value = loggedInUser.lastName;
  } else {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
  }
}

function closeModal() {
  const modal = document.getElementById("order-modal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("order-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document
  .getElementById("order-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const location = document.getElementById("location").value;
    const phoneNumber = document.getElementById("phone-number").value;

    alert(
      `Porosia u finalizua për: ${firstName} ${lastName}\nLokacioni: ${location}\nTelefoni: ${phoneNumber}`
    );

    closeModal();
  });
function closeModal() {
  document.getElementById("order-modal").style.display = "none";
}
