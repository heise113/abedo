<template>
  
<div class="wrapper">
  <div class="wrapper__header">
    <Header/>
  </div>
  <div class="wrapper__content">
    <CafeCart/>
  </div>
  <div class="wrapper__footer">
    <Footer/>
  </div>
</div>

</template>

<script>

import Header from "@/components/header/Settings.vue"
import CafeCart from "@/components/cafe/cafe-cart/Settings.vue"
import Footer from "@/components/footer/Settings.vue"

export default {
  components: {
    Header,
    CafeCart,
    Footer,
  }
}

</script>

<style scoped lang="scss">

@import "@/assets/styles/styles.scss";

.wrapper {
  background-color: $PEARL;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    position: sticky;
    top: 0;
    z-index: 5;
  }

  &__content {
    flex: 1 0 auto;
  }

  &__footer {
    flex: 0 0 auto;
  }
}

</style>