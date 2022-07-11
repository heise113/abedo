<template>
  <div class="wrapper-element">
    <div class="wrapper-element__top">
      <div class="wrapper-element__top__name">
        {{ element.name }}
      </div>
      <svg height="15" width="15">
        <use xlink:href="@/assets/images/icons.svg#cafe-cart-close"></use>
      </svg>
    </div>
    <div class="wrapper-element__price-block">
      <img
        src="@/assets/images/basket-logo.png"
        alt="#"
        class="wrapper-element__price-block__logo"
      />
      <div class="wrapper-element__price-block__count">
        <div class="wrapper-element__price-block__count__plus">
          <svg height="2" width="12">
            <use xlink:href="@/assets/images/icons.svg#cafe-cart-minus"></use>
          </svg>
        </div>
        <div class="wrapper-element__price-block__count__counter">1</div>
        <div class="wrapper-element__price-block__count__minus">
          <svg height="2" width="12">
            <use xlink:href="@/assets/images/icons.svg#cafe-cart-minus"></use>
          </svg>
        </div>
      </div>
      <div class="wrapper-element__price-block__price">
        <div class="wrapper-element__price-block__price__new">10 345 ₽</div>
        <div class="wrapper-element__price-block__price__old">10 345 ₽</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.wrapper-element {
  background-color: $WHITE;
  padding: 14px;
  margin-bottom: 15px;
  border-radius: 10px;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__name {
      font-family: "SF";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: $BLACK;
    }
  }

  &__price-block {
    margin-top: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__count {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__counter {
        padding-left: 10px;
        padding-right: 10px;
      }

      &__plus,
      &__minus {
        height: 34px;
        width: 34px;
        border: 1px solid $SPACEMAN;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &__price {
      &__new {
        font-family: "SF";
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 16px;
        color: $ORANGE-SODA;
        padding-bottom: 2px;
      }

      &__old {
        font-family: "SF";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: line-through;
        color: $MITHRIL;
      }
    }
  }
}
</style>
