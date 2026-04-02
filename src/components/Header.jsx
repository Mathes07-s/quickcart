// src/components/Header.jsx
import "../styles/Header.css";

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1>QuickCart</h1>
        <p>Shop the best deals on your favorite products</p>
        <button className="cart-icon-btn" onClick={onCartClick}>
          🛒
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;