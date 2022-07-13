<template>
  <div class="wrapper-basket">
    <div class="wrapper-basket__header">
      <div class="wrapper-basket__header__title">Корзина</div>
      <div class="wrapper-basket__header__button">Очистить</div>
    </div>
    <div class="wrapper-basket__element-list">
      <ElementItem
        v-for="element in elementList"
        :element="element"
        :key="element.id"
      />
    </div>
    <div class="wrapper-basket__surprise-block">
      <div class="wrapper-basket__surprise-block__top">
        <div class="wrapper-basket__surprise-block__top__surprise">
          <svg height="17" width="17">
            <use xlink:href="@/assets/images/icons.svg#basket-surprise"></use>
          </svg>
          <div class="wrapper-basket__surprise-block__top__surprise__name">
            Подарок
          </div>
        </div>
        <div class="wrapper-basket__surprise-block__top__count">
          Количество: 1
        </div>
      </div>
      <div class="wrapper-basket__surprise-block__button">
        <img
          src="@/assets/images/basket-logo.png"
          alt=""
          class="wrapper-basket__surprise-block__button__logo"
        />
        <div class="wrapper-basket__surprise-block__button__description">
          Улитки escargots по-бургундски в масле замороженные
        </div>
      </div>
    </div>
    <div class="wrapper-basket__promocode-block">
      <div class="wrapper-basket__promocode-block__buttons">
        <div class="wrapper-basket__promocode-block__buttons__input">
          Введите промокод
        </div>
        <div class="wrapper-basket__promocode-block__buttons__apply">
          Применить
        </div>
      </div>
      <div class="wrapper-basket__promocode-block__applied">
        <div class="wrapper-basket__promocode-block__applied__logo">
          <svg height="30" width="30">
            <use xlink:href="@/assets/images/icons.svg#basket-true"></use>
          </svg>
        </div>
        <div class="wrapper-basket__promocode-block__applied__text">
          Промокод применен
        </div>
      </div>
      <div class="wrapper-basket__promocode-block__not-found">
        Промокод не найден
      </div>
      <div class="wrapper-basket__promocode-block__discount">
        <div class="wrapper-basket__promocode-block__discount__text">
          Скидка по промокоду
        </div>
        <div class="wrapper-basket__promocode-block__discount__price">
          120 ₽
        </div>
      </div>
    </div>
    <div class="wrapper-basket__total">
      <div class="wrapper-basket__total__new-price">Итого: 1 330 ₽</div>
      <div class="wrapper-basket__total__old-price">1 600 ₽</div>
    </div>
    <div class="wrapper-basket__design">
      Оформить заказ
    </div>
  </div>
</template>

<script>
import ElementItem from "@/components/basket/ElementItemMobile.vue";

export default {
  data() {
    return {
      elementList: [
        {
          id: 1,
          name: "Улитки escargots по-бургундски в масле замороженные",
          newPrice: "10 345 ₽",
          oldPrice: "10 345 ₽",
        },
        {
          id: 2,
          name: "Улитки escargots по-бургундски в масле замороженные",
          newPrice: "10 345 ₽",
          oldPrice: "10 345 ₽",
        },
        {
          id: 3,
          name: "Улитки escargots по-бургундски в масле замороженные",
          newPrice: "10 345 ₽",
          oldPrice: "10 345 ₽",
        },
      ],
    };
  },
  components: {
    ElementItem,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.wrapper-basket {
  padding-left: 20px;
  padding-right: 20px;

  &__header {
    padding-top: 33px;
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
      font-family: "SF";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: $MACHINE-GUN-METAL;
    }

    &__button {
      font-family: "SF";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: $ORANGE-SODA;
    }
  }

  &__surprise-block {
    background-color: $WHITE;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 25px;

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__surprise {
        display: flex;
        align-items: center;
        background-color: $BLUISH-GREEN;
        padding: 4px;

        &__name {
          font-family: "SF";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: $WHITE;
          margin-left: 13px;
        }
      }

      &__count {
        font-family: "SF";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $SPACEMAN;
        margin-right: 5px;
      }
    }

    &__button {
      margin: 14px;
      display: flex;

      &__description {
        font-family: "SF";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: $BLACK;
        margin-left: 10px;
      }
    }
  }

  &__promocode-block {
    padding-top: 30px;
    border-top: 1px solid $VAGUELY-VIOLET;
    margin-bottom: 24px;

    &__buttons {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      &__input {
        font-family: "SF";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: $MACHINE-GUN-METAL;

        border: 1px solid $MITHRIL;
        border-radius: 50px;
        padding: 12px 24px;

        margin-right: 12px;
      }

      &__apply {
        font-family: "SF";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: $WHITE;

        background: $SPACEMAN;
        border-radius: 25px;
        padding: 12px 24px;
      }
    }

    &__applied {
      display: flex;
      align-items: center;
      width: 258px;
      background: $VAGUELY-VIOLET;
      border-radius: 20px;
      padding: 10px 30px;

      margin-bottom: 15px;

      &__text {
        font-family: "SF";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: $BLUISH-GREEN;

        margin-left: 15px;
      }
    }

    &__not-found {
      font-family: "SF";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: $ORANGE-SODA;

      display: inline-block;

      background: $VAGUELY-VIOLET;
      border: 1px solid $ORANGE-SODA;
      border-radius: 20px;
      padding: 10px 30px;
      margin-bottom: 24px;
    }

    &__discount {
      display: flex;

      &__text {
        font-family: "SF";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: $MACHINE-GUN-METAL;
        margin-right: 10px;
      }

      &__price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-decoration-line: line-through;
        color: $MACHINE-GUN-METAL;
      }
    }
  }

  &__total {
    border-top: 1px solid $VAGUELY-VIOLET;
    padding-top: 30px;
    display: flex;
    text-align: center;
    margin-bottom: 30px;

    &__new-price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: $LEAD;
      margin-right: 20px;
    }

    &__old-price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-decoration-line: line-through;
      color: $MACHINE-GUN-METAL;
    }
  }

  &__design {
    display: inline-block;

    padding: 16px 36px;

    font-family: 'SF';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: $WHITE;

    background: $BLUISH-GREEN;
    border-radius: 50px;

    margin-bottom: 200px;
  }
}
</style>
