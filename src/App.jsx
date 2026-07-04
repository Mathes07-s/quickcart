// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";
import products from "./data/products";
import "./styles/App.css";

function App() {
  // Cart state: array of { id, name, price, imageUrl, quantity, ... }
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Helper: find if product already in cart
  const findCartItem = (productId) => cart.find((item) => item.id === productId);

  // Add to cart (increment quantity if exists)
  const addToCart = (productId) => {
    const existingItem = findCartItem(productId);
    if (existingItem) {
      // Increase quantity
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item with quantity 1
      const product = products.find((p) => p.id === productId);
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update quantity (if new quantity <= 0, remove item)
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item completely
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Calculate total number of items (sum of quantities)
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Toggle cart sidebar
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="app">
      <Header
        cartItemCount={getTotalItems()}
        onCartClick={toggleCart}
      />
      <main className="main-content">
        <ProductList products={products} onAddToCart={addToCart} />
      </main>
      <CartSidebar
        isOpen={isCartOpen}
        onClose={toggleCart}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}

export default App;