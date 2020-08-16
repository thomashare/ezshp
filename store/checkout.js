export const mutations = {
  addToCart(state, payload) {
    state.cart.push(payload);
  },
  updateProductQuantity(state, payload) {
    state.cart[payload.itemIndex].count = payload.count;
  },
  removeProduct(state, itemIndex) {
    state.cart.splice(itemIndex, 1);
  },
};

export const actions = {
  async addToCart({ commit }, payload) {
    // add the item to the cart
    await commit('addToCart', payload);
  },
  async updateProductQuantity({ commit }, payload) {
    await commit('updateProductQuantity', {
      itemIndex: payload.itemIndex,
      count: payload.count,
    });
  },
};

export const getters = {
  productCartCount: (state) => (uid) => state.cart.find((product) => product.uid === uid).count,
  cartCount(state) {
    // no items in cart, show 0
    if (state.cart.length === 0) return 0;

    // items in cart, figure out the total amount of items in the cart
    return state.cart.reduce((acc, arr) => acc + arr.count).count;
  },
  itemInCart: (state) => (uid) => {
    const foundProduct = state.cart.find((product) => product.uid === uid);
    if (foundProduct === undefined) return false;
    return true;
  },
  itemIndexByUid: (state) => (uid) => state.cart.findIndex((product) => product.uid === uid),
};

export const state = () => ({
  cart: [],
});
