<template>
  <div class="basket">
    <div class="basket__logo">
      <svg height="20" width="20">
        <use xlink:href="@/assets/images/icons.svg#basket-basket"></use>
      </svg>
    </div>
    <div class="basket__header">
      <div class="basket__header__title">Корзина</div>
      <div @click="clearBasket" class="basket__header__clear">Очистить</div>
    </div>
    <div class="basket__shop" v-if="$store.state.basketItems.length !== 0">
      <div class="basket__shop__left">
        <div class="basket__shop__left__type">Магазин</div>
        <div class="basket__shop__left__name">Кафе “Лимончелло”</div>
      </div>
      <div class="basket__shop__right">
        <img
          class="basket__shop__right__image"
          src="@/assets/images/cafe-cart-desktop.png"
          alt="#"
        />
      </div>
    </div>
    <div v-else class="basket__empty">корзина пуста</div>

    <div v-for="(item, index) in $store.state.basketItems" :key="item.id">
      <div class="basket__shop-product__top">
        <div class="basket__shop-product__top__about">
          <img
            class="basket__shop-product__top__about__image"
            src="@/assets/images/basket-image.png"
            alt="#"
          />
          <div class="basket__shop-product__top__about__title">
            {{ item.description }}{{ item.id }}
          </div>
        </div>
        <div
          @click="removeItemBasket(index)"
          class="basket__shop-product__top__close"
        >
          <svg height="15" width="15">
            <use xlink:href="@/assets/images/icons.svg#cafe-cart-close"></use>
          </svg>
        </div>
      </div>
      <div class="basket__shop-product__bottom">
        <div class="basket__shop-product__bottom__count">
          <button
            @click="counterMinus(index)"
            class="basket__shop-product__bottom__count__minus"
          >
            <svg height="2" width="12">
              <use xlink:href="@/assets/images/icons.svg#cafe-cart-minus"></use>
            </svg>
          </button>
          <div class="basket__shop-product__bottom__count__counter">
            {{ item.count }}
          </div>
          <button
            @click="counterPlus(index)"
            class="basket__shop-product__bottom__count__plus"
          >
            <svg height="10" width="10">
              <use xlink:href="@/assets/images/icons.svg#plus-plus"></use>
            </svg>
          </button>
        </div>
        <div class="basket__shop-product__bottom__price">
          {{ item.count === 1 ? item.price : item.newPrice }}
        </div>
      </div>
    </div>

    <div class="basket__delivery" v-if="$store.state.basketItems.length !== 0">
      <div class="basket__delivery__type">Доставка</div>
      <div class="basket__delivery__price">Бесплатно</div>
    </div>
    <div class="basket__total" v-if="$store.state.basketItems.length !== 0">
      <div class="basket__total__title">ИТОГО:</div>
      <div class="basket__total__price">{{ totalPrice }}</div>
    </div>
    <div class="basket__button" v-if="$store.state.basketItems.length !== 0">
      Оформить заказ
    </div>
    <!-- <BlueButton class="basket__button">
      <span class="blue-button__text">Оформить заказ</span>
    </BlueButton> -->
  </div>
</template>

<script>
import BlueButton from "@/components/buttons/BlueButton.vue";

export default {
  data() {
    return {
      totalPrice: 0,
    };
  },
  components: {
    BlueButton,
  },
  updated() {
    this.totalPrice = this.countTotalPrice();
  },
  methods: {
    clearBasket() {
      this.$store.commit("clearBasket");
    },
    removeItemBasket(index) {
      this.$store.commit("removeItemBasket", index);
    },
    countTotalPrice() {
      let price = 0;
      this.$store.state.basketItems.forEach((el) => {
        if (el.count > 1) {
          price += el.newPrice;
        } else {
          price += el.price;
        }
      });
      return price;
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

.basket {
  border: 1px solid #eeeeee;
  position: relative;
  border-radius: 20px;
  width: 292px;
  background-color: $WHITE;
  padding: 50px 20px 40px 20px;
  margin-left: 30px;
  flex-shrink: 0;

  &__empty {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: $MACHINE-GUN-METAL;
    text-align: center;
    margin-top: 30px;
  }

  &__logo {
    position: absolute;
    top: -30px;
    width: 60px;
    height: 60px;
    background-color: $ORANGE-SODA;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid $PEARL;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: $MACHINE-GUN-METAL;
    }

    &__clear {
      font-family: "SF";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-decoration-line: underline;
      color: $ORANGE-SODA;
      cursor: pointer;
    }
  }

  &__shop {
    margin-top: 15px;
    padding-bottom: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $VAGUELY-VIOLET;

    &__left {
      &__type {
        font-family: "SF";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: $SPACEMAN;
        margin-bottom: 6px;
      }

      &__name {
        font-family: "SF";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: $MACHINE-GUN-METAL;
      }
    }

    &__right {
      display: flex;
      align-items: center;
      justify-items: center;

      &__image {
        width: 55px;
        height: 40px;
      }
    }
  }

  &__shop-product {
    &__top {
      margin-top: 22px;
      display: flex;
      align-items: start;
      justify-content: space-between;

      &__close {
        cursor: pointer;
      }

      &__about {
        display: flex;
        align-items: center;

        &__title {
          font-family: "SF";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: $MACHINE-GUN-METAL;
          margin-left: 10px;
        }
      }
    }

    &__bottom {
      padding-bottom: 20px;
      border-bottom: 1px solid $VAGUELY-VIOLET;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__count {
        display: flex;
        align-items: center;
        justify-content: space-between;

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

      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: $MACHINE-GUN-METAL;
      }
    }
  }

  &__delivery {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid $VAGUELY-VIOLET;

    &__type {
      font-family: "SF";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $MACHINE-GUN-METAL;
    }

    &__price {
      font-family: "SF";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: $MACHINE-GUN-METAL;
    }
  }

  &__total {
    margin-top: 22px;
    margin-bottom: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
      font-family: "SF";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: $MACHINE-GUN-METAL;
    }

    &__price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: $MACHINE-GUN-METAL;
    }
  }

  &__button {
    // max-width: 228px;
    // width: 100%;
    // height: 50px;
    // margin: 0 auto;

    cursor: pointer;
    background: $SPACEMAN;
    border-radius: 50px;
    padding: 15px;
    text-align: center;

    font-family: "SF";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: $WHITE;
  }
}
</style>
