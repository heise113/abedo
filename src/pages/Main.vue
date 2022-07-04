<template>
  <div class="wrapper">
    <div class="wrapper__header">
      <Header/>
    </div>
    <div class="wrapper__content">
      <Categories/>
      <!-- <Stocks/> -->
      <Cafe/>
      <InfoText/>
    </div>
    <div class="wrapper__footer">
      <Footer/>
    </div>
  </div>
</template>

<script>

import Header from '@/components/headers/HeaderMainItem'
import Categories from '@/components/categories/Item'
import Stocks from "@/components/stocks/StocksMain.vue"
import Cafe from "@/components/cafe/Item"
import Footer from "@/components/footer/Item"
import InfoText from "@/components/infotext/Item.vue"

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

@import "@/assets/styles.scss";

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $PEARL;

  &__content {
    background-color: $PEARL;
    flex: 1 0 auto;
  }

  &__footer {
    flex: 0 0 auto;
  }
}



</style>