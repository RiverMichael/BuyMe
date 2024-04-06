import { useEffect, useState } from "react";
import cartStore from "../store/cart";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart, getCartTotal } = cartStore();
  const [orderNumber, setOrderNumber] = useState("");
  const [orderedItems, setOrderedItems] = useState([]);
  const [orderedAmount, setOrderedAmount] = useState("");

  const totalAmount = getCartTotal().toFixed(2);

  useEffect(() => {
    function handleCheckout() {
      setOrderedItems(cart);
      setOrderedAmount(totalAmount);
      clearCart();

      const generateOrderNumber = () => {
        return Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
      };
      setOrderNumber(generateOrderNumber());
    }
    handleCheckout();
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl">Congratulations</h1>
      <div className="flex flex-col gap-12">
        <p>
          Your order <span className="font-bold">#{orderNumber}</span> is on the way, a confirmation is sent to your e-mail.
        </p>

        <section className="flex flex-col gap-2">
          <h2 className="text-base">Order #{orderNumber}</h2>
          <ul className="">
            {orderedItems.map((item) => (
              <li key={item.id} className="flex border-y py-1 gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <div className="avatar w-10">
                    <div className="w-full rounded">
                      <img src={item.image.url} alt={item.image.alt} />
                    </div>
                  </div>
                  <p>{item.quantity}x</p>
                </div>
                <div className="flex justify-between gap-2 w-full ">
                  <p>{item.title}</p>
                  <p>${(item.quantity * item.discountedPrice).toFixed(2)}</p>
                </div>
              </li>
            ))}
            <li className="font-bold text-right">Total: ${orderedAmount}</li>
          </ul>
        </section>
      </div>

      <Link to="/" className="btn btn-wide bg-gunmetal-gray text-ghost-white hover:text-gunmetal-gray">
        Continue shopping
      </Link>
    </div>
  );
}
