import { API_BASE_URL } from "../../shared/api";
import ProductCard from "../ProductCard";
import useFetch from "../Hooks/useFetch";
import ErrorMessage from "../ui/ErrorMessage";
import LoadingIndicator from "../ui/LoadingIndicator";

export default function ProductsList() {
  const { data, isLoading, isError } = useFetch(API_BASE_URL);
  const products = data.data;

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (products) {
    return (
      <div className="flex flex-col gap-y-10">
        <h1 className="text-center">Products</h1>
        <div className="flex flex-wrap gap-y-10 gap-x-5 justify-evenly">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}
