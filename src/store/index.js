import {createStore} from "vuex"

export default createStore({
  state: {
    basketItems: [

    ] 
  },
  mutations: {
    addItemInBasket(state, itemBasket) {
      state.basketItems.push(itemBasket)
    },
    clearBasket(state) {
      state.basketItems.splice(0)
    }
  },
  getters: {
    basketItems(state) {
      return state.basketItems
    }
  }
})