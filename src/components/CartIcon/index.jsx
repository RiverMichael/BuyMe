import { IoCartOutline } from "react-icons/io5";
import cartStore from "../store/cart";

export default function CartIcon() {
  const { getTotalNumberOfItemsInCart } = cartStore();

  return (
    <button className="group btn btn-ghost p-0">
      <div className="indicator">
        <IoCartOutline size={30} />
        {getTotalNumberOfItemsInCart() ? <span className="badge indicator-item bg-primary border-none group-hover:text-snow-mist">{getTotalNumberOfItemsInCart()}</span> : ""}
      </div>
    </button>
  );
}
