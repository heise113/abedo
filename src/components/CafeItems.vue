<template>
  <div class="item-mobile">
    <div class="item-mobile__left-side">
      <svg height="30" width="30">
        <use xlink:href="@/assets/images/icons.svg#cafe-heart"></use>
      </svg>
      <div class="item-mobile__left-side__description">
        <div class="item-mobile__left-side__description__name">
          {{ cafeItem.name }}
        </div>
        <div class="item-mobile__left-side__description__cafe-description">
          {{ cafeItem.cafeDescription }}
        </div>
      </div>
    </div>
    <div class="item-mobile__right-side">
      <svg height="15" width="15">
        <use xlink:href="@/assets/images/icons.svg#cafe-arrow"></use>
      </svg>
    </div>
  </div>

  <div class="item-desktop">
    <div class="item-desktop__image">
      <img
        v-if="cafeItem.image.length"
        class="item-desktop__image__background"
        :src="`https://abedo.ru${cafeItem.image[0].original}`"
        alt="#"
      />
      <div class="item-desktop__image__shadow"></div>
      <img
        v-if="cafeItem.logo"
        class="item-desktop__image__logo"
        :src="`https://abedo.ru${cafeItem.logo.original}`"
        alt=""
      />
      <svg class="item-desktop__image__likes" height="23" width="23">
        <use xlink:href="@/assets/images/icons.svg#likes-cafe-item"></use>
      </svg>
    </div>
    <div class="item-desktop__text">
      <div class="item-desktop__text__title">
        {{ cafeItem.name }}
      </div>
      <div class="item-desktop__text__description">
        {{ cafeItem.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cafeItem: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 769px) {
  .item-desktop {
    display: none;
  }

  .item-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px;
    background: #ffffff;
    border: 1px solid #dde2f2;
    border-radius: 10px;
    margin-bottom: 15px;

    &__left-side {
      display: flex;
      align-items: center;

      &__description {
        margin-left: 14px;

        &__cafe-name {
          font-weight: 400;
          font-size: 15px;
          line-height: 18px;
          color: #212121;
          margin-bottom: 4px;
        }

        &__cafe-description {
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;
          color: #5c6784;
        }
      }
    }
  }
}

@media (min-width: 769px) {
  .item-mobile {
    display: none;
  }

  .item-desktop {
    &__image {
      position: relative;
      height: 230px;
      border-radius: 20px;
      overflow: hidden;

      &__background {
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &__shadow {
        z-index: 1;
        position: absolute;
        background: linear-gradient(
          360deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }

      &__logo {
        position: absolute;
        z-index: 2;
        width: 120px;
        height: 60px;
        left: 10px;
        bottom: 10px;
        background-color: #fff;
        border-radius: 10px;
        padding: 5px;
      }

      &__likes {
        position: absolute;
        z-index: 2;
        border: 2px solid white;
        border-radius: 50%;
        right: 10px;
        bottom: 10px;
        padding: 10px;
        width: 45px;
        height: 45px;
      }
    }
    &__text {
      margin-top: 15px;

      &__title {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #212121;
      }

      &__description {
        margin-top: 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #454545;
      }
    }
  }
}
</style>
