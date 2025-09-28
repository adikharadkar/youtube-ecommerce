import { useState, useEffect } from "react";

export const useFetchProducts = (id) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  let url = "https://dummyjson.com/products";
  if (id) {
    url = `${url}/${id}`;
  } else {
    url = `${url}?limit=500`;
  }

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const data = await response.json();

      if (id) {
        setProducts(data);
      } else {
        setProducts(data.products);
      }
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
