<template>
  
  <div class="cart-wrapper">
    <div class="cart-wrapper__container">
      <div class="cart-wrapper__container__info">
        <div class="cart-wrapper__container__info__contact">
          <div class="cart-wrapper__container__info__contact__number">
            <div class="cart-wrapper__container__info__contact__number__logo">
              <svg height="15" width="15">
                <use xlink:href="@/assets/images/icons.svg#cafe-cart-number"></use>
              </svg>
            </div>
            <div class="cart-wrapper__container__info__contact__number__text">
              +790 000 000 00
            </div>
          </div>
          <div class="cart-wrapper__container__info__contact__social">
            <div class="cart-wrapper__container__info__contact__social__whatsapp">
              <svg height="30" width="30">
                <use xlink:href="@/assets/images/icons.svg#cafe-cart-whatsapp"></use>
              </svg>
            </div>
            <div class="cart-wrapper__container__info__contact__social__telegram">
              <svg height="30" width="30">
                <use xlink:href="@/assets/images/icons.svg#cafe-cart-telegram"></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="cart-wrapper__container__info__delivery">
          <div class="cart-wrapper__container__info__delivery__logo">
            <svg height="20" width="20">
              <use xlink:href="@/assets/images/icons.svg#cafe-cart-delivery"></use>
            </svg>
          </div>
          <div class="cart-wrapper__container__info__delivery__text">
            Бесплатная доставка при заказе от 1000 ₽
          </div>
        </div>
        <div class="cart-wrapper__container__info__surprise">
          <div class="cart-wrapper__container__info__surprise__logo">
            <svg height="20" width="20">
              <use xlink:href="@/assets/images/icons.svg#cafe-cart-surprise"></use>
            </svg>
          </div>
          <div class="cart-wrapper__container__info__surprise__text">
            Подарок “Чизбургер” при заказе от 1000 ₽
          </div>
        </div>
      </div>
      <div class="cart-wrapper__container__stocks">
        <div class="cart-wrapper__container__stocks__title">
          Акции
        </div>
        <StocksSliderMobile/>
      </div>
      <div class="cart-wrapper__container__food">
        <FoodSlider/>
        <div class="cart-wrapper__container__food__title">
          Холодные блюда
        </div>
        <div class="cart-wrapper__container__food__food-list">
          <FoodCart
            v-for="(item, index) in foodList"
            :item="item"
            :key="index"
          />
        </div>
      </div>
      <div class="cart-wrapper__container__snack">
        <div class="cart-wrapper__container__snack__title">
          Холодные закуски
        </div>
        <div class="cart-wrapper__container__snack__snack-list">
          <FoodCart
            v-for="(item, index) in snackList"
            :item="item"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import FoodCart from "@/components/FoodCart.vue"
import StocksSliderMobile from "@/components/stocks/slider/Mobile.vue"
import FoodSlider from "@/components/FoodSlider.vue"

export default {
  data() {
    return {
      foodList: [
        {
          image: 'food-cart-image.png',
          description: 'Теплый салат с баклажанами и поми...',
          weight: '450г',
          price: '10 345 ₽',
          oldPrice: '',
        },
        {
          image: '',
          description: 'Теплый салат с баклажанами и поми...',
          weight: '450г',
          price: '10 345 ₽',
          oldPrice: '10 345 ₽',
        },
        {
          image: 'food-cart-image.png',
          description: 'Теплый салат с баклажанами и поми...',
          weight: '450г',
          price: '10 345 ₽',
          oldPrice: '',
        },
        {
          image: 'food-cart-image.png',
          description: 'Теплый салат с баклажанами и поми...',
          weight: '450г',
          price: '10 345 ₽',
          oldPrice: '10 345 ₽',
        },
      ],
      snackList: [
        {
          image: 'food-cart-image.png',
          description: 'Теплый салат с баклажанами и поми...',
          weight: '450г',
          price: '10 345 ₽',
          oldPrice: '',
        },
        {
          image: '',
          description: 'Теплый салат с баклажанами и поми...',
          weight: '450г',
          price: '10 345 ₽',
          oldPrice: '10 345 ₽',
        },
        {
          image: 'food-cart-image.png',
          description: 'Теплый салат с баклажанами и поми...',
          weight: '450г',
          price: '10 345 ₽',
          oldPrice: '10 345 ₽',
        },
        {
          image: 'food-cart-image.png',
          description: 'Теплый салат с баклажанами и поми...',
          weight: '450г',
          price: '10 345 ₽',
          oldPrice: '10 345 ₽',
        },
      ]
    }
  },
  components: {
    StocksSliderMobile,
    FoodSlider,
    FoodCart,
  }
}

</script>

<style scoped lang="scss">

@import "@/assets/styles.scss";

.cart-wrapper {
  background-color: $PEARL;
  padding-top: 15px;
  padding-bottom: 60px;

  &__container {
    padding-left: 20px;
    padding-right: 20px;
    max-width: $CONTAINER-WIDTH;
    width: 100%;
    margin: 0 auto;

    &__info {
      &__contact {
        border-bottom: 1px solid $VAGUELY-VIOLET;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__number {
          display: flex;
          align-items: center;

          &__logo {
            width: 40px;
            height: 40px;
            margin-right: 18px;

            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #878787;
            border-radius: 50px;
          }
        }

        &__social {
          display: flex;
          align-items: center;

          &__whatsapp {
            margin-right: 14px;
          }
        }
      }

      &__delivery {
        border-bottom: 1px solid $VAGUELY-VIOLET;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;

        &__logo {
          width: 40px;
          height: 40px;
          margin-right: 18px;

          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #878787;
          border-radius: 50px;
        }
      }

      &__surprise {
        border-bottom: 1px solid $VAGUELY-VIOLET;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;

        &__logo {
          width: 40px;
          height: 40px;
          margin-right: 17px;

          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #878787;
          border-radius: 50px;
        }
      }
    }

    &__stocks {
      margin-top: 30px;
      margin-bottom: 58px;

      &__title {
        font-family: 'SF';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: $MACHINE-GUN-METAL;
      }
    }
    &__food {
      &__title {
        font-family: 'SF';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: $MACHINE-GUN-METAL;
        margin-top: 30px;
      }

      &__food-list {
        margin-top: 30px;
        display: grid;
        justify-content: center;
        grid-template-columns: 156px 156px;
        grid-gap: 15px;
      }
    }

    &__snack {
      &__title {
        font-family: 'SF';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: $MACHINE-GUN-METAL;
        margin-top: 30px;
      }

      &__snack-list {
        margin-top: 30px;
        display: grid;
        grid-template-columns: 156px 156px;
        justify-content: center;
        grid-gap: 15px;
      }
    }
  }
}

@media (min-width: 550px) {
  .cart-wrapper__container__food__food-list, .cart-wrapper__container__snack__snack-list {
    
    grid-template-columns: 156px 156px 156px;

  }
}

@media (min-width: 700px) {
  .cart-wrapper__container__food__food-list, .cart-wrapper__container__snack__snack-list {
    
    grid-template-columns: 156px 156px 156px 156px;

  }
}

</style>