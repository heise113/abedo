<template>
  <AboutCafe @offModal="aboutCafeActive" v-if="modalAboutCafe"/>
  <div class="cart-wrapper">
    <div class="cart-wrapper__container">
      <div class="cart-wrapper__container__cafe">
        <div class="cart-wrapper__container__cafe__cart">
          <div class="cart-wrapper__container__cafe__cart__top">
            <div class="cart-wrapper__container__cafe__cart__top__image">
              <img src="@/assets/images/cafe-cart-desktop.png" alt="#"/>
            </div>
            <div class="cart-wrapper__container__cafe__cart__top__description">
              <div
                  class="cart-wrapper__container__cafe__cart__top__description__about"
              >
                <div
                    class="cart-wrapper__container__cafe__cart__top__description__about__title"
                >
                  Кафе “Лимончелло”
                </div>
                <div
                    class="cart-wrapper__container__cafe__cart__top__description__about__category"
                >
                  Европейская, Кавказская, Японская кухня, Детское меню,
                  Фаст-Фуд
                </div>
                <div
                    class="cart-wrapper__container__cafe__cart__top__description__about__contact"
                >
                  <div
                      class="cart-wrapper__container__cafe__cart__top__description__about__contact__number"
                  >
                    <div
                        class="cart-wrapper__container__cafe__cart__top__description__about__contact__number__logo"
                    >
                      <svg height="15" width="15">
                        <use
                            xlink:href="@/assets/images/icons.svg#cafe-cart-number"
                        ></use>
                      </svg>
                    </div>
                    <div
                        class="cart-wrapper__container__cafe__cart__top__description__about__contact__number__text"
                    >
                      +790 000 000 00
                    </div>
                  </div>
                  <div
                      class="cart-wrapper__container__cafe__cart__top__description__about__contact__social"
                  >
                    <div
                        class="cart-wrapper__container__cafe__cart__top__description__about__contact__social__whatsapp"
                    >
                      <svg height="30" width="30">
                        <use
                            xlink:href="@/assets/images/icons.svg#cafe-cart-whatsapp"
                        ></use>
                      </svg>
                    </div>
                    <div
                        class="cart-wrapper__container__cafe__cart__top__description__about__contact__social__telegram"
                    >
                      <svg height="30" width="30">
                        <use
                            xlink:href="@/assets/images/icons.svg#cafe-cart-telegram"
                        ></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                    class="cart-wrapper__container__cafe__cart__top__description__about__more"
                >
                  <div
                      @click="aboutCafeActive"
                      class="cart-wrapper__container__cafe__cart__top__description__about__more__text"
                  >
                    Подробнее
                  </div>
                  <div
                      class="cart-wrapper__container__cafe__cart__top__description__about__more__logo"
                  >
                    <svg height="10" width="6">
                      <use
                          xlink:href="@/assets/images/icons.svg#cafe-cart-arrow"
                      ></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                  class="cart-wrapper__container__cafe__cart__top__description__rating"
              >
                <div
                    class="cart-wrapper__container__cafe__cart__top__description__rating__logo"
                >
                  <svg height="15" width="15">
                    <use
                        xlink:href="@/assets/images/icons.svg#cafe-cart-star"
                    ></use>
                  </svg>
                </div>
                <div
                    class="cart-wrapper__container__cafe__cart__top__description__rating__text"
                >
                  Рейтинг:
                </div>
                <div
                    class="cart-wrapper__container__cafe__cart__top__description__rating__number"
                >
                  4,7
                </div>
              </div>
            </div>
          </div>
          <div class="cart-wrapper__container__cafe__cart__bottom">
            <div class="cart-wrapper__container__cafe__cart__bottom__delivery">
              <div
                  class="cart-wrapper__container__cafe__cart__bottom__delivery__logo"
              >
                <svg height="20" width="20">
                  <use
                      xlink:href="@/assets/images/icons.svg#cafe-cart-delivery"
                  ></use>
                </svg>
              </div>
              <div
                  class="cart-wrapper__container__cafe__cart__bottom__delivery__text"
              >
                Бесплатная доставка при заказе от 1000
              </div>
            </div>
            <div class="cart-wrapper__container__cafe__cart__bottom__surprise">
              <div
                  class="cart-wrapper__container__cafe__cart__bottom__surprise__logo"
              >
                <svg height="20" width="20">
                  <use
                      xlink:href="@/assets/images/icons.svg#cafe-cart-surprise"
                  ></use>
                </svg>
              </div>
              <div
                  class="cart-wrapper__container__cafe__cart__bottom__surprise__text"
              >
                Подарок “Чизбургер” при заказе от 1000
              </div>
            </div>
          </div>
        </div>
        <div class="cart-wrapper__container__cafe__stocks">
          <StocksBlock v-for="item in stocksList" :item="item" :key="item.id"/>
        </div>
        <div class="cart-wrapper__container__cafe__sections">
          <div class="cart-wrapper__container__cafe__sections__title">
            Разделы каталога “Лимончелло”
          </div>
          <div class="cart-wrapper__container__cafe__sections__list">
            <SectionItem
                v-for="item in sectionsList"
                :item="item"
                :key="item.id"
            />
          </div>
        </div>
        <div class="cart-wrapper__container__cafe__food-list">
          <FoodCartDesktop
              v-for="(item, index) in $store.state.foodList"
              :item="item"
              :index="index"
              :key="item.id"
          />
        </div>
      </div>
      <BasketWindow class="cart-wrapper__container__basket-window"/>
    </div>
  </div>
</template>

