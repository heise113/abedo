<template>
  <div class="wrapper-basket">
    <div class="wrapper-basket__container">
      <div class="wrapper-basket__container__title">
        Оформление заказа
      </div>

      <div class="wrapper-basket__container__design-form">
        <div class="wrapper-basket__container__design-form__top">
          <div class="wrapper-basket__container__design-form__top__name">
            <div class="wrapper-basket__container__design-form__top__name__image">
              <img src="@/assets/images/cafe-cart-desktop.png" alt="#">
            </div>
            <div class="wrapper-basket__container__design-form__top__name__text">
              Кафе “Лимончелло”
            </div>
          </div>
          <button class="wrapper-basket__container__design-form__top__button">
            Очистить
          </button>
        </div>
        <div class="wrapper-basket__container__design-form__element-list">
          <ElementItemDesktop
            v-for="element in elementList"
            :element="element"
            :key="element.id"
          />
        </div>
        <div class="wrapper-basket__container__design-form__promo-code">
          <span class="wrapper-basket__container__design-form__promo-code__text">Введите промокод</span>
          <input type="text" class="wrapper-basket__container__design-form__promo-code__input">
          <div class="wrapper-basket__container__design-form__promo-code__applied">
            <div class="wrapper-basket__container__design-form__promo-code__applied__logo">
              <svg height="30" width="30">
                <use xlink:href="@/assets/images/icons.svg#basket-true"></use>
              </svg>
            </div>
            <div class="wrapper-basket__container__design-form__promo-code__applied__text">
              Промокод применен
            </div>
          </div>
          <div class="wrapper-basket__container__design-form__promo-code__not-found">
            Промокод не найден
          </div>
        </div>
        <div class="wrapper-basket__container__design-form__total">
          <div class="wrapper-basket__container__design-form__total__text">
            Итого:
          </div>
          <div class="wrapper-basket__container__design-form__total__new-price">
            1 330 ₽
          </div>
          <div class="wrapper-basket__container__design-form__total__old-price">
            1 600 ₽
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ElementItemDesktop from "@/components/basket/ElementItemDesktop"

export default {
  data() {
    return {
      elementList: [
        {
          id: 1,
          name: 'Сырное ассорти',
          image: 'basket-image-item-1.png',
          onePrice: '900 ₽',
          morePrice: '9 500 ₽',
          count: '10000',
          add: [
            '+ Говяжья котлета 1 х 345 ₽',
            '+ Говяжья котлета 1 х 345 ₽'
          ],
        },
        {
          id: 2,
          name: 'Сырное ассорти',
          image: 'basket-image-item-1.png',
          onePrice: '1 350 ₽',
          morePrice: '3 500 ₽',
          count: '10',

        },
        {
          id: 3,
          name: 'Гамбургер в подарок',
          image: 'basket-image-item-2.png',
          surprise: 'Подарок',
        },
      ]
    }
  },
  components: {
    ElementItemDesktop
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.wrapper-basket {
  margin-top: 75px;
  margin-bottom: 115px;
  padding-left: 20px;
  padding-right: 20px;

  &__container {
    max-width: $CONTAINER-WIDTH;
    width: 100%;
    margin: 0 auto;

    &__title {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      color: $MACHINE-GUN-METAL;

      margin-bottom: 69px;
    }

    &__design-form {
      background: $WHITE;
      border-radius: 20px;
      padding: 30px 30px 40px 30px;

      &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 30px;
        border-bottom: 1px solid #878787;

        &__name {
          display: flex;
          align-items: center;
          justify-content: space-between;

          &__text {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 20px;
            color: $MACHINE-GUN-METAL;
          }

          &__image img {
            width: 79px;
            height: 39px;
            margin-right: 48px;
          }
        }

        &__button {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          text-decoration-line: underline;
          color: $ORANGE-SODA;
          border: none;
          background: none;
        }
      }

      &__element-list {
        margin-bottom: 40px;
      }

      &__promo-code {
        display: flex;
        align-items: center;
        margin-bottom: 36px;

        &__text {
          font-family: 'SF';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: $MACHINE-GUN-METAL;

          margin-right: 40px;
        }

        &__input {
          background-color: $WHITE;
          border: 1px solid $MITHRIL;
          width: 180px;
          border-radius: 50px;
          padding: 20px 10px;
          margin-right: 15px;

          font-family: 'SF';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: $MACHINE-GUN-METAL;
        }

        &__applied {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 30px;
          background-color: $VAGUELY-VIOLET;
          border-radius: 20px;
          margin-right: 15px;

          &__logo {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
          }

          &__text {
            display: flex;
            align-items: center;
            justify-content: center;

            font-family: 'SF';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: $BLUISH-GREEN;
          }
        }

        &__not-found {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px 30px;

          background-color: $VAGUELY-VIOLET;
          border: 1px solid $ORANGE-SODA;
          border-radius: 20px;

          font-family: 'SF';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: $ORANGE-SODA;

        }
      }

      &__total {
        display: flex;
        align-items: center;

        &__text {
          font-family: 'SF';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
          color: $MACHINE-GUN-METAL;

          margin-right: 15px;
        }

        &__new-price {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
          color: $LEAD;

          margin-right: 20px;
        }

        &__old-price {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          text-decoration-line: line-through;
          color: $MACHINE-GUN-METAL;
        }
      }
    }
  }
}

</style>