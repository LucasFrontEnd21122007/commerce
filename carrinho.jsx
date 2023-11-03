import React from 'react';

function Cart({ items, cartTotal }) {
  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p className="total">Total: <span>${cartTotal.toFixed(2)}</span></p>
    </div>
  );
}
import React from 'react';

function Product({ id, name, description, price, addToCart, removeFromCart }) {
  return (
    <div className="product">
      <img src={`product${id}.jpg`} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="price">${price.toFixed(2)}</p>
      <button onClick={() => addToCart(id)}>Adicionar ao Carrinho</button>
      <button onClick={() => removeFromCart(id)}>Remover do Carrinho</button>
    </div>
  );
}
export default Cart;