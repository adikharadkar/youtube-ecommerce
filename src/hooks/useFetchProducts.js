import { useState, useEffect } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=500");
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const data = await response.json();
      console.log(data);

      setProducts(data.products);
    } catch (e) {
      setError(e);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { products, isLoading, error };
};
