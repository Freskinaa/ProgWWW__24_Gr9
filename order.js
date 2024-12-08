document.addEventListener("DOMContentLoaded", () => {
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  if (!selectedProduct) {
    window.location.href = "/products.html";
  }

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const nameSection = document.getElementById("name-section");
  const nameInput = document.getElementById("name");

  if (loggedInUser) {
    nameSection.style.display = "block";
    nameSection.textContent = `Welcome, ${loggedInUser.name}!`;
    nameInput.style.display = "none";
  } else {
    nameSection.style.display = "block";
    nameSection.textContent = "Enter Your Name";
    nameInput.style.display = "block";
  }

  const coffeeTypeElement = document.getElementById("coffee-type");
  const quantityElement = document.getElementById("quantity");
  const totalCostElement = document.getElementById("total-cost");

  const productType = selectedProduct.name.toLowerCase();
  const optionExists = Array.from(coffeeTypeElement.options).some(
    (option) => option.value.toLowerCase() === productType
  );

  if (optionExists) {
    coffeeTypeElement.value = productType;
    coffeeTypeElement.disabled = true;
  } else {
    console.error(`Type '${selectedProduct.name}' not found in coffee options.`);
  }

  const price = parseFloat(selectedProduct.price.replace("$", ""));
  const updateTotalCost = () => {
    const quantity = parseInt(quantityElement.value, 10) || 1;
    const totalCost = (price * quantity).toFixed(2);
    totalCostElement.innerText = `$${totalCost}`;
  };

  quantityElement.value = 1;
  updateTotalCost();

  quantityElement.addEventListener("input", updateTotalCost);

  window.confirmOrder = function () {
    const coffeeType = coffeeTypeElement.value;
    const quantity = quantityElement.value;
    const paymentMethod = document.getElementById("payment-method").value;
    const address = document.getElementById("address").value;
    const deliveryMethod = document.getElementById("delivery-method").value;

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const name = loggedInUser
      ? loggedInUser.name
      : document.getElementById("name").value;

    if (!name) {
      alert("Please provide your name to confirm the order.");
      return;
    }
    if (!address) {
      alert("Please provide your delivery address.");
      return;
    }

    const totalCost = (price * quantity).toFixed(2);

    localStorage.removeItem("selectedProduct");

    alert(`Order confirmed!\n
        Name: ${name}\n
        Coffee Type: ${coffeeType}\n
        Quantity: ${quantity}\n
        Payment Method: ${paymentMethod}\n
        Delivery Address: ${address}\n
        Delivery Method: ${deliveryMethod}\n
        Total Cost: $${totalCost}`);
  };

  window.onbeforeunload = function () {
    localStorage.removeItem("selectedProduct");
  };
});
