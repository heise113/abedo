<template>
  
  <div class="slider-wrapper">
    <swiper
      class="slider-wrapper__swiper"
      :modules="modules"
      :slides-per-view="2.5"
      :space-between="7"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="slider-wrapper__swiper__slide">
        <span class="slider-wrapper__swiper__slide__text">Холодные блюда</span>
      </swiper-slide>
      <swiper-slide class="slider-wrapper__swiper__slide">
        <span class="slider-wrapper__swiper__slide__text">Холодные блюда</span>
      </swiper-slide>
      <swiper-slide class="slider-wrapper__swiper__slide">
        <span class="slider-wrapper__swiper__slide__text">Холодные блюда</span>
      </swiper-slide>
      <swiper-slide class="slider-wrapper__swiper__slide">
        <span class="slider-wrapper__swiper__slide__text">Холодные блюда</span>
      </swiper-slide>

    </swiper>
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

<style scoped lang="scss">

@import "@/assets/styles.scss";

.slider-wrapper {
  overflow: hidden;

  &__swiper {
    &__slide {
      background: $SPACEMAN;
      border: 1px solid $SPACEMAN;
      border-radius: 50px;
      padding: 9px 14px;
      text-align: center;

      &__text {
        font-family: 'SF';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $WHITE;
      }
    }
  }
}

</style>