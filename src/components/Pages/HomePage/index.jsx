import useUpdateHead from "../../Hooks/useUpdateHead";
import ProductsList from "../../ProductsList";

export default function HomePage() {
  useUpdateHead("Home", "Explore this amazing products that you have been looking for at BuyMe");

  return (
    <main className="mt-10 mb-20 container mx-auto flex flex-col gap-y-10">
      <h1 className="text-center">Products</h1>
      <ProductsList />
    </main>
  );
}
