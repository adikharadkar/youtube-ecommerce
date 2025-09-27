import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

const Home = () => {
  const { products, isLoading, error } = useFetchProducts();

  if (isLoading) return <span>Loading...</span>;
  if (error.length > 0) return <span>{error}</span>;
  return (
    <>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
