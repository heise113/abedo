<template>
  <div class="mobile-item-block" :style="{ backgroundImage: `url(https://abedo.ru${ category.image.original})` }">
    <div class="mobile-item-block__grayblock">
      
    </div>
    <div class="mobile-item-block__text">
      {{ category.name }}
    </div>
  </div>

  <div class="desktop-item-block">
    <img :src='`https://abedo.ru${category.image.resized}`' alt="" class="desktop-item-block__icon">
    <div class="desktop-item-block__text">
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
    background-repeat: no-repeat;
    background-size: 100%;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    padding: 21px 25px 14px 13px;
    border-radius: 10px;

    &__grayblock {
      width: 30px;
      height: 100%;
      color: #212121;
    }

    &__text {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #FFFFFF;
      word-wrap: break-word;
    }
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

    &__text {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #212121;
    }

    &__icon {
      height: 42px;
      width: 42px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
}


</style>