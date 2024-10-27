const coffeePrices = {
  espresso: 2.00,
  latte: 3.00,
  cappuccino: 2.50
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
  const totalCost = (coffeePrices[coffeeType] * quantity).toFixed(2);
  const totalCostElement = document.getElementById("total-cost");

  animateTotalCost(totalCostElement, parseFloat(totalCostElement.innerText.slice(1)) || 0, parseFloat(totalCost), 400);
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
document.getElementById("coffee-type").addEventListener("change", updateTotalCost);
