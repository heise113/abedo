<template>
  <Header/>
  <main class="wrapper">
    <Categories/>
  </main>
</template>

<script>

  import Header from '@/components/Header'
  import Categories from '@/components/Categories.vue'

  export default {
    components: {
      Header,
      Categories,
    }
  }

</script>

<style lang="scss" scoped>

  .wrapper {
    padding-left: 20px;
    padding-right: 20px;
    background-color: #E5E5E5;
  }

</style>