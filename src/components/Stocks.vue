<template>

  <div class="stocks">
    <div class="stocks-header">
      <div class="stocks-text">
        Акции
      </div>
      <div class="all-stocks">
        <div class="all-stocks-text">
          Все акции
        </div>
        <svg height="10" width="6">
          <use xlink:href="@/assets/images/icons.svg#arrow"></use>
        </svg>
      </div>
    </div>

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
      ...
    </swiper>

  </div>

</template>

<script>

// import Swiper core and required modules
import {Pagination} from 'swiper';

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import all styles
import 'swiper/css/bundle';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
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

.stocks-header {
  display: flex;
  justify-content: space-between;
}

.swiper {
  margin-top: 20px;
  border-radius: 20px;
}

.swiper-slide {
  padding: 15px;
  background-color: red;
}

.stocks-text {
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #454545;
}

.all-stocks {
  display: flex;
  align-items: center;
}

.all-stocks-text {
  margin-right: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #454545;
}

</style>