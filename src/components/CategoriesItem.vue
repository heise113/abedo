<template>
  <!-- <div class="mobile-item-block" :style="{ backgroundImage: `url(https://abedo.ru${ category.image.original})` }"> -->
  <div class="mobile-item-block">
    <img class="mobile-item-block__background" :src='`https://abedo.ru${category.image.original}`' alt="#">
    <div class="mobile-item-block__grayblock"></div>
    <div class="mobile-item-block__shadow"></div>
    <div class="mobile-item-block__text">
      {{ category.name }}
    </div>
  </div>

  <div class="desktop-item-block">
    <img :src='`https://abedo.ru${category.image.resized}`' alt="#" class="desktop-item-block__icon">
    <div class="desktop-item-block__text">
      {{ category.name }}
    </div>
  </div>

</template>

<script>

export default {
  props: {
    category: {
      type: Object
    }
  }
}

</script>

<style lang="scss" scoped>

@import '@/assets/variables.scss';

@media (max-width: $MOBILE) {
  .desktop-item-block {
    display: none;
  }

  .mobile-item-block {
    position: relative;
    min-width: 160px;
    height: 62px;
    background-repeat: no-repeat;
    background-size: 100%;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    padding: 21px 25px 14px 13px;
    border-radius: 10px;
    overflow: hidden;
    transition-duration: 0.3s;

    &:hover {
      .mobile-item-block__grayblock {
        width: 100%;
      }
    }

    &__background {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 0;
      width:80%;
      height: 100%;
      object-fit: cover;
    }

    &__grayblock {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 20%;
      height: 100%;
      background-color: $SPACEMAN;
    }

    &__text {
      position: absolute;
      left: 15px;
      bottom: 15px;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: $WHITE;
      word-wrap: break-word;
      z-index: 3;
    }

    &__shadow {
      position: absolute;
      z-index: 1;
      background: linear-gradient(360deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%);
      right: 0;
      top: 0;
      width: 80%;
      height: 100%;
    }
  }
}

@media(min-width: $MOBILE) {
  .mobile-item-block {
    display: none;
  }

  .desktop-item-block {
    display: flex;
    padding: 4px 4px 4px 4px;
    border: 1px solid $MITHRIL;
    border-radius: 30px;
    align-items: center;
    cursor: pointer;
    transition-duration: 0.5s;

    &:hover {
      background-color: $PHYSALIS;

      .desktop-item-block__text {
        color: $WHITE;
      }
    }

    &__text {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: $LEAD;
    }

    &__icon {
      height: 42px;
      width: 42px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
}


</style>