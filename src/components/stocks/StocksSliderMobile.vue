<template>
  <div class="slider-wrapper">
    <swiper
      class="slider-wrapper__swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="slider-wrapper__swiper__slide slider-wrapper__swiper__slide-1">

        <div class="slider-wrapper__swiper__slide-1__logo">
          <img src="@/assets/images/stocks-logo.png" alt="#" />
        </div>
        <span class="slider-wrapper__swiper__slide-1__title">
          Кафе “Лимончелло”
        </span>
        <span class="slider-wrapper__swiper__slide-1__description">
          Получайте 1% бонусами и скидку до 99%
        </span>

      </swiper-slide>

      <swiper-slide class="slider-wrapper__swiper__slide slider-wrapper__swiper__slide-2">

        <div class="slider-wrapper__swiper__slide-2__logo">
          <img src="@/assets/images/stocks-logo.png" alt="#" />
        </div>
        <span class="slider-wrapper__swiper__slide-2__title">
          Кафе “Лимончелло”
        </span>
        <span class="slider-wrapper__swiper__slide-2__description">
          Получайте 1% бонусами и скидку до 99%
        </span>
        
      </swiper-slide>

      <swiper-slide class="slider-wrapper__swiper__slide slider-wrapper__swiper__slide-3">

        <div class="slider-wrapper__swiper__slide-3__logo">
          <img src="@/assets/images/stocks-logo.png" alt="#" />
        </div>
        <span class="slider-wrapper__swiper__slide-3__title">
          Кафе “Лимончелло”
        </span>
        <span class="slider-wrapper__swiper__slide-3__description">
          Получайте 1% бонусами и скидку до 99%
        </span>

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

<style lang="scss" scoped>
@import "@/assets/styles.scss";

.slider-wrapper {
  overflow: hidden;
  margin-top: 20px;
  &__swiper {
    &__slide {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      height: 172px;
      cursor: pointer;
    }

    &__slide-1 {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          360deg,
          rgba(92, 103, 132, 0.9) 0%,
          rgba(92, 103, 132, 0.9) 100%
        );
        z-index: 2;
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
    }
    &__slide-2 {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          360deg,
          rgba(92, 103, 132, 0.9) 0%,
          rgba(92, 103, 132, 0.9) 100%
        );
        z-index: 2;
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
    }
    &__slide-3 {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          360deg,
          rgba(92, 103, 132, 0.9) 0%,
          rgba(92, 103, 132, 0.9) 100%
        );
        z-index: 2;
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
    }
  }
}

</style>
<style>
.swiper-pagination-bullets{
  transform: translateY(30px);
}
</style>