<template>
  <div class="stocks-wrapper">
    <div class="stocks-wrapper__container">
      <StocksSliderDesktop/>
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
      </swiper> -->
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import all styles
import "swiper/css/bundle";

import StocksSliderDesktop from "@/components/stocks/slider/Desktop.vue"

export default {
  components: {
    Swiper,
    SwiperSlide,
    StocksSliderDesktop,
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
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

.stocks-wrapper {
  margin-top: 70px;

  &__container {
    max-width: 1270px;
    width: 100%;
    margin: 0 auto;
  }
}

.swiper {
  border-radius: 20px;
}

.swiper-slide {
  padding: 15px;
  background-color: red;
}
</style>
