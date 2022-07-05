<template>
  <div class="slider-wrapper">
    <div class="slider-wrapper__container">
      <swiper
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
      </swiper>
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

export default {
  components: {
    Swiper,
    SwiperSlide,
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


</style>
