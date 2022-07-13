<template>
  <div class="item-wrapper">
    <div class="item-wrapper__left">
<!--      <div class="item-wrapper__left__logo">-->
<!--        <img :src='`https://admin.abedo.ru${category.image.resized}`' alt="#">-->
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
<!--  <hr class="line">-->
</template>

<script>

export default {
  props: {
    category: {
      type: Object
    },
    key: {}
  },
}

</script>

<style scoped lang="scss">

@import '@/assets/styles/variables.scss';

.item-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  border-bottom: 1px solid $VAGUELY-VIOLET;



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
      font-family: 'SF';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: $MACHINE-GUN-METAL;
    }

  }

  &__right {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.line {
  border: 1px solid $VAGUELY-VIOLET;
}


</style>