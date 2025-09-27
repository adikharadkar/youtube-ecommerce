import "../styles/ProductCard.css";

const ProductCard = ({ price, thumbnail, title, description }) => {
  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{description.slice(0, 100)}...</p>
      <h3>Price: ${price}</h3>
    </div>
  );
};

export default ProductCard;
