import { createStore } from "vuex";

export default createStore({
  state: {
    basketItems: [],
  },
  mutations: {
    addItemInBasket(state, itemBasket) {
      let x = state.basketItems.findIndex((el) => itemBasket.id === el.id);
      if (x === -1) {
        state.basketItems.push(itemBasket);
      }
      localStorage.setItem("basketData", JSON.stringify(state.basketItems));
    },
    clearBasket(state) {
      state.basketItems.forEach((el) => {
        el.count = 1;
      });
      state.basketItems.splice(0);
      localStorage.setItem("basketData", JSON.stringify(state.basketItems));
    },
    removeItemBasket(state, index) {
      state.basketItems[index].count = 1;
      state.basketItems.splice(index, 1);
      localStorage.setItem("basketData", JSON.stringify(state.basketItems));
    },
    counterPlus(state, index) {
      state.basketItems[index].count++;
      state.basketItems[index].newPrice =
        state.basketItems[index].price * state.basketItems[index].count;
      localStorage.setItem("basketData", JSON.stringify(state.basketItems));
    },
    counterMinus(state, index) {
      if (state.basketItems[index].count > 1) {
        state.basketItems[index].count--;
        state.basketItems[index].newPrice =
          state.basketItems[index].price * state.basketItems[index].count;
        localStorage.setItem("basketData", JSON.stringify(state.basketItems));
      }
    },
    setLocalStorage(state) {
      localStorage.setItem("basketData", JSON.stringify(state.basketItems));
    },
    getLocalStorage(state) {
      // state.basketItems = localStorage.getItem('basketData') === null ? [] : JSON.parse(localStorage.getItem('basketData'))
      state.basketItems = JSON.parse(localStorage.getItem('basketData')) || []
    } 
  },
  getters: {
    basketItems(state) {
      return state.basketItems;
    },
  },
});
