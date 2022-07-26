import { createStore } from "vuex";

export default createStore({
  state: {
    basketItems: [],
    foodList: [
      {
        id: 1,
        description: "Сырное ассорasdasd asd asd ное ассор asdasd asd asd Сырное ассорasdasd asd asd ",
        image: "food-image-desktop.png",
        oldPrice: "450",
        weight: "/ 150 г",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 2,
        description: "Сырное ассорasdasd asd asd ное",
        image: "food-image-desktop.png",
        oldPrice: "",
        weight: "",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 3,
        description: "Сырное ассорasdasd asd asd ное ассор asdasd asd asd Сырное ассорasdasd asd asd",
        image: "food-image-desktop.png",
        oldPrice: "450",
        weight: "/ 150 г",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 4,
        description: "Сырное ассорasdasd asd asd ное",
        image: "food-image-desktop.png",
        oldPrice: "",
        weight: "",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 5,
        description: "Сырное ассорasdasd asd asd ное ассор asdasd asd asd Сырное ассорasdasd asd asd",
        image: "food-image-desktop.png",
        oldPrice: "450",
        weight: "/ 150 г",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 6,
        description: "Сырное ассорasdasd asd asd ное",
        image: "food-image-desktop.png",
        oldPrice: "",
        weight: "",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 7,
        description: "Сырное ассорasdasd asd asd ное ассор asdasd asd asd Сырное ассорasdasd asd asd",
        image: "food-image-desktop.png",
        oldPrice: "450",
        weight: "/ 150 г",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 8,
        description: "Сырное ассорasdasd asd asd ное ассор asdasd asd asd Сырное ассорasdasd asd asd",
        image: "",
        oldPrice: "450",
        weight: "/ 150 г",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 9,
        description: "Сырное ассорasdasd asd asd ное ассор asdasd asd asd Сырное ассорasdasd asd asd",
        image: "food-image-desktop.png",
        oldPrice: "450",
        weight: "/ 150 г",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 10,
        description: "Сырное ассорasdasd asd asd ное",
        image: "food-image-desktop.png",
        oldPrice: "",
        weight: "",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 11,
        description: "Сырное ассорasdasd asd asd ное",
        image: "food-image-desktop.png",
        oldPrice: "",
        weight: "",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
      {
        id: 12,
        description: "Сырное ассорasdasd asd asd ное ассор asdasd asd asd Сырное ассорasdasd asd asd",
        image: "food-image-desktop.png",
        oldPrice: "450",
        weight: "/ 150 г",
        count: 1,
        logoStocks: "logo-stocks",
        active: false,
      },
    ],
    user: {
      authorized: false,
    }
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
    counterPlus(state, id) {
      state.basketItems.forEach(el => {
        if (el.id === id) {
          el.count++
          el.newPrice = el.price * el.count;
          localStorage.setItem("basketData", JSON.stringify(state.basketItems));
        }
      })
    },
    counterMinus(state, id) {
      state.basketItems.forEach(el => {
        if (el.id === id && el.count > 1) {
          el.count--
          el.newPrice = el.price * el.count;
          localStorage.setItem("basketData", JSON.stringify(state.basketItems));
        }
      })
    },
    setLocalStorage(state) {
      localStorage.setItem("basketData", JSON.stringify(state.basketItems));
    },
    getLocalStorage(state) {
      state.basketItems = JSON.parse(localStorage.getItem('basketData')) || []
    },
    login(state, auth_state) {
      auth_state === true ? state.user.authorized = true : state.user.authorized = false
      console.log(`Пользователь авторизовался  ${state.user.authorized}`)
    }
  },
  getters: {
    basketItems(state) {
      return state.basketItems;
    },
  },
});
