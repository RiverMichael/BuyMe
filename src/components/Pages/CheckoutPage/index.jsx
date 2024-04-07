import Checkout from "../../Checkout";
import useUpdateHead from "../../Hooks/useUpdateHead";

export default function CheckoutSuccessPage() {
  useUpdateHead("Checkout Success", "Congratulations! You have just purchased some new cool products from BuyMe");

  return (
    <main className="mt-10 mb-20 mx-auto px-5">
      <Checkout />
    </main>
  );
}
