<template>
  <div class="wrapper">
    <div class="wrapper__header">
      <Header/>
    </div>
    <div class="wrapper__content">
      <div class="wrapper__content__container">
        <form class="wrapper__content__container__form">
          <h2 class="wrapper__content__container__form__title">
            Звонок
          </h2>
          <p class="wrapper__content__container__form__text">
            Телефон
          </p>

          <div class="wrapper__content__container__form__number">
            <div
                class="wrapper__content__container__form__number__hard-number"
            >
              +7
            </div>
            <input
                v-model="phone"
                minlength="10"
                maxlength="10"
                type="text"
                required
                class="wrapper__content__container__form__number__input"
                placeholder="(000) 000 000 00"
            />
          </div>

          <button @click="setPhone" class="wrapper__content__container__form__button">
            Позвонить
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
  data() {
    return {
      phone: null,
    }
  },
  methods: {
    setPhone() {
      this.$store.commit('setPhone', this.phone)
      this.call()
    },
    async call() {
      await axios.post('https://admin.abedo.ru/api/restore/password', {
        phone: this.$store.state.user.phone
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

        &__number {
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          border: 1px solid #eef2ff;
          border-radius: 90px;
          height: 50px;
          padding: 0 10px;

          &__hard-number {
            color: #212121;
            font-family: "Montserrat";
            margin-right: 8px;
          }

          &__input {
            height: 100%;
            font-family: "SF";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            border: none;
            outline: none;
            width: 100%;
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
