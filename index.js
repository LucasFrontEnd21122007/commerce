// Inicializar o carrinho vazio
let cart = [];

// Adicionar um item ao carrinho
function addToCart(productId) {
    const product = {
        id: productId,
        name: `Produto ${productId}`,
        price: productId === 1 ? 19.99 : 29.99,
    };
    cart.push(product);
    updateCart();
}

// Atualizar o carrinho na página
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    cartItems.innerHTML = '';

    cart.forEach((product) => {
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `<span>${product.name}</span><span>$${product.price.toFixed(2)}</span>`;
        cartItems.appendChild(cartItem);
        total += product.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}
