// src/components/CartSidebar.jsx
import "../styles/CartSidebar.css";

function CartSidebar({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeFromCart,
  totalPrice,
}) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}

      {/* Sidebar */}
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
              <button className="continue-shopping" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="total">
              <strong>Total:</strong> ${totalPrice.toFixed(2)}
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSidebar;