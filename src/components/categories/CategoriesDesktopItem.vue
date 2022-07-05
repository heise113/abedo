<template>
  <div class="desktop-item-block">
    <img :src='`https://admin.abedo.ru${category.image.resized}`' alt="#" class="desktop-item-block__icon">
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

@import '@/assets/variables.scss';

.desktop-item-block {
  display: flex;
  padding: 4px 4px 4px 4px;
  border: 1px solid $MITHRIL;
  border-radius: 30px;
  align-items: center;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: $PHYSALIS;

    .desktop-item-block__text {
      color: $WHITE;
    }
  }

  &__text {
    font-family: "SF";
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: $LEAD;
  }

  &__icon {
    height: 42px;
    width: 42px;
    border-radius: 50%;
    margin-right: 15px;
  }
}


</style>