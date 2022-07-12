<template>
  <div class="wrapper">
    <div class="wrapper__header">
      <Header/>
    </div>
    <div class="wrapper__content">
      <Categories/>
      <Stocks/>
      <Cafe/>
      <InfoText/>
    </div>
    <div class="wrapper__footer">
      <Footer/>
    </div>
  </div>
</template>

<script>

import Header from '@/components/header/Settings'
import Categories from '@/components/categories/main-page/Settings'
import Stocks from "@/components/stocks/main-page/Settings.vue"
import Cafe from "@/components/cafe/main-page/Settings"
import Footer from "@/components/footer/Settings"
import InfoText from "@/components/infotext/Settings.vue"

export default {
  components: {
    Header,
    Categories,
    Stocks,
    Cafe,
    Footer,
    InfoText,
  }
}

</script>

<style lang="scss" scoped>

@import "@/assets/styles/styles.scss";

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $PEARL;

  &__header {
    position: sticky;
    top: 0;
    z-index: 5;
  }

  &__content {
    background-color: $PEARL;
    flex: 1 0 auto;
  }

  &__footer {
    flex: 0 0 auto;
  }
}



</style>