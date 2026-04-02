// src/components/ProductCard.jsx
import "../styles/ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  const { name, description, price, category, imageUrl } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <div className="price-category">
          <span className="price">${price.toFixed(2)}</span>
          <span className="category">{category}</span>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;