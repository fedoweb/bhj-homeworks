document.addEventListener('click', function(event) {
    
    if (event.target.matches('.product__quantity-control')) {
        handleQuantityChange(event);
    }

    if (event.target.matches('.product__add')) {
        handleAddToCart(event);
    }

    if (event.target.matches('.cart__remove-product')) {
        handleRemoveFromCart(event);
    }
});

// изменение количества товара
function handleQuantityChange(event) {
    const parent = event.target.closest('.product__quantity-controls');
    const valueElement = parent.querySelector('.product__quantity-value');
    let value = parseInt(valueElement.textContent);

    if (event.target.matches('.product__quantity-control_dec')) {
        value = Math.max(1, value - 1);
    } else if (event.target.matches('.product__quantity-control_inc')) {
        value++;
    }

    valueElement.textContent = value;
}

// добавление товара в корзину
function handleAddToCart(event) {
    const product = event.target.closest('.product');
    const dataId = product.getAttribute('data-id');
    const imageSrc = product.querySelector('img').src;
    const countValue = product.querySelector('.product__quantity-value').textContent;

    const cartItem = findCartItemByDataId(dataId);

    if (cartItem) {
        updateCartItemCount(cartItem, countValue);
    } else {
        createCartElement(dataId, imageSrc, countValue);
    }

    showCartIfNotEmpty();
}


function handleRemoveFromCart(event) {
    const cartItem = event.target.closest('.cart__product');
    //const dataId = cartItem.getAttribute('data-id');

    cartItem.remove();

    hideCartIfEmpty();
}

// поиск по data-id
function findCartItemByDataId(dataId) {
    return document.querySelector(`.cart__product[data-id="${dataId}"]`);
}

// обновление количества товара в корзине
function updateCartItemCount(cartItem, countValue) {
    const currentCount = parseInt(cartItem.querySelector('.cart__product-count').textContent);
    cartItem.querySelector('.cart__product-count').textContent = currentCount + parseInt(countValue);
}

// создание нового элемента
function createCartElement(dataId, imageSrc, countValue) {
    const cartProducts = document.querySelector('.cart__products');
    const html = `
        <div class="cart__product" data-id="${dataId}">
            <img src="${imageSrc}" alt="" class="cart__product-image">
            <div class="cart__product-info">
                <div class="cart__product-count">${countValue}</div>
                <button class="cart__remove-product">Удалить</button>
            </div>
        </div>
    `;

    cartProducts.insertAdjacentHTML('beforeend', html);
}

// отображение корзины
function showCartIfNotEmpty() {
    const cart = document.querySelectorAll('.cart__product');
    const cartTitle = document.querySelector('.cart__title');

    if (cart.length >= 1) {
        cartTitle.classList.remove('cart__hidden');
    }
    
}

// скрытие козины
function hideCartIfEmpty() {
    const cart = document.querySelectorAll('.cart__product');
    const cartTitle = document.querySelector('.cart__title');

    if (cart.length < 1) {
        cartTitle.classList.add('cart__hidden');
    }
}

