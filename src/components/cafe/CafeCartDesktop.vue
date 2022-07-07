<template>

  <div class="cart-wrapper">
    <div class="cart-wrapper__container">
      <div class="cart-wrapper__container__cafe">
        <div class="cart-wrapper__container__cafe__cart">
          <div class="cart-wrapper__container__cafe__cart__top">
            <div class="cart-wrapper__container__cafe__cart__top__image">
              <img src="@/assets/images/cafe-cart-desktop.png" alt="#">
            </div>
            <div class="cart-wrapper__container__cafe__cart__top__description">
              <div class="cart-wrapper__container__cafe__cart__top__description__about"> 
                <div class="cart-wrapper__container__cafe__cart__top__description__about__title">
                  Кафе “Лимончелло”
                </div>
                <div class="cart-wrapper__container__cafe__cart__top__description__about__category">
                  Европейская, Кавказская, Японская кухня, Детское меню, Фаст-Фуд
                </div>
                <div class="cart-wrapper__container__cafe__cart__top__description__about__contact">
                  <div class="cart-wrapper__container__cafe__cart__top__description__about__contact__number">
                    <div class="cart-wrapper__container__cafe__cart__top__description__about__contact__number__logo">
                      <svg height="15" width="15">
                        <use xlink:href="@/assets/images/icons.svg#cafe-cart-number"></use>
                      </svg>
                    </div>
                    <div class="cart-wrapper__container__cafe__cart__top__description__about__contact__number__text">
                      +790 000 000 00
                    </div>
                  </div>
                  <div class="cart-wrapper__container__cafe__cart__top__description__about__contact__social">
                    <div class="cart-wrapper__container__cafe__cart__top__description__about__contact__social__whatsapp">
                      <svg height="30" width="30">
                        <use xlink:href="@/assets/images/icons.svg#cafe-cart-whatsapp"></use>
                      </svg>
                    </div>
                    <div class="cart-wrapper__container__cafe__cart__top__description__about__contact__social__telegram">
                      <svg height="30" width="30">
                        <use xlink:href="@/assets/images/icons.svg#cafe-cart-telegram"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="cart-wrapper__container__cafe__cart__top__description__about__more">
                  <div class="cart-wrapper__container__cafe__cart__top__description__about__more__text">
                    Подробнее
                  </div>
                  <div class="cart-wrapper__container__cafe__cart__top__description__about__more__logo">
                    <svg height="10" width="6">
                      <use xlink:href="@/assets/images/icons.svg#cafe-cart-arrow"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="cart-wrapper__container__cafe__cart__top__description__rating">
                <div class="cart-wrapper__container__cafe__cart__top__description__rating__logo">
                  <svg height="15" width="15">
                    <use xlink:href="@/assets/images/icons.svg#cafe-cart-star"></use>
                  </svg>
                </div>
                <div class="cart-wrapper__container__cafe__cart__top__description__rating__text">
                  Рейтинг:
                </div>
                <div class="cart-wrapper__container__cafe__cart__top__description__rating__number">
                  4,7
                </div>
              </div>
            </div>
          </div>
          <div class="cart-wrapper__container__cafe__cart__bottom">
            <div class="cart-wrapper__container__cafe__cart__bottom__delivery">
              <div class="cart-wrapper__container__cafe__cart__bottom__delivery__logo">
                <svg height="20" width="20">
                  <use xlink:href="@/assets/images/icons.svg#cafe-cart-delivery"></use>
                </svg>
              </div>
              <div class="cart-wrapper__container__cafe__cart__bottom__delivery__text">
                Бесплатная доставка при заказе от 1000 ₽
              </div>
            </div>
            <div class="cart-wrapper__container__cafe__cart__bottom__surprise">
              <div class="cart-wrapper__container__cafe__cart__bottom__surprise__logo">
                <svg height="20" width="20">
                  <use xlink:href="@/assets/images/icons.svg#cafe-cart-surprise"></use>
                </svg>
              </div>
              <div class="cart-wrapper__container__cafe__cart__bottom__surprise__text">
                Подарок “Чизбургер” при заказе от 1000 ₽
              </div>
            </div>
          </div>
        </div>
        <div class="cart-wrapper__container__cafe__stocks">

        </div>
      </div>
      <div class="cart-wrapper__container__basket">
        <div class="cart-wrapper__container__basket__header">
          <div class="cart-wrapper__container__basket__header__title">
            Корзина
          </div>
          <div class="cart-wrapper__container__basket__header__clear">
            Очистить
          </div>
        </div>
        <div class="cart-wrapper__container__basket__shop">
          <div class="cart-wrapper__container__basket__shop__left">
            <div class="cart-wrapper__container__basket__shop__left__type">
              Магазин
            </div>
            <div class="cart-wrapper__container__basket__shop__left__name">
              Кафе “Лимончелло”
            </div>
          </div>
          <div class="cart-wrapper__container__basket__shop__right">
            <img class="cart-wrapper__container__basket__shop__right__image" src="@/assets/images/cafe-cart-desktop.png" alt="#">
          </div>
        </div>
        <div class="cart-wrapper__container__basket__shop-product">
          <div class="cart-wrapper__container__basket__shop-product__top">
            <div class="cart-wrapper__container__basket__shop-product__top__about">
              <img class="cart-wrapper__container__basket__shop-product__top__about__image" src="@/assets/images/basket-image.png" alt="#">
              <div class="cart-wrapper__container__basket__shop-product__top__about__title">
                Сырное ассорти
              </div>
            </div>
            <div class="cart-wrapper__container__basket__shop-product__top__close">
              <svg height="15" width="15">
                <use xlink:href="@/assets/images/icons.svg#cafe-cart-close"></use>
              </svg>
            </div>
          </div>
          <div class="cart-wrapper__container__basket__shop-product__bottom">
            <div class="cart-wrapper__container__basket__shop-product__bottom__count">
              <div class="cart-wrapper__container__basket__shop-product__bottom__count__plus">
                <svg height="2" width="12">
                  <use xlink:href="@/assets/images/icons.svg#cafe-cart-minus"></use>
                </svg>
              </div>
              <div class="cart-wrapper__container__basket__shop-product__bottom__count__counter">
                1000
              </div>
              <div class="cart-wrapper__container__basket__shop-product__bottom__count__minus">
                <svg height="2" width="12">
                  <use xlink:href="@/assets/images/icons.svg#cafe-cart-minus"></use>
                </svg>
              </div>
            </div>
            <div class="cart-wrapper__container__basket__shop-product__bottom__price">
              790 ₽ 
            </div>
          </div>
        </div>
        <div class="cart-wrapper__container__basket__delivery">
          <div class="cart-wrapper__container__basket__delivery__type">
            Доставка
          </div>
          <div class="cart-wrapper__container__basket__delivery__price">
            Бесплатно
          </div>
        </div>
        <div class="cart-wrapper__container__basket__total">
          <div class="cart-wrapper__container__basket__total__title">
            ИТОГО:
          </div>
          <div class="cart-wrapper__container__basket__total__price">
            330 ₽ 
          </div>
        </div>
        <div class="cart-wrapper__container__basket__button">
          Оформить заказ
        </div>
      </div>
    </div>
  </div>

