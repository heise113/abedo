<template>
  <div class="food-wrapper" :class="String(item.active)">
    <div class="food-wrapper__image">
      <img :src="getImgUrl(item.image)" alt="#" v-if="item.image" />
    </div>
    <div class="food-wrapper__info">
      <div class="food-wrapper__info__description">
        {{ item.description }}
      </div>
      <div class="food-wrapper__info__price">
        <div class="food-wrapper__info__price__new">{{ item.price }}₽</div>
        <div class="food-wrapper__info__price__weight" v-if="item.weight">
          {{ item.weight }}
        </div>
        <!-- <div class="food-wrapper__info__price__count" v-else>
        {{ item.count }}
      </div> -->
        <div class="food-wrapper__info__price__old">
          {{ item.oldPrice }}
        </div>
      </div>
      <div
        class="food-wrapper__info__button"
        @click="addItemInBasket"
        v-if="item.active === false"
      >
        <div class="food-wrapper__info__button__logo">
          <svg height="16" width="18">
            <use xlink:href="@/assets/images/icons.svg#cafe-cart-basket"></use>
          </svg>
        </div>
        <div class="food-wrapper__info__button__title">В корзину</div>
      </div>

      <div class="food-wrapper__info__count" v-else>
        <button
          @click="counterMinus(index)"
          class="food-wrapper__info__count__minus"
        >
          <svg height="2" width="12">
            <use xlink:href="@/assets/images/icons.svg#cafe-cart-minus"></use>
          </svg>
        </button>
        <div class="food-wrapper__info__count__counter">
          {{ item.count }}
        </div>
        <button
          @click="counterPlus(index)"
          class="food-wrapper__info__count__plus"
        >
          <svg height="10" width="10">
            <use xlink:href="@/assets/images/icons.svg#plus-plus"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    getImgUrl(image) {
      var images = require.context("../../assets/images/", false, /\.png$/);
      return images("./" + image);
    },
    addItemInBasket() {
      this.$store.commit("addItemInBasket", this.item);
    },
    counterPlus(index) {
      this.$store.commit("counterPlus", index);
    },
    counterMinus(index) {
      this.$store.commit("counterMinus", index);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

* {
  box-sizing: border-box;
}

.true {
  border: 2px solid black;
}

.food-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
  width: 295px;
  border-radius: 20px;
  background-color: $WHITE;

  &__image {
    height: 190px;
    flex-shrink: 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    padding: 15px 20px 25px 20px;

    &__description {
      margin-bottom: 15px;

      font-family: "SF";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #454545;
    }

    &__price {
      display: flex;
      align-items: start;
      flex: 1;

      &__new {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: $MACHINE-GUN-METAL;
        margin-right: 5px;
      }

      &__weight,
      &__count {
        font-family: "SF";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $SPACEMAN;
        margin-right: 20px;
      }

      &__old {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-decoration-line: line-through;
        color: $MITHRIL;
      }
    }

    &__count {
      padding-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      &__counter {
        margin-left: 10px;
        margin-right: 10px;
        font-family: "SF";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: $BLACK;
      }

      &__plus,
      &__minus {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        border: 1px solid $SPACEMAN;
        border-radius: 50%;
        background-color: $WHITE;
        cursor: pointer;
      }
    }

    &__button {
      background-color: $SPACEMAN;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 228px;
      padding: 11px 0;
      border-radius: 50px;
      margin: 17px auto 0 auto;
      cursor: pointer;
      transition-duration: 0.3s;

      &:hover {
        background-color: $PHYSALIS;
      }

      &__text {
        font-family: "Montserrat", sans-serif;
        margin-left: 10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
        user-select: none;
        color: $WHITE;
      }

      &__title {
        font-family: "SF";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: $WHITE;
        margin-left: 10px;
      }
    }
  }
}
</style>
