import useDocumentTitle from "../../Hooks/useDocumentTitle";
import ProductsList from "../../ProductsList";

export default function HomePage() {
  useDocumentTitle("Home");

  return (
    <main className="mt-10 mb-20 container mx-auto flex flex-col gap-y-10">
      <h1 className="text-center">Products</h1>
      <ProductsList />
    </main>
  );
}
