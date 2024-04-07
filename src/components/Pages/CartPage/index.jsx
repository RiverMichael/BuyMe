import useUpdateHead from "../../Hooks/useUpdateHead";
import ShoppingCart from "../../ShoppingCart";

export default function CartPage() {
  useUpdateHead("Shopping Cart", "Let`s checkout your new amazing products at BuyMe");

  return (
    <main className="mt-10 mb-20 mx-auto px-5 flex flex-col gap-12">
      <h1 className="text-center">Shopping cart</h1>
      <ShoppingCart />
    </main>
  );
}
