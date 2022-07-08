<template>
  <div class="sb-wrapper" :class="item.backgroundColor">
    <div class="sb-wrapper__logo">
      <img :src="getImgUrl(item.logo)" alt="#" v-if="item.logo" />
    </div>
    <span class="sb-wrapper__title">
      {{ item.title }}
    </span>
    <span class="sb-wrapper__description">
      {{ item.description }}
    </span>
    <img
      :src="getImgUrl(item.backgroundImage)"
      v-if="item.backgroundImage"
      alt="#"
      class="sb-wrapper__background"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    getImgUrl(image) {
      var images = require.context("../../assets/images/", false, /\.png$/);
      return images("./" + image);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";

.sb-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 172px;
  min-width: 403px;
  cursor: pointer;

  &.blue {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $SPACEMAN;
      opacity: 0.9;
      z-index: 2;
    }
  }

  &.red {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $ORANGE-SODA;
      opacity: 0.9;
      z-index: 2;
    }
  }

  &.yellow {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $PHYSALIS;
      opacity: 0.9;
      z-index: 2;
    }    
  }

  &.green {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $BLUISH-GREEN;
      opacity: 0.9;
      z-index: 2;
    }    
  }

  &__title {
    position: absolute;
    left: 140px;
    top: 35px;
    z-index: 3;

    font-family: "Montserrat";
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: $WHITE;
  }

  &__description {
    position: absolute;
    left: 20px;
    bottom: 20px;
    z-index: 3;

    font-family: "Montserrat";
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: $WHITE;
  }

  &__logo {
    padding-left: 15px;
    padding-right: 15px;
    max-width: 100px;
    max-height: 60px;
    background-color: $WHITE;
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 3;
    border-radius: 10px;
  }

  &__background {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
  }
}
</style>
