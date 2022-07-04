<template>
  <div class="wrapper">
    <Header/>
    <Categories/>
      <!-- <Stocks/> -->
    <Cafe/>
    <InfoText/>
    <Footer/>
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
}


.content {
  padding-left: 20px;
  padding-right: 20px;
}


</style>