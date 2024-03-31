import { Link } from "react-router-dom";
import DisplayPrice from "../DisplayPrice";
import productStore from "../store/products";
import { IoTrashOutline } from "react-icons/io5";

export default function ShoppingCart() {
  const { cart, increaseProductQuantity, decreaseProductQuantity, deleteProductFromCart, getCartTotal, getTotalDiscount, getTotalOriginalPrice, getTotalNumberOfItemsInCart } = productStore();

  function handleDeleteItem(item) {
    deleteProductFromCart(item);
    console.log("delete", item.title);
  }

  function handleIncreaseProductQuantity(item) {
    increaseProductQuantity(item);
  }

  function handleDecreaseProductQuantity(id) {
    decreaseProductQuantity(id);
  }

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-center">Checkout</h1>

      <div className="flex flex-wrap">
        <div className="grow overflow-x-auto">
          <h2 className="text-2xl">Shopping cart</h2>
          {cart.length ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <th>
                      <Link to={`/products/${item.id}`} className="hover:opacity-70">
                        <div className="flex items-center gap-2">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item.image.url} alt={item.image.alt} />
                            </div>
                          </div>
                          <h3 className="text-base">{item.title}</h3>
                        </div>
                      </Link>
                    </th>

                    <td>
                      <div className="flex items-center justify-between gap-3">
                        <button onClick={() => handleDecreaseProductQuantity(item)} className="btn btn-sm btn-outline rounded-box hover:bg-gunmetal-gray w-8 h-8">
                          -
                        </button>
                        {item.quantity}
                        <button onClick={() => handleIncreaseProductQuantity(item)} className="btn btn-sm btn-outline rounded-box  hover:bg-gunmetal-gray w-8 h-8">
                          +
                        </button>
                      </div>
                    </td>

                    <td>
                      <div className="flex flex-row-reverse gap-2 items-center justify-end">
                        <DisplayPrice price={item.price * item.quantity} discountedPrice={item.discountedPrice * item.quantity} />
                      </div>
                    </td>

                    <td>
                      <button onClick={() => handleDeleteItem(item)} className="btn btn-sm btn-outline border-none hover:bg-gunmetal-gray">
                        <IoTrashOutline />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>
              <p>No items in the shopping cart</p>
            </div>
          )}
        </div>
        <div className="flex-none flex flex-col gap-5 md:px-10 lg:px-20">
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
              <div className="flex flex-col gap 1">
                <p className="flex justify-between">
                  {getTotalNumberOfItemsInCart()} {cart.length > 1 ? "items" : "item"} <span>${getCartTotal().toFixed(2)}</span>
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

            <button className="btn btn-wide bg-gunmetal-gray text-ghost-white hover:text-gunmetal-gray" disabled={!cart.length}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
