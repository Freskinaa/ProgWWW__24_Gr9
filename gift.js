document.addEventListener('DOMContentLoaded', () => {
    const denominations = document.querySelectorAll('.denomination');
    const priceElement = document.querySelector('.price');
    const quantityInput = document.querySelector('.quantity input');
    const increaseBtn = document.querySelector('.quantity-btn:nth-child(3)');
    const decreaseBtn = document.querySelector('.quantity-btn:nth-child(1)');
    const addToCartBtn = document.querySelector('.add-to-cart');
    const modal = document.getElementById('purchase-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const confirmPurchaseBtn = document.getElementById('confirm-purchase');
    let currentQuantity = 1;
    let currentPrice = 25;

    function updateTotalPrice() {
        const total = currentPrice * currentQuantity;
        priceElement.innerText = `$${total.toFixed(2)}`;
    }

    denominations.forEach(denomination => {
        denomination.addEventListener('click', () => {
            denominations.forEach(btn => btn.classList.remove('active'));
            denomination.classList.add('active');
            currentPrice = parseFloat(denomination.textContent.replace('$', ''));
            updateTotalPrice();
        });
    });

    increaseBtn.addEventListener('click', () => {
        currentQuantity++;
        quantityInput.value = currentQuantity;
        updateTotalPrice();
    });

    decreaseBtn.addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityInput.value = currentQuantity;
            updateTotalPrice();
        }
    });

    addToCartBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    confirmPurchaseBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const paymentMethod = document.getElementById('payment-method').value;
        const totalAmount = currentPrice * currentQuantity;

        if (name.trim() === '' || email.trim() === '') {
            alert("Please enter your name and email.");
            return;
        }

        alert(`Thank you, ${name}! Your purchase of $${totalAmount.toFixed(2)} with ${paymentMethod} has been confirmed.`);
        modal.style.display = 'none';
    });

    updateTotalPrice();
});