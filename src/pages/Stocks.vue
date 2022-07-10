<template>
  <div class="wrapper">
    <div class="wrapper__header">
      <Header/>
    </div>
    <div class="wrapper__content">
      <StocksStocksItem/>
    </div>
    <div class="wrapper__footer">
      <Footer/>
    </div>
  </div>
</template>

<script>

import Header from "@/components/header/Settings.vue"
import Footer from "@/components/footer/Settings.vue"
import StocksStocksItem from "@/components/stocks/stocks-page/Settings.vue"

export default {
  components: {
    Header,
    Footer,
    StocksStocksItem,
  }
}

</script>

<style scoped lang="scss">

@import "@/assets/styles/styles.scss";

  .wrapper {
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
