<template>

<div @click="offModal" class="modal-wrapper">
  <div @click="stop" class="modal-wrapper__content">
    <svg @click="offModal" class="modal-wrapper__content__close" height="15" width="15">
      <use xlink:href="@/assets/images/icons.svg#cafe-cart-close"></use>
    </svg>
    <div class="modal-wrapper__content__title">
      Тестовое заведение
    </div>
    <div class="modal-wrapper__content__requisites">
      Реквизиты:
    </div>
  </div>
</div>

</template>

<script>

export default {
  methods: {
    offModal() {
      this.$emit('offModal')
    },
    stop(event) {
      event.stopPropagation()
    }
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 50;
  background-color: rgba(92,103,132,.9);

  &__content {
    position: relative;
    max-width: 1028px;
    width: 100%;
    background-color: $WHITE;
    padding: 60px;
    margin: 150px auto;

    &__close {
      position: absolute;
      top: 30px;
      right: 30px;
      cursor: pointer;
    }

    &__title {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      text-align: left;
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 30px;
    }

    &__requisites {
      padding: 50px;
      border: 1px solid #eef2ff;
      font-family: "Montserrat",serif;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 17px;
      color: #878787;
    }
  }
}

</style>