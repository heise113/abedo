<template>
  <h1> {{ category.title }} </h1>
  <img :src="`${category.images}`" alt="#">
  <!-- <img :src="category.images" alt=""> -->
  <!-- <img src="../assets/images/categories_cafe.png" alt="#"> -->
  <!-- <img src="@/assets/images/categories_cafe.png" alt="#"> -->




</template>

<script>

  export default {
    props: {
      category: {
        type: Object
      }
    }
  }

</script>

<style lang="scss" scoped>
  


</style>