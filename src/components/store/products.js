import { create } from "zustand";
// import { API_BASE_URL } from "../../shared/api";

const findProductInCartIndex = (state, productId) => {
  return state.cart.findIndex((product) => productId === product.id);
};

const productStore = create((set, get) => ({
  products: [],
  cart: [],

  // fetchProducts: async () => {
  //   try {
  //     const response = await fetch(API_BASE_URL);
  //     const json = await response.json();
  //     // set((state) => ({ ...state, products: json.data }));
  //     set({ products: json.data });
  //   } catch (error) {
  //     console.error("Failed to fetch products:", error);
  //   }
  // },

  addToCart: (product) => {
    set((state) => {
      // const product = state.products.find((product) => id === product.id);

      // const productInCartIndex = state.cart.findIndex((product) => id === product.id);
      const productInCartIndex = findProductInCartIndex(state, product.id);

      if (productInCartIndex === -1) {
        const newProduct = { ...product, quantity: 1 };
        return { ...state, cart: [...state.cart, newProduct] };
      }
      state.cart[productInCartIndex].quantity++;
      return { ...state };
    });
  },

  // clearCart: () => set(() => ({ cart: [] })),
  clearCart: () => set({ cart: [] }),

  increaseProductQuantity: (item) =>
    set((state) => {
      // const productInCartIndex = state.cart.findIndex((product) => id === product.id);
      const productInCartIndex = findProductInCartIndex(state, item.id);
      state.cart[productInCartIndex].quantity++;
      return { ...state };
    }),

  decreaseProductQuantity: (item) =>
    set((state) => {
      // const product = state.products.find((product) => id === product.id);
      // const productInCartIndex = state.cart.findIndex((product) => id === product.id);
      const productInCartIndex = findProductInCartIndex(state, item.id);
      if (item.quantity === 1) {
        // const updatedCart = state.cart.filter((product) => {
        //   if (product.id === id) {
        //     return false;
        //   }
        //   return true;
        // });
        const updatedCart = state.cart.filter((product) => product.id !== item.id);

        return { ...state, cart: updatedCart };
      }
      state.cart[productInCartIndex].quantity--;
      return { ...state };
    }),

  deleteProductFromCart: (item) =>
    set((state) => {
      // const updatedCart = state.cart.filter((product) => {
      //   if (product.id === id) {
      //     return false;
      //   }
      //   return true;
      // });
      const updatedCart = state.cart.filter((product) => product.id !== item.id);

      return { ...state, cart: updatedCart };
    }),

  // getCartTotal: () =>
  //   get().cart.reduce((total, product) => {
  //     if (product.discountedPrice) {
  //       const currentPrice = product.discountedPrice * product.quantity;
  //       total += currentPrice;
  //       return total;
  //     } else {
  //       const currentPrice = product.price * product.quantity;
  //       total += currentPrice;
  //       return total;
  //     }
  //   }, 0),

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

export default productStore;
