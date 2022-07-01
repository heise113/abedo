<template>
  <div class="wrapper">
    <div class="wrapper__container">
      <span class="wrapper__container__text">Назад</span>
    </div>
  </div>
</template>

<script>



</script>

<style scoped lang="scss">

@import '@/assets/styles.scss';

.wrapper {
  padding: 20px;
  background-color: $WHITE;

  &__container {
    &__text {
      font-weight: 600;
      font-size: 20px;
      line-height: 20px;
      color: $SPACEMAN;
    }
  }
}

</style>