<script>
import StocksBlock from "@/components/stocks/StocksBlock.vue";
import SectionItem from "@/components/SectionItem.vue";
import FoodCartDesktop from "@/components/food/CartDesktop.vue";
import AboutCafe from "@/components/modals-window/AboutCafe.vue";
import BasketWindow from "@/components/basket/BasketWindow.vue";

export default {
  components: {
    StocksBlock,
    SectionItem,
    FoodCartDesktop,
    AboutCafe,
    BasketWindow,
  },
  data() {
    return {
      stocksList: [
        {
          id: 1,
          title: "Кафе “Лимончелло”",
          description: "Получайте 1% бонусами и скидку до 99% ",
          backgroundColor: "blue",
          backgroundImage: "stocks-background.png",
          logo: "stocks-logo.png",
        },
        {
          id: 2,
          title: "Кафе “Лимончелло”",
          description: "Получайте 1% бонусами и скидку до 99% ",
          backgroundColor: "red",
          backgroundImage: "stocks-background.png",
          logo: "",
        },
      ],
      sectionsList: [
        {name: "Салаты"},
        {name: "Горячие блюда"},
        {name: "Холодные блюда"},
        {name: "Закуски"},
        {name: "Десерты"},
        {name: "Напитки"},
        {name: "Блюда из рыбы"},
        {name: "Пицца"},
        {name: "Паста"},
        {name: "Бургеры"},
        {name: "Гарниры"},
        {name: "Сендвичи"},
        {name: "Ризотто"},
      ],
      modalAboutCafe: false,
    };
  },
  created() {
    if (localStorage.getItem('basketData') !== null) {
      let tempData = this.$store.state.basketItems
      this.$store.state.foodList.forEach((el, index, array) => {
        tempData.forEach((el2) => {
          if (el.id === el2.id) {
            array[index] = el2
          }
        })
      })
    }

    this.$store.state.foodList.forEach((el, index) => {
      el.price = 100 * (index + 1);
    });
  },
  methods: {
    aboutCafeActive() {
      this.modalAboutCafe
          ? (this.modalAboutCafe = false)
          : (this.modalAboutCafe = true);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.cart-wrapper {
  background-color: $PEARL;
  padding-top: 40px;

  &__container {
    padding-left: 20px;
    padding-right: 20px;
    max-width: $CONTAINER-WIDTH;
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: start;

    &__cafe {
      flex: 1 0 auto;
      max-width: 945px;

      &__cart {
        border: 1px solid $MA-WHITE;
        border-radius: 20px;
        background-color: $WHITE;
        padding: 30px 20px 14px 20px;

        &__top {
          display: flex;
          align-items: start;
          padding-bottom: 30px;
          border-bottom: 1px solid $MA-WHITE;

          &__image {
            width: 258px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            border: 1px solid $MA-WHITE;
          }

          &__description {
            display: flex;
            justify-content: space-between;
            width: 100%;

            &__about {
              &__title {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                color: $MACHINE-GUN-METAL;
                margin-bottom: 20px;
              }

              &__category {
                font-family: "SF";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: $MACHINE-GUN-METAL;
                margin-bottom: 7px;
              }

              &__contact {
                display: flex;
                align-items: center;
                margin-bottom: 35px;

                &__number {
                  display: flex;
                  align-items: center;

                  &__logo {
                    margin-right: 10px;
                  }

                  &__text {
                    font-family: "SF";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 20px;
                    color: $SPACEMAN;
                    margin-right: 31px;
                  }
                }

                &__social {
                  display: flex;
                  align-items: center;

                  &__whatsapp {
                    margin-right: 19px;
                  }
                }
              }

              &__more {
                display: flex;
                align-items: center;

                &__text {
                  font-family: "SF";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 19px;
                  color: $MACHINE-GUN-METAL;
                  cursor: pointer;
                  margin-right: 7px;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            }

            &__rating {
              display: flex;

              &__text {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: $MITHRIL;
                margin-left: 5px;
              }

              &__number {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: $MACHINE-GUN-METAL;
                margin-left: 10px;
              }
            }
          }
        }

        &__bottom {
          &__delivery,
          &__surprise {
            display: flex;
            align-items: center;

            &__logo {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 60px;
              height: 60px;
              border: 1px solid $MA-WHITE;
              border-radius: 50px;
              margin-right: 20px;
              margin-top: 20px;
              margin-bottom: 20px;
            }

            &__text {
              font-family: "SF";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 70px;
              color: $MACHINE-GUN-METAL;
            }
          }
        }
      }

      &__stocks {
        margin-top: 70px;
        margin-bottom: 90px;
        display: grid;
        grid-template-columns: 403px 403px;
        gap: 30px;
      }

      &__sections {
        margin-bottom: 50px;

        &__title {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
          color: $MACHINE-GUN-METAL;
          margin-bottom: 30px;
        }

        &__list {
          display: flex;
          flex-wrap: wrap;
        }
      }

      &__food-list {
        background-color: $PEARL;
        display: grid;
        grid-template-columns: 295px 295px 295px;
        gap: 30px;
        padding-bottom: 290px;
      }
    }

    &__basket-window {
      position: sticky;
      top: 150px;
    }
  }
}

@media (max-width: 1350px) {
  .cart-wrapper__container {
    display: block;
  }

  .cart-wrapper__container__basket {
    display: none;
  }
}

@media (max-width: 990px) {
  .cart-wrapper__container__cafe__food-list {
    grid-template-columns: 295px 295px;
    justify-content: center;
  }

  .cart-wrapper__container__cafe__stocks {
    grid-template-columns: 403px;
    justify-content: center;
  }
}
</style>
