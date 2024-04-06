import Checkout from "../../Checkout";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

export default function CheckoutSuccessPage() {
  useDocumentTitle("Checkout Success");

  return (
    <main className="mt-10 mb-20 mx-auto px-5">
      <Checkout />
    </main>
  );
}
