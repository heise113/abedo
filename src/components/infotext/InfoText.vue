<template>
  <div class="info-text">
    <div class="info-text__container">
      <p class="info-text__container__top">
        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
      </p>
      <p class="info-text__container__bottom">
        По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
      </p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">

@import '@/assets/styles.scss';

.info-text {
  background-color: $MA-WHITE;
  
  &__container {
    padding-left: 20px;
    padding-right: 20px;
    max-width: $CONTAINER-WIDTH;
    width: 100%;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 80px;
    &__top, &__bottom {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: $MACHINE-GUN-METAL;
    }
  }
}


</style>
