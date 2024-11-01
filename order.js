const productNames = [
  "Americano",
  "Cappuccino",
  "Macchiato",
  "Iced Mocha",
  "Frappe",
  "Cold Brew",
  "Breve",
  "Turkish Coffee",
  "Cortado",
  "Dalgona",
  "Dirty Chai",
  "Mazagran",
  "Doppio",
  "Arabica",
  "Galão",
  "Bulletproof",
  "Café au Lait",
  "Affogato",
  "Ristretto",
  "Shakerato",
];

const coffeePrices = {
  espresso: 3.0,
  latte: 4.0,
  cappuccino: 3.5,
  americano: 5.0,
  icedMocha: 4.0,
  frappe: 2.5,
  coldBrew: 3.0,
  breve: 2.75,
  turkishCoffee: 2.5,
  cortado: 3.5,
  dalgona: 3.5,
  dirtyChai: 4.5,
  mazagran: 2.8,
  dopio: 1.5,
  arabica: 2.5,
  gelao: 2.0,
  mocha: 4.5,
  macchiato: 3.75,
  affogato: 3.25,
  nitroColdBrew: 4.0,
  irishCoffee: 2.75,
  decaf: 3.0,
  flatWhite: 2.5,
  bulletproof: 2.2,
  cafeAuLait: 1.5,
  ristretto: 3.2,
  shakerato: 1.9,
};

function animateTotalCost(target, start, end, duration) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    target.innerText = `$${(start + progress * (end - start)).toFixed(2)}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      target.classList.add("updated");
      setTimeout(() => target.classList.remove("updated"), 300);
    }
  }

  window.requestAnimationFrame(step);
}

function updateTotalCost() {
  const coffeeType = document.getElementById("coffee-type").value;
  const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;

  if (quantity > 1000) {
    alert(`Sasia e porosisë prej ${quantity} është mbi 1000. Ju lutemi zgjidhni një sasi më të vogël.`);
    return;
  }

  const totalCost = (coffeePrices[coffeeType] * quantity).toFixed(2);
  const totalCostElement = document.getElementById("total-cost");

  animateTotalCost(
    totalCostElement,
    parseFloat(totalCostElement.innerText.slice(1)) || 0,
    parseFloat(totalCost),
    400
  );
}

function confirmOrder() {
  const coffeeType = document.getElementById("coffee-type").value;
  const quantity = document.getElementById("quantity").value;
  const paymentMethod = document.getElementById("payment-method").value;
  const address = document.getElementById("address").value;
  const deliveryMethod = document.getElementById("delivery-method").value;
  const totalCost = (coffeePrices[coffeeType] * quantity).toFixed(2);

  alert(`Order confirmed!\n
      Coffee Type: ${coffeeType}\n
      Quantity: ${quantity}\n
      Payment Method: ${paymentMethod}\n
      Delivery Address: ${address}\n
      Delivery Method: ${deliveryMethod}\n
      Total Cost: $${totalCost}`);
}

document.getElementById("quantity").addEventListener("input", updateTotalCost);
document
  .getElementById("coffee-type")
  .addEventListener("change", updateTotalCost);
