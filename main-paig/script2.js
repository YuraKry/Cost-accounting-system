const addBtn = document.querySelector('.btn');
const container = document.querySelector('.container');
const totalDisplay = document.querySelector('.total'); 

function updateTotal() {
    const prices = document.querySelectorAll('.card.item .price');
    let total = 0;

    prices.forEach(priceElement => {
      
        const priceValue = parseInt(priceElement.textContent.replace(/\s/g, '').replace('₴', '')) || 0;
        total += priceValue;
    });

    totalDisplay.textContent = `Загальна сума: ₴${total.toLocaleString()}`;
}

addBtn.addEventListener('click', function() {
    const nameInput = document.querySelector('input[type="text"]');
    const amountInput = document.querySelector('input[type="number"]');
    const categoryInput = document.querySelector('select');

    if (nameInput.value.trim() === "" || amountInput.value === "") {
        alert("Будь ласка, введіть назву та суму витрат!");
        return;
    }

    const newCard = document.createElement('div');
    newCard.className = 'card item';

    newCard.innerHTML = `
        <span>${nameInput.value}</span>
        <span class="badge green">${categoryInput.value}</span>
        <span class="price">${Number(amountInput.value).toLocaleString()} ₴</span>
        <button class="delete-btn" style="margin-left: auto; background: none; border: none; color: #ff4d4d; cursor: pointer; font-size: 20px; font-weight: bold;">×</button>
    `;

    const deleteBtn = newCard.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        newCard.remove();
        updateTotal();
    });

    container.appendChild(newCard);
    updateTotal();

    nameInput.value = "";
    amountInput.value = "";
});

updateTotal();