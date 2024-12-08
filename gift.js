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
  const giftCardModal = document.getElementById("giftCardModal");
  const openGiftCardModalBtn = document.getElementById("openModalBtn");
  const closeGiftCardModalBtn = document.querySelector(".close");
  const giftCardForm = document.getElementById("gift-card-form");
  let currentQuantity = 1;
  let currentPrice = 25;

  function updateTotalPrice() {
    const total = currentPrice * currentQuantity;
    priceElement.innerText = `$${total.toFixed(2)}`;
  }

  function populateUserDetails(modalType) {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      const nameField = modalType.querySelector("#name");
      const emailField = modalType.querySelector("#email");
      const recipientNameField = modalType.querySelector("#recipient-name");
  
      if (nameField) {
        nameField.value = loggedInUser.name;
        nameField.disabled = true;
      }
      if (emailField) {
        emailField.value = loggedInUser.email;
        emailField.disabled = true;
      }
      if (recipientNameField) recipientNameField.value = loggedInUser.name;
    } else {
      const nameField = modalType.querySelector("#name");
      const emailField = modalType.querySelector("#email");
      if (nameField) nameField.disabled = false;
      if (emailField) emailField.disabled = false;
    }
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
    populateUserDetails(purchaseModal);
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

  openGiftCardModalBtn.addEventListener("click", () => {
    populateUserDetails(giftCardModal);
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

  giftCardForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const cardType = document.getElementById("gift-card-type").value;
    const amount = document.getElementById("amount").value;
    const recipientName = document.getElementById("recipient-name").value;
    const giftMessage = document.getElementById("gift-message").value;

    if (recipientName.trim() === "") {
      alert("Please enter the recipient's name.");
      return;
    }

    alert(
      `Your order for a ${cardType} gift card of $${amount} to ${recipientName} is confirmed!`
    );
    giftCardModal.style.display = "none";
  });

  updateTotalPrice();
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const recipientNameField = document.getElementById("recipient-name");
  const amountField = document.getElementById("amount");
  const giftCardTypeField = document.getElementById("gift-card-type");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    try {
      if (!nameField.value.trim()) {
        throw new Error("Name field cannot be empty.");
      }

      if (!emailField.value.trim()) {
        throw new Error("Email field cannot be empty.");
      }

      if (!recipientNameField.value.trim()) {
        throw new Error("Recipient name field cannot be empty.");
      }

      if (isNaN(amountField.value) || parseFloat(amountField.value) <= 0) {
        throw new Error("Amount must be a positive number.");
      }

      if (!giftCardTypeField.value) {
        throw new Error("Please select a gift card type.");
      }

      alert("Form submitted successfully!");
      form.submit();
    } catch (error) {
      console.error("Validation error:", error.message);
      alert(`Validation Error: ${error.message}`);
    }
  });
});
