import { Link } from "react-router-dom";
import DisplayPrice from "../DisplayPrice";
import productStore from "../store/products";
import { IoTrashOutline } from "react-icons/io5";
import DisplayDiscountPercent from "../DisplayDiscountPercent";

export default function ShoppingCart() {
  const { cart, increaseProductQuantity, decreaseProductQuantity, deleteProductFromCart, getCartTotal, getTotalDiscount, getTotalOriginalPrice, getTotalNumberOfItemsInCart, clearCart } =
    productStore();

  function handleDeleteItem(item) {
    deleteProductFromCart(item);
  }

  function handleIncreaseProductQuantity(item) {
    increaseProductQuantity(item);
  }

  function handleDecreaseProductQuantity(id) {
    decreaseProductQuantity(id);
  }

  function handleClearCart() {
    clearCart();
  }

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-center">Checkout</h1>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 justify-center">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-between">
            <h2 className="text-2xl">Shopping cart</h2>
            {cart.length ? (
              <div>
                <button onClick={() => handleClearCart()} className="btn btn-xs btn-outline rounded hover:bg-gunmetal-gray">
                  Clear cart
                </button>
              </div>
            ) : (
              ""
            )}
          </div>

          {cart.length ? (
            <ul className="flex flex-col gap-3">
              {cart.map((item) => (
                <li key={item.id} className="flex border-y py-1 gap-5 justify-between">
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center gap-3">
                      <div className="avatar w-24">
                        <div className="w-full rounded">
                          <img src={item.image.url} alt={item.image.alt} />
                        </div>
                      </div>

                      <div className="flex w-full justify-between items-center">
                        <button onClick={() => handleDecreaseProductQuantity(item)} className="btn btn-sm btn-outline rounded hover:bg-gunmetal-gray">
                          -
                        </button>
                        {item.quantity}
                        <button onClick={() => handleIncreaseProductQuantity(item)} className="btn btn-sm btn-outline rounded  hover:bg-gunmetal-gray">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base">{item.title}</h3>

                      <div className="flex flex-col">
                        <DisplayDiscountPercent price={item.price} discountedPrice={item.discountedPrice} />
                        <div className="flex flex-row-reverse gap-2 items-center justify-end">
                          <DisplayPrice price={item.price * item.quantity} discountedPrice={item.discountedPrice * item.quantity} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <button onClick={() => handleDeleteItem(item)} className="btn btn-sm btn-outline border-none hover:bg-gunmetal-gray">
                      <IoTrashOutline />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p>No items in the shopping cart</p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">Total</h2>

          <div className="flex flex-col gap-3">
            {getTotalDiscount() ? (
              <div className="flex flex-col gap 1">
                <p className="flex justify-between">
                  Price <span>${getTotalOriginalPrice().toFixed(2)}</span>
                </p>

                <p className="flex justify-between">
                  Discount <span className="text-accent">- ${getTotalDiscount().toFixed(2)}</span>
                </p>
              </div>
            ) : (
              ""
            )}

            {getTotalNumberOfItemsInCart() ? (
              <div className="flex flex-col">
                <p className="flex justify-between">
                  {getTotalNumberOfItemsInCart()} {getTotalNumberOfItemsInCart() > 1 ? "items" : "item"} <span>${getCartTotal().toFixed(2)}</span>
                </p>
                <p className="flex justify-between">
                  Delivery <span>Free</span>
                </p>
              </div>
            ) : (
              ""
            )}
            <hr />
            <h3 className="text-base flex justify-between">
              Total <span>${getCartTotal().toFixed(2)}</span>
            </h3>
          </div>
          <div className="flex justify-center">
            <Link to="/checkout" className="btn btn-wide bg-gunmetal-gray text-ghost-white hover:text-gunmetal-gray" disabled={!cart.length}>
              Checkout
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
