import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setIsError(true);
        throw new Error("Unable to fetch data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [url]);

  return { data, isLoading, isError };
}
