<template>
  <!-- <Main/> -->
  <!-- <AllCafe/> -->
  <router-view></router-view>
</template>

<script>

import AllCafe from "./pages/AllCafe"
import Main from "./pages/Main"

export default {
  components: {
    Main,
    AllCafe,
  }
}

</script>

<style lang="scss">

html, body{
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
