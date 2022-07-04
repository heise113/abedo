<template>
  <div class="item-wrapper">
    <div class="item-wrapper__left">
<!--      <div class="item-wrapper__left__logo">-->
<!--        <img :src='`https://abedo.ru${category.image.resized}`' alt="#">-->
<!--      </div>-->
      <div class="item-wrapper__left__logo">
        <img src="@/assets/images/category-logo.png" alt="">
      </div>
      <div class="item-wrapper__left__name">
        {{ category.name }}
      </div>
    </div>
    <div class="item-wrapper__right">
      <svg height="10" width="6">
          <use xlink:href="@/assets/images/icons.svg#category-arrow"></use>
      </svg>
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

<style scoped lang="scss">

@import '@/assets/variables.scss';

.item-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &__left {
    display: flex;
    align-items: center;

    &__logo {
      flex: 0 0 auto;
      margin-right: 10px;
      width: 30px;
      height: 30px;
      background-color: gray;
      border-radius: 50%;
    }

    &__name {
      margin-right: 10px;
    }

  }

  &__right {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}


</style>