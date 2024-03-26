import ProductsList from "../../ProductsList";

export default function HomePage() {
  return (
    <main className="mt-20 container mx-auto flex flex-col gap-y-10">
      {/* SearchBar component will be added here */}
      <h1 className="text-center">Products</h1>
      <ProductsList />
    </main>
  );
}
