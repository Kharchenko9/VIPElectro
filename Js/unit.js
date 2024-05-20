
document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const cartIcon = document.getElementById('cart-icon');
    const cartContainer = document.getElementById('cart-container');
    const cartItems = document.getElementById('cart-items');
    const closeCartBtn = document.getElementById('close-cart');
    const buyButton = document.getElementById('buy-button'); // Добавляем нахождение кнопки "Купить"

    cartIcon.addEventListener('click', () => {
        cartContainer.style.display = 'block';
        renderCart();
    });

    closeCartBtn.addEventListener('click', () => {
        cartContainer.style.display = 'none';
    });

    // Добавляем обработчик события для кнопки "Купить"
    buyButton.addEventListener('click', function() {
        // Здесь можно написать код для оформления покупки или перехода на страницу оформления заказа
        alert('Вы нажали на кнопку "Купить"!');
    });

    document.querySelectorAll('.card__add').forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const title = card.querySelector('.card__title').innerText;
            const price = card.querySelector('.card__price--common').innerText;
            const image = card.querySelector('.card__image img').src;

            const item = {
                title,
                price,
                image,
            };

            cart.push(item);
            renderCart();
        });
    });

    function renderCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('cart-item');

            div.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="item-info">
                    <p class="item-title">${item.title}</p>
                    <p class="item-price">${item.price}</p>
                    <!-- Кнопка удаления -->
                    <button class="remove-item">Удалить</button>
                </div>
            `;

            cartItems.appendChild(div);
        });

        // Добавляем обработчик события для кнопки "Удалить" в каждой карточке товара в корзине
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                // Находим родительский элемент (div.cart-item), который нужно удалить
                const item = button.closest('.cart-item');
                // Находим индекс этого элемента в массиве корзины
                const index = Array.from(item.parentNode.children).indexOf(item);
                // Удаляем товар из массива корзины по индексу
                cart.splice(index, 1);
                // Удаляем элемент из DOM
                item.remove();
            });
        });
    }
});








