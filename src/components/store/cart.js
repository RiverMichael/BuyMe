import { create } from "zustand";

const findProductInCartIndex = (state, productId) => {
  return state.cart.findIndex((product) => productId === product.id);
};

const cartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    set((state) => {
      const productInCartIndex = findProductInCartIndex(state, product.id);

      if (productInCartIndex === -1) {
        const newProduct = { ...product, quantity: 1 };
        return { ...state, cart: [...state.cart, newProduct] };
      }
      state.cart[productInCartIndex].quantity++;
      return { ...state };
    });
  },

  clearCart: () => set({ cart: [] }),

  increaseProductQuantity: (item) =>
    set((state) => {
      const productInCartIndex = findProductInCartIndex(state, item.id);
      state.cart[productInCartIndex].quantity++;
      return { ...state };
    }),

  decreaseProductQuantity: (item) =>
    set((state) => {
      const productInCartIndex = findProductInCartIndex(state, item.id);

      if (item.quantity === 1) {
        const updatedCart = state.cart.filter((product) => product.id !== item.id);
        return { ...state, cart: updatedCart };
      }
      state.cart[productInCartIndex].quantity--;
      return { ...state };
    }),

  deleteProductFromCart: (item) =>
    set((state) => {
      const updatedCart = state.cart.filter((product) => product.id !== item.id);
      return { ...state, cart: updatedCart };
    }),

  getCartTotal: () =>
    get().cart.reduce((total, { quantity, discountedPrice, price }) => {
      const currentPrice = discountedPrice ?? price;
      return total + currentPrice * quantity;
    }, 0),

  getTotalOriginalPrice: () =>
    get().cart.reduce((totalOriginalPrice, { quantity, price }) => {
      return totalOriginalPrice + price * quantity;
    }, 0),

  getTotalDiscount: () =>
    get().cart.reduce((totalDiscount, { quantity, discountedPrice, price }) => {
      const discountPerItem = discountedPrice ? price - discountedPrice : 0;
      return totalDiscount + discountPerItem * quantity;
    }, 0),

  getTotalNumberOfItemsInCart: () =>
    get.call().cart.reduce((total, product) => {
      total += product.quantity;
      return total;
    }, 0),
}));

export default cartStore;
