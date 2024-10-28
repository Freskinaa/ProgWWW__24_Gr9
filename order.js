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
];

function populateCoffeeTypes() {
  const coffeeSelect = document.getElementById("coffee-type");

  productNames.forEach((coffee) => {
    const option = document.createElement("option");
    option.value = coffee.toLowerCase().replace(" ", "-");
    option.textContent = coffee;
    coffeeSelect.appendChild(option);
  });
}

window.onload = populateCoffeeTypes;

function confirmOrder() {
  const coffeeType = document.getElementById("coffee-type").value;
  const quantity = document.getElementById("quantity").value;
  const paymentMethod = document.getElementById("payment-method").value;
  const address = document.getElementById("address").value;
  const deliveryMethod = document.getElementById("delivery-method").value;

  if (!quantity || !paymentMethod || !address) {
    alert("Please fill in all required fields.");
    return;
  }

  const orderDetails = `
        Order Details:
        - Product: ${coffeeType}
        - Quantity: ${quantity}
        - Payment Method: ${paymentMethod}
        - Address: ${address}
        - Delivery Method: ${deliveryMethod}
    `;

  alert(`Order confirmed!\n\n${orderDetails}`);
  window.location.href = "index.html";
}
