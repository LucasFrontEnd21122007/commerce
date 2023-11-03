import React from 'react';

function Product({ id, name, description, price, addToCart }) {
  return (
    <div className="product">
      <img src={`product${id}.jpg`} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="price">${price.toFixed(2)}</p>
      <button onClick={() => addToCart(id)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default Product;
