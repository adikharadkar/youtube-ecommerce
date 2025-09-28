import { useParams } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, error, isLoading } = useFetchProducts(id);

  if (isLoading) return <span>Loading...</span>;
  if (error.length > 0) return <span>{error}</span>;
  return (
    <>
      <img src={products.thumbnail} alt={products.title} />
      <h2>{products.title}</h2>
      <p>{products.description}</p>
      <h3>Price: ${products.price}</h3>
    </>
  );
};

export default ProductDetails;
