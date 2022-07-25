import { createStore } from "vuex";

export default createStore({
  state: {
    basketItems: [],
  },
  mutations: {
    addItemInBasket(state, itemBasket) {
      let x = state.basketItems.findIndex((el) => itemBasket.id === el.id);
      if (x === -1) {
        state.basketItems.push(itemBasket)
        itemBasket.active = true
      }
      localStorage.setItem("basketData", JSON.stringify(state.basketItems));
    },
    clearBasket(state) {
      state.basketItems.forEach((el) => {
        el.count = 1
        el.active = false
      });
      state.basketItems.splice(0)
      localStorage.setItem("basketData", JSON.stringify(state.basketItems));
    },
    removeItemBasket(state, index) {
      state.basketItems[index].count = 1
      state.basketItems[index].active = false
      state.basketItems.splice(index, 1)
      localStorage.setItem("basketData", JSON.stringify(state.basketItems))
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
      state.basketItems = JSON.parse(localStorage.getItem('basketData')) || []

    } 
  },
  getters: {
    basketItems(state) {
      return state.basketItems;
    },
  },
});
