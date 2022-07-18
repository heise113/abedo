import {createStore} from "vuex"

export default createStore({
  state: {
    basketItems: [

    ] 
  },
  mutations: {
    addIteminBasket(state, itemBasket) {
      state.basketItems.push(itemBasket)
    }
  },
  getters: {
    basketItems(state) {
      return state.basketItems
    }
  }
})