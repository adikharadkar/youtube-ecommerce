import { useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";
import Pagination from "../components/Pagination";

const PRODUCTS_PER_PAGE = 20;

const Home = () => {
  const { products, isLoading, error } = useFetchProducts();
  const [currentPage, setCurrentPage] = useState(0);

  const numOfPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const start = currentPage * PRODUCTS_PER_PAGE; // 1 * 20 = 20
  const end = start + PRODUCTS_PER_PAGE; // 20 + 20 = 40

  if (isLoading) return <span>Loading...</span>;
  if (error.length > 0) return <span>{error}</span>;
  return (
    <>
      <Pagination
        numOfPages={numOfPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <div className="products">
        {products.slice(start, end).map((product) => (
          <ProductCard
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
            description={product.description}
            key={product.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
