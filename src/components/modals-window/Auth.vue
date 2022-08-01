<template>
  <div @mousedown.self="offModal" class="modal-wrapper">
    <form class="modal-wrapper__content" @submit.prevent="login">
      <svg
        @click="offModal"
        class="modal-wrapper__content__close"
        height="15"
        width="15"
      >
        <use xlink:href="@/assets/images/icons.svg#cafe-cart-close"></use>
      </svg>
      <div class="modal-wrapper__content__sign-in">Вход</div>
      <div class="modal-wrapper__content__number-block">
        <div class="modal-wrapper__content__number-block__text">Телефон</div>

        <div class="modal-wrapper__content__number-block__number">
          <div
            class="modal-wrapper__content__number-block__number__hard-number"
          >
            +7
          </div>
          <input
            v-model="phone"
            minlength="10"
            maxlength="10"
            type="text"
            required
            class="modal-wrapper__content__number-block__number__input"
            placeholder="(000) 000 000 00"
          />
        </div>
      </div>
      <div class="modal-wrapper__content__password-block">
        <div class="modal-wrapper__content__password-block__text">Пароль</div>
        <input
          v-model="password"
          minlenght="8"
          type="password"
          required
          class="modal-wrapper__content__password-block__password"
          placeholder="Введите пароль"
        />
      </div>
      <div class="modal-wrapper__content__register-block">
        <router-link
          to="remind"
          class="modal-wrapper__content__register-block__forget-password"
        >
          Забыли пароль?
        </router-link>
        <router-link
          to="/registration"
          class="modal-wrapper__content__register-block__registration"
        >
          Регистрация
        </router-link>
      </div>
      <button class="modal-wrapper__content__button">Войти</button>
      <ValidateMessage v-if="error_message.length !== 0" v-for="el in error_message">
        {{ el[0] }}
      </ValidateMessage>
    </form>
  </div>
</template>

<script>

import ValidateMessage from "@/components/ValidateMessage"
import axios from "axios";
import validateErrors from "@/mixins/ValidateErrors"

export default {
  mixins: [
    validateErrors,
  ],
  components: {
    ValidateMessage,
  },
  data() {
    return {
      password: null,
      phone: null,
    };
  },
  methods: {
    offModal() {
      this.$emit("offModal");
    },
    stop(event) {
      event.stopPropagation();
    },
    async login() {
      await axios
        .post("https://admin.abedo.ru/api/login", {
          password: this.password,
          phone: this.phone,
        })
        .then(() => {
          this.offModal()
          this.$store.commit('login', true)
        })
        .catch((error) => {
          this.errorMessage(error)
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.modal-wrapper {
  z-index: 60;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(92, 103, 132, 0.9);

  &__content {
    position: relative;
    width: 400px;
    background-color: $WHITE;
    padding: 35px 20px;
    margin: 150px auto;

    &__close {
      position: absolute;
      top: 30px;
      right: 30px;
      cursor: pointer;
    }

    &__sign-in {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      text-align: left;
      font-size: 32px;
      line-height: 39px;
      color: #212121;

      margin-bottom: 30px;
    }

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

    &__register-block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      &__forget-password,
      &__registration {
        color: #212121;
        font-family: "Montserrat";
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    &__button {
      width: 100%;
      font-family: "Montserrat";
      height: 50px;
      border: 1px solid #5c6784;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: $WHITE;
    }
  }
}

@media (max-width: $MOBILE) {
  .modal-wrapper {
    background-color: white;

    &__content {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
