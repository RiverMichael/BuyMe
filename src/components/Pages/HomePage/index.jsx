import ProductsList from "../../ProductsList";

export default function HomePage() {
  return (
    <main className="mt-5 flex flex-col gap-y-10">
      {/* SearchBar component will be added here */}
      <div className="container mx-auto "></div>
      <h1 className="text-center">Products</h1>
      <ProductsList />
    </main>
  );
}
