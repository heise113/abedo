<template>
  <div class="item-desktop" @click="$router.push('/cafe-cart')">
    <div class="item-desktop__image">
      <img
          v-if="cafeItem.image.length"
          class="item-desktop__image__background"
          :src="`https://admin.abedo.ru${cafeItem.image[0].original}`"
          alt="#"
      />
      <img
          v-else
          class="item-desktop__image__background"
          src="@/assets/images/bili.webp" alt="#"
      >
      <div class="item-desktop__image__shadow"></div>
      <img
          v-if="cafeItem.logo"
          class="item-desktop__image__logo"
          :src="`https://admin.abedo.ru${cafeItem.logo.original}`"
          alt=""
      />
      <div class="item-desktop__image__likes" @click="stop">
        <svg class="item-desktop__image__likes__svg" height="23" width="23">
          <use xlink:href="@/assets/images/icons.svg#likes-cafe-item"></use>
        </svg>
      </div>
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
  methods: {
    stop(event) {
      event.stopPropagation()
    }
  }
};
</script>

<style lang="scss" scoped>

@import '@/assets/styles/styles.scss';

.item-desktop {

  cursor: pointer;
  overflow: hidden;

  &__image {
    position: relative;
    height: 230px;
    border-radius: 20px;
    overflow: hidden;

    &:hover {
      .item-desktop__image__background {
        transition-duration: 0.4s;
        transform: scale(1.1, 1.1);
      }
    }


    &__background {
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: fill;
      transition-duration: 0.4s;
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
      transition-duration: 0.4s;

      &:hover {
        background-color: $ORANGE-SODA;
        border-color: $ORANGE-SODA;
        transition-duration: 0.4s;
      }
    }
  }

  &__text {
    margin-top: 15px;

    &__title {
      font-family: 'Montserrat';
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: $LEAD;
    }

    &__description {
      font-family: 'SF';
      margin-top: 10px;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $MACHINE-GUN-METAL;
    }
  }
}

</style>