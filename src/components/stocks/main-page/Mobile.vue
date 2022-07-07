<template>
  <div class="stocks-mobile">
    <div class="stocks-mobile__header">
      <div class="stocks-mobile__header__text">Акции</div>
      <div class="stocks-mobile__header__all-stocks">
        <div class="stocks-mobile__header__all-stocks__text">Все акции</div>
        <svg height="10" width="6">
          <use xlink:href="@/assets/images/icons.svg#arrow"></use>
        </svg>
      </div>
    </div>

    <StocksSliderMobile/>
    <!-- <swiper
      class=".swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>slide 1</swiper-slide>
      <swiper-slide>slide 2</swiper-slide>
      <swiper-slide>slide 3</swiper-slide>
      ...
    </swiper> -->
  </div>
</template>

<script>
// import Swiper core and required modules
import { Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import all styles
import "swiper/css/bundle";

import StocksSliderMobile from "@/components/stocks/slider/Mobile.vue"

export default {
  components: {
    Swiper,
    SwiperSlide,
    StocksSliderMobile,
  },
  setup() {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>

@import "@/assets/styles.scss";

.stocks-mobile {
  padding-left: 20px;
  padding-right: 20px;

  &__header {
    display: flex;
    justify-content: space-between;

    &__text {
      font-family: 'SF';
      font-size: 20px;
      line-height: 20px;
      font-weight: 700;
      color: #454545;
    }

    &__all-stocks {
      display: flex;
      align-items: center;

      &__text {
        font-family: 'SF';
        margin-right: 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #454545;
      }
    }
  }
}

.swiper {
  margin-top: 20px;
  border-radius: 20px;
}

.swiper-slide {
  padding: 15px;
  background-color: red;
}
</style>
