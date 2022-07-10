<template>
  <div class="wrapper-cart">
    <img :src="getImgUrl(item.image)" alt="#" v-if="item.image"/>
    <div class="wrapper-cart__none-image" v-else>

    </div>

    <div class="wrapper-cart__about-food">
      <div class="wrapper-cart__about-food__description">
        {{ item.description }}
      </div>
      <div class="wrapper-cart__about-food__weight">
        {{ item.weight }}
      </div>
      <div class="wrapper-cart__about-food__price">
        <div class="wrapper-cart__about-food__price__new">
          {{ item.price }}
        </div>
        <div class="wrapper-cart__about-food__price__old" v-if="item.oldPrice">
          {{ item.oldPrice }}
        </div>
      </div>
      <div class="wrapper-cart__about-food__basket-logo">
        <svg height="16" width="18">
          <use xlink:href="@/assets/images/icons.svg#cafe-cart-basket"></use>
        </svg>
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
  },
  methods: {
    getImgUrl(image) {
      var images = require.context("../../assets/images/", false, /\.png$/);
      return images("./" + image);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.wrapper-cart {
  background-color: $WHITE;
  border: 1px solid $VAGUELY-VIOLET;
  border-radius: 8px;

  &__none-image {
    height: 111px;
    width: 100%;
    background-color: gray;
    border-radius: 8px;
  }

  &__about-food {
    margin-top: 7px;
    padding: 0 14px 14px 14px;

    &__description {
      font-family: 'SF';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      color: $MACHINE-GUN-METAL;
      margin-bottom: 1px;
    }

    &__weight {
      font-family: 'SF';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: $SPACEMAN;
      margin-bottom: 7px;
    }

    &__price {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__new {
        font-family: 'SF';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: $MACHINE-GUN-METAL;
        margin-bottom: 10px;
      }

      &__old {
        font-family: 'SF';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        text-decoration-line: line-through;
        color: $MITHRIL;
      }
    }

    &__basket-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      background: $SPACEMAN;
      border-radius: 8px;
    }
  }
}

</style>
