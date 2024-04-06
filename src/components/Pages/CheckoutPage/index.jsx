import Checkout from "../../Checkout";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

export default function CheckoutSuccessPage() {
  useDocumentTitle("Checkout success");

  return (
    <main className="mt-10 mb-20 mx-auto px-5">
      <Checkout />
    </main>
  );
}
