import "./ProductCard.css";
import AddToCart from "../AddToCart";
function ProductCard({ product }) {
  return (
    <div className="product">
      <div>{product.title}</div>
      <div>{product.price.value}</div>
      <AddToCart />
    </div>
  );
}

export default ProductCard;

// use  {} when u want to write js inside jsx
