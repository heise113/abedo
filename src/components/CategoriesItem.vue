<template>
  <div class="mobile-item-block" :style="{ backgroundImage: `url(https://abedo.ru${ category.image.original})` }">
    {{ category.name }}
  </div>

  <div class="desktop-item-block">
    <img :src='`https://abedo.ru${category.image.resized}`' alt="" class="icon">
    <div class="text">
      {{ category.name }}
    </div>
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

@media (max-width: 769px) {
  .desktop-item-block {
    display: none;
  }

  .mobile-item-block {
    min-width: 160px;
    height: 62px;
    //min-height: 62px;
    //background-image: url(../assets/images/categories_cafe.png);
    // background-image: url('`https://abedo.ru${category.image.original}`');
    background-repeat: no-repeat;
    background-size: 100%;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    color: white;
    padding: 21px 25px 14px 13px;
    word-wrap: break-word;
    border-radius: 10px;
    border: 2px solid black;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }
}

@media(min-width: 770px) {
  .mobile-item-block {
    display: none;
  }

  .desktop-item-block {
    display: flex;
    padding: 4px 4px 4px 4px;
    border: 1px solid gray;
    border-radius: 30px;
    align-items: center;
  }

  .icon {
    height: 42px;
    width: 42px;
    border-radius: 50%;
    margin-right: 15px;
  }
}


</style>