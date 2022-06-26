<template>
  <!--  <img src="@/assets/images/categories_cafe.png" alt="#">-->
  <div class="item-block">
    {{ category.title }}
  </div>

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

.item-block {
  min-width: 160px;
  height: 62px;
  //min-height: 62px;
  //background-image: url(../assets/images/categories_cafe.png);
  //background-repeat: no-repeat;
  //background-size: 100%;
  background-color: black;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: white;
  padding: 21px 25px 14px 13px;
  word-wrap: break-word;
  border-radius: 10px;
  border: 2px solid black;
}

</style>