<template>
  <div class="wrapper-stocks">
    <div class="wrapper-stocks__header">
      <Header/>
    </div>
    <div class="wrapper-stocks__content">
      <StocksStocksItem/>
    </div>
    <div class="wrapper-stocks__footer">
      <Footer/>
    </div>
  </div>
</template>

<script>

import Header from "@/components/headers/HeaderMainItem.vue"
import Footer from "@/components/footer/Item.vue"
import StocksStocksItem from "@/components/stocks/StocksStocksItem.vue"

export default {
  components: {
    Header,
    Footer,
    StocksStocksItem,
  }
}

</script>

<style scoped lang="scss">

@import "@/assets/styles.scss";

  .wrapper-stocks {
    height: 100%;
    background-color: $PEARL;
    // border: 4px solid red;

    display: flex;
    flex-direction: column;

    &__content {
      flex: 1 0 auto;
    }

    &__footer {
      flex: 0 0 auto;
    }
  }
</style>
