<template>
  <div class="wrapper">
    <div class="wrapper__header">
      <Header/>
    </div>
    <div class="wrapper__content">
      <div class="wrapper__content__container">
        <h1 class="wrapper__content__container__title">
          Подтверждение
        </h1>

        <form @submit.prevent="call" class="wrapper__content__container__form">
          <h2 class="wrapper__content__container__form__title">
            Звонок
          </h2>
          <p class="wrapper__content__container__form__text">
            Для верификации профиля нужно подтвердить номер телефона. После нажатия на кнопку «Позвонить» к вам поступит
            звонок. Прослушайте его и введите 4 названных символа в соответствующее поле.
          </p>
          <button class="wrapper__content__container__form__button">
            Позвонить
          </button>
        </form>

        <form @submit.prevent="sendCode" v-if="active_confirm" class="wrapper__content__container__form" style="margin-top: 30px;">
          <h2 class="wrapper__content__container__form__title">
            Подтверждение
          </h2>
          <p class="wrapper__content__container__form__text">
            Код подтверждения
          </p>
          <input
              v-model="code"
              type="number"
              required
              class="wrapper__content__container__form__input"
              placeholder="Введите код"
          />
          <button class="wrapper__content__container__form__button" @click="sendCode">
            Отправить
          </button>
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

import axios from "axios"

export default {
  components: {
    Header,
    Footer,
  },
  created() {
    this.$store.state.user.phone === null || this.$store.state.user.authorized === true ? this.$router.push('/') : null
  },
  data() {
    return {
      active_confirm: false,
      code: null,
    }
  },
  methods: {
    async call() {
      await axios.post('https://admin.abedo.ru/api/confirm/phone', {
        phone: this.$store.state.user.phone
      })
          .catch((error) => {
            console.log(`запрос завершился ошибкой ${error.response.data.errors.phone[0]}`)
          })
          .then(() => {
            this.active_confirm = true
          })
    },
    async sendCode() {
      await axios.post('https://admin.abedo.ru/api/confirm/phone/verify', {
        code: this.code,
        phone: this.$store.state.user.phone,
      })
          .then(() => {
            console.log('Регистрация прошла успешна!!!')
          })
          .catch((error) => {
            console.log(`запрос завершился ошибкой ${error.response.data.errors.phone[0]}`)
          })
    }
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

      &__title {
        margin-bottom: 70px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        text-align: left;
        font-size: 32px;
        line-height: 39px;
        color: #212121;
      }

      &__form {
        border-radius: 20px;
        background-color: #fff;
        padding: 20px;
        width: 100%;
        max-width: 450px;

        &__title {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          text-align: left;
          font-size: 24px;
          line-height: 29px;
          color: #212121;
        }

        &__text {
          font-size: 16px;
          color: #212121;
          font-family: "Montserrat";
          margin: 20px 0;
        }

        &__input {
          font-family: "SF";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          border: none;
          outline: none;
          height: 50px;
          border: 1px solid #eef2ff;
          width: 100%;
          border-radius: 90px;
          padding-left: 10px;
          padding-right: 10px;

          margin-bottom: 20px;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }

        &__button {
          width: 100%;
          max-width: 200px;
          border-radius: 50px;
          background-color: #eef2ff;
          opacity: .8;
          border: none;
          height: 50px;
          cursor: pointer;
          transition-duration: 0.3s;

          color: $SPACEMAN;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 17px;
          padding: 0 4px;
          border: 1px solid $SPACEMAN;
          background-color: $WHITE;

          &:hover {
            transition-duration: 0.3s;
            background-color: $SPACEMAN;
            color: $WHITE;
          }
        }
      }
    }
  }

  &__footer {
    flex: 0 0 auto;
  }
}
</style>
