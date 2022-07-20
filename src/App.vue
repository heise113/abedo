<template>
  <router-view></router-view>
</template>

<script>

export default {
  created() {
    this.$store.commit('getLocalStorage')
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
