<template>
  <div class="mobile-item-block">
    <img class="mobile-item-block__background" :src='`https://abedo.ru${category.image.original}`' alt="#">
    <div class="mobile-item-block__grayblock"></div>
    <div class="mobile-item-block__shadow"></div>
    <div class="mobile-item-block__text">
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


.mobile-item-block {
  font-family: 'SF';
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
  cursor: pointer;

  .mobile-item-block__grayblock {
    transition-duration: 0.3s;
    transform: scale(1, 1);
  }

  &:hover {
    .mobile-item-block__grayblock {
      transition-duration: 0.3s;
      transform: scale(10, 1);
    }
  }

  @keyframes increase {
    0% {
      width: 20%;
    }
    100% {
      width: 100%;
    }
  }

  &__background {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    width: 80%;
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

</style>