import { API_BASE_URL } from "../../shared/api";
import ProductCard from "../ProductCard";
import useFetch from "../Hooks/useFetch";

export default function ProductsList() {
  const { data, isLoading, isError } = useFetch(API_BASE_URL);
  const products = data.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Oops! Something went wrong, please try again</div>;
  }

  if (products) {
    return (
      <div className="flex flex-wrap gap-y-10 gap-x-5 justify-evenly">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
