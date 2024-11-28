document.addEventListener("DOMContentLoaded", () => {
  const denominations = document.querySelectorAll(".denomination");
  const priceElement = document.querySelector(".price");
  const quantityInput = document.querySelector(".quantity input");
  const increaseBtn = document.querySelector(".quantity-btn:nth-child(3)");
  const decreaseBtn = document.querySelector(".quantity-btn:nth-child(1)");
  const addToCartBtn = document.getElementById("add-to-cart");
  const purchaseModal = document.getElementById("purchase-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const confirmPurchaseBtn = document.getElementById("confirm-purchase");
  let currentQuantity = 1;
  let currentPrice = 25;

  function updateTotalPrice() {
    const total = currentPrice * currentQuantity;
    priceElement.innerText = `$${total.toFixed(2)}`;
  }

  denominations.forEach((denomination) => {
    denomination.addEventListener("click", () => {
      denominations.forEach((btn) => btn.classList.remove("active"));
      denomination.classList.add("active");
      currentPrice = parseFloat(denomination.textContent.replace("$", ""));
      updateTotalPrice();
    });
  });

  increaseBtn.addEventListener("click", () => {
    currentQuantity++;
    quantityInput.value = currentQuantity;
    updateTotalPrice();
  });

  decreaseBtn.addEventListener("click", () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      quantityInput.value = currentQuantity;
      updateTotalPrice();
    }
  });

  addToCartBtn.addEventListener("click", () => {
    purchaseModal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", () => {
    purchaseModal.style.display = "none";
  });

  confirmPurchaseBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const paymentMethod = document.getElementById("payment-method").value;
    const totalAmount = currentPrice * currentQuantity;

    if (name.trim() === "" || email.trim() === "") {
      alert("Please enter your name and email.");
      return;
    }

    alert(
      `Thank you, ${name}! Your purchase of $${totalAmount.toFixed(
        2
      )} with ${paymentMethod} has been confirmed.`
    );
    purchaseModal.style.display = "none";
  });

  const openGiftCardModalBtn = document.getElementById("openModalBtn");
  const giftCardModal = document.getElementById("giftCardModal");
  const closeGiftCardModalBtn = document.querySelector(".close");

  openGiftCardModalBtn.addEventListener("click", () => {
    giftCardModal.style.display = "block";
    purchaseModal.style.display = "none";
  });

  closeGiftCardModalBtn.addEventListener("click", () => {
    giftCardModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === giftCardModal) {
      giftCardModal.style.display = "none";
    }
  });

  const giftCardForm = document.getElementById("gift-card-form");
  giftCardForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const cardType = document.getElementById("gift-card-type").value;
    const amount = document.getElementById("amount").value;
    const recipientName = document.getElementById("recipient-name").value;
    const giftMessage = document.getElementById("gift-message").value;

    alert(
      `Your order for a ${cardType} gift card of $${amount} to ${recipientName} is confirmed!`
    );
    giftCardModal.style.display = "none";
  });

  updateTotalPrice();
});
document.querySelector('.gift-bow img').addEventListener('click', function(e) {
  for (let i = 0; i < 10; i++) { 
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    const rect = e.target.getBoundingClientRect();

    const randomX = Math.random() * rect.width;
    const randomY = Math.random() * rect.height;
    sparkle.style.left = `${randomX - 7}px`;
    sparkle.style.top = `${randomY - 7}px`;

    e.target.parentElement.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 500); 
  }
});
