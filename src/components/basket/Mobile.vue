<template>

  <div class="wrapper-basket">
    <div class="wrapper-basket__header">
      <div class="wrapper-basket__header__title">
        Корзина
      </div>
      <div class="wrapper-basket__header__button">
        Очистить
      </div>
    </div>
    <div class="wrapper-basket__element-list">

    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      elementList: [
        {
          name: 'Улитки escargots по-бургундски в масле замороженные',
          newPrice: '10 345 ₽',
          oldPrice: '10 345 ₽',
          logo: 'qweqweqwe',
        },
        {
          name: 'Улитки escargots по-бургундски в масле замороженные',
          newPrice: '10 345 ₽',
          oldPrice: '10 345 ₽',
          logo: 'qweqweqwe',
        },
        {
          name: 'Улитки escargots по-бургундски в масле замороженные',
          newPrice: '10 345 ₽',
          oldPrice: '10 345 ₽',
          logo: 'qweqweqwe',
        },
      ]
    }
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";


</style>