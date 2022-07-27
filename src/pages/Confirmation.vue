<template>
  <div class="wrapper">
    <div class="wrapper__header">
      <Header/>
    </div>
    <div class="wrapper__content">
      <div class="wrapper__content__container">
        <div class="wrapper__content__container__title">
          Подтверждение
        </div>
        <form action="" class="wrapper__content__container__form">
          <div class="wrapper__content__container__form__title">
            Звонок
          </div>
          <div class="wrapper__content__container__form__text">
            Для верификации профиля нужно подтвердить номер телефона. После нажатия на кнопку «Позвонить» к вам поступит звонок. Прослушайте его и введите 4 названных символа в соответствующее поле.
          </div>
          <div class="wrapper__content__container__form__button">
            Позвонить
          </div>
        </form>
      </div>
    </div>
    <div class="wrapper__footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Settings.vue";
import Footer from "@/components/footer/Settings.vue";

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";


.wrapper {
  height: 100%;
  background-color: $PEARL;

  display: flex;
  flex-direction: column;

  &__header {
    position: sticky;
    top: 0;
    z-index: 5;
  }

  &__content {
    flex: 1 0 auto;
    padding: 100px 10px;

    &__container {
      max-width: $CONTAINER-WIDTH;
      width: 100%;
      margin: 0 auto;
    }
  }

  &__footer {
    flex: 0 0 auto;
  }
}
</style>
