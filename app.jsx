import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (productId) => {
    // Implemente a lógica para adicionar ao carrinho aqui, semelhante ao exemplo anterior
  };

  return (
    <div className="App">
      <header>
        <h1>Minha Loja Online</h1>
      </header>
      <section className="products">
        <Product id={1} name="Produto 1" description="Descrição do Produto 1." price={19.99} addToCart={addToCart} />
        <Product id={2} name="Produto 2" description="Descrição do Produto 2." price={29.99} addToCart={addToCart} />
      </section>
      <Cart items={cart} cartTotal={cartTotal} />
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
export default Product;