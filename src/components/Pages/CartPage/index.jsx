import useDocumentTitle from "../../Hooks/useDocumentTitle";
import ShoppingCart from "../../ShoppingCart";

export default function CartPage() {
  useDocumentTitle("Checkout");

  return (
    <main className="mt-10 mb-20 mx-auto px-5">
      <ShoppingCart />
    </main>
  );
}
