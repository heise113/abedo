<template>
  <div class="wrapper">
    <div class="wrapper__header">
      <Header/>
    </div>
    <div class="wrapper__content">
      <div class="wrapper__content__container">
        <div class="wrapper__content__container__title">Регистрация</div>
        <form class="wrapper__content__container__form" @submit.prevent="validateData">
          <div class="wrapper__content__container__form__number-block">
            <label for="phone">
              <div class="wrapper__content__container__form__number-block__text">Телефон</div>
            </label>
            <div class="wrapper__content__container__form__number-block__number">
              <div class="wrapper__content__container__form__number-block__number__hard-number">
                +7
              </div>
              <input
                  v-model="user.phone"
                  id="phone"
                  minlength="10"
                  maxlength="10"
                  type="text"
                  required
                  class="wrapper__content__container__form__number-block__number__input"
                  placeholder="(000) 000 000 00"
              />
            </div>
          </div>

          <div class="wrapper__content__container__form__password-block">
            <label for="password">
              <div class="wrapper__content__container__form__password-block__text">Пароль</div>
            </label>
            <input
                id="password"
                v-model="user.password"
                minlenght="8"
                type="password"
                required
                class="wrapper__content__container__form__password-block__password"
                placeholder="Введите пароль"
            />
          </div>

          <div class="wrapper__content__container__form__password-block">
            <label for="forget-password">
              <div class="wrapper__content__container__form__password-block__text">Повтор пароля</div>
            </label>
            <input
                id="forget-password"
                v-model="user.password_confirmation"
                minlenght="8"
                type="password"
                required
                class="wrapper__content__container__form__password-block__password"
                placeholder="Введите пароль"
            />
          </div>

          <label class="wrapper__content__container__form__agree" for="check">
            <input type="checkbox" id="check" style="display: none" v-model="active">
            <label for="check" class="wrapper__content__container__form__agree__galochka">
              <svg width="18" height="18">
                <use xlink:href="@/assets/images/icons.svg#galochka"></use>
              </svg>
            </label>
            <span class="wrapper__content__container__form__agree__text">
              Принимаю условия использования и политику конфиденциальности
            </span>
          </label>

          <button class="wrapper__content__container__form__button" :disabled="!active">
            Зарегистрироваться
          </button>

          <ValidateMessage v-if="error_message">
            {{ error_message }}
          </ValidateMessage>

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
import ValidateMessage from "@/components/ValidateMessage"

import axios from "axios"

export default {
  components: {
    Header,
    Footer,
    ValidateMessage,
  },
  data() {
    return {
      active: false,
      error_message: null,
      user: {
        phone: null,
        password: null,
        password_confirmation: null,
      }
    }
  },
  methods: {
    validateData() {
      if (this.user.password !== this.user.password_confirmation) {
        this.error_message = 'Пароли не равны!'
        setTimeout(() => {
          this.error_message = null
        }, 3000)
      }
      else if (this.user.password.length < 8 || this.user.password_confirmation.length < 8) {
        this.error_message = 'Пароль должен быть не менее 8 символов!'
        setTimeout(() => {
          this.error_message = null
        }, 3000)
      }
      else {
        this.register()
      }
    },

    async register() {
      await axios.post("https://admin.abedo.ru/api/register", {
        phone: this.user.phone,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation,
      })
          .then(() => {
            console.log("Регистрация прошла успешна")
            this.$store.commit('setPhone', this.user.phone)
            this.$router.push('/confirmation')
          })
          .catch((error) => {
            this.error_message = error.response.data.errors.phone[0]
            setTimeout(() => {
              this.error_message = null
            }, 3000)
          });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

svg path {
  all: inherit;
}

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
        color: #212121;
        font-size: 32px;
        line-height: 39px;
      }

      &__form {
        border-radius: 20px;
        background-color: #fff;
        padding: 20px;
        width: 100%;
        max-width: 450px;

        &__number-block {
          &__text {
            font-family: "SF";
            font-style: normal;
            font-weight: 400;
            line-height: 17px;
            font-size: 15px;
            color: #212121;

            margin-bottom: 10px;
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
        }

        &__password-block {
          &__text {
            font-family: "SF";
            font-style: normal;
            font-weight: 400;
            line-height: 17px;
            font-size: 15px;
            color: #212121;

            margin-bottom: 10px;
          }

          &__password {
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
          }
        }

        &__agree {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          cursor: pointer;

          &__galochka {
            cursor: pointer;
            padding: 3px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            border: 1px solid $SPACEMAN;
            background-color: $WHITE;
            transition-duration: 0.3s;
          }


          &__galochka svg use {
            fill: $SPACEMAN;
          }

          &__text {
            font-family: "Montserrat";
            color: #212121;
            font-size: 16px;
          }

          #check:checked ~ &__galochka {
            background-color: $SPACEMAN;
            transition-duration: 0.3s;
          }

          #check:checked ~ &__galochka svg use {
            fill: $WHITE;
            transition-duration: 0.3s;
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

          &:enabled {
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
  }

  &__footer {
    flex: 0 0 auto;
  }
}
</style>
