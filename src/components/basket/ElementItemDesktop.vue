<template>

  <!--  <img :src="getImgUrl(element.image)" alt="">-->

  <div class="element-wrapper">
    <div class="element-wrapper__left">
      <div class="element-wrapper__left__product">
        <img :src="getImgUrl(element.image)" alt="#" class="element-wrapper__left__product__image">
        <div class="element-wrapper__left__product__name">
          <span class="element-wrapper__left__product__name__text">
            {{ element.name }}
          </span>
          <span
              class="element-wrapper__left__product__name__add"
              v-for="item in element.add"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
    <div class="element-wrapper__right">
      <div class="element-wrapper__right__one-price" v-if="!element.surprise">
        {{ element.onePrice }}
      </div>

      <div class="element-wrapper__right__count" v-if="!element.surprise">
        <div class="element-wrapper__right__count__minus">
          <svg height="2" width="12">
            <use xlink:href="@/assets/images/icons.svg#cafe-cart-minus"></use>
          </svg>
        </div>
        <div class="element-wrapper__right__count__counter">
          {{ element.count }}
        </div>
        <div class="element-wrapper__right__count__plus">
          <svg height="2" width="12">
            <use xlink:href="@/assets/images/icons.svg#cafe-cart-minus"></use>
          </svg>
        </div>
      </div>
      <div class="element-wrapper__right__more-price" v-if="!element.surprise">
        {{ element.morePrice }}
      </div>
      <div class="element-wrapper__right__surprise" v-if="element.surprise">
        {{ element.surprise }}
      </div>
      <div class="element-wrapper__right__close">
        <svg height="15" width="15">
          <use xlink:href="@/assets/images/icons.svg#cafe-cart-close"></use>
        </svg>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: {
    element: {
      type: Object,
    }
  },
  methods: {
    getImgUrl(image) {
      var images = require.context("../../assets/images/", false, /\.png$/);
      return images("./" + image);
    },
  },
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.element-wrapper {
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #878787;

  &__left {
    width: 55%;

    &__product {
      display: flex;
      align-items: center;

      &__image {
        margin-right: 30px;
      }

      &__name {
        display: flex;
        flex-direction: column;

        & span:last-child {
          margin-bottom: 0;
        }

        &__text {
          font-family: 'SF';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: $MACHINE-GUN-METAL;

          margin-bottom: 15px;
        }

        &__add {
          font-family: 'SF';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 18px;
          color: $MITHRIL;
          margin-bottom: 4px;
        }
      }
    }
  }

  &__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

    &__one-price, &__more-price {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;

      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: $MACHINE-GUN-METAL;
    }

    &__surprise {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: $MACHINE-GUN-METAL;
    }

    &__count {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 146px;

      font-family: 'SF';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: $BLACK;

      &__minus, &__plus {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border: 1px solid $SPACEMAN;
        border-radius: 50%;
      }

      &__counter {
        flex-grow: 1;
        margin-right: 10px;
        margin-left: 10px;
        text-align: center;
      }
    }
  }

}

</style>