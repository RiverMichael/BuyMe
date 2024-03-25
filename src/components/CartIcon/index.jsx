import { IoCartOutline } from "react-icons/io5";
import productStore from "../store/products";

export default function CartIcon() {
  const { getTotalNumberOfItemsInCart } = productStore();

  return (
    <button className="group btn btn-ghost p-0 hover:text-primary hover:scale-110 hover:-rotate-12 transition-all duration-300 ease-in-out">
      <div className="indicator">
        <IoCartOutline size={30} />
        {getTotalNumberOfItemsInCart() ? <span className="badge indicator-item bg-primary border-none group-hover:text-snow-mist">{getTotalNumberOfItemsInCart()}</span> : ""}
      </div>
    </button>
  );
}