</template>

<script>



</script>

<style scoped lang="scss">

@import "@/assets/styles.scss";

.cart-wrapper {
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
      border: 1px solid $MA-WHITE;
      border-radius: 20px;
      flex: 1 0 auto;
      padding: 30px 20px 14px 20px;
      background-color: $WHITE;

      &__cart {
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
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                color: $MACHINE-GUN-METAL;
                margin-bottom: 20px;
              }

              &__category {
                font-family: 'SF';
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
                  align-items: center,;
                  &__logo {
                    margin-right: 10px;
                  }

                  &__text {
                    font-family: 'SF';
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
                  font-family: 'SF';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 19px;
                  color: $MACHINE-GUN-METAL;

                  margin-right: 7px;
                }
              }
            }

            &__rating {
              display: flex;

              &__text {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: $MITHRIL;
                margin-left: 5px;
              }

              &__number {
                font-family: 'Montserrat';
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
          &__delivery, &__surprise {
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
              font-family: 'SF';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 70px;
              color: $MACHINE-GUN-METAL;
            }
          }
        }
      }
    }

    &__basket {
      border: 1px solid $MA-WHITE;
      border-radius: 20px;
      width: 292px;
      background-color: $WHITE;
      padding: 50px 20px 40px 20px;
      margin-left: 30px;
      flex-shrink: 0;

      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__title {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          color: $MACHINE-GUN-METAL;
        }

        &__clear {
          font-family: 'SF';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          text-decoration-line: underline;
          color: $ORANGE-SODA;
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
            font-family: 'SF';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: $SPACEMAN;
            margin-bottom: 6px;
          }

          &__name {
            font-family: 'SF';
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

          &__about {
            display: flex;
            align-items: center;

            &__title {
              font-family: 'SF';
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
              font-family: 'SF';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              color: $BLACK;
            }

            &__plus, &__minus {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 26px;
              height: 26px;
              border: 1px solid $SPACEMAN;
              border-radius: 50%;
            }
          }

          &__price {
            font-family: 'Montserrat';
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
          font-family: 'SF';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: $MACHINE-GUN-METAL;
        }

        &__price {
          font-family: 'SF';
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
          font-family: 'SF';
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          color: $MACHINE-GUN-METAL;

        }

        &__price {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: $MACHINE-GUN-METAL;
        }
      }

      &__button {
        background: $SPACEMAN;
        border-radius: 50px;
        padding: 15px;
        text-align: center;
        
        font-family: 'SF';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: $WHITE;
      }
    }
  }
}

</style>