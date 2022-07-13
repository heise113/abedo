<template>
  <div @click="offModal" class="wrapper-modal">

  </div>
  <div class="content">
    <div class="content__logo">
      <svg height="44" width="156">
        <use xlink:href="@/assets/images/icons.svg#logo-header-desktop"></use>
      </svg>
    </div>
    <div class="content__button">
      <div class="content__button__logo">
        <svg height="22" width="22">
          <use xlink:href="@/assets/images/icons.svg#left-menu-profile"></use>
        </svg>
      </div>
      <span class="content__button__text">
        Личный кабинет
      </span>
    </div>
    <div class="content__links">
      <div class="content__links__my-data">
        <div class="content__links__my-data__logo">
          <svg height="22" width="22">
            <use xlink:href="@/assets/images/icons.svg#left-menu-profile"></use>
          </svg>
        </div>
        <div class="content__links__my-data__text">
          Мои данные
        </div>
      </div>
      <div class="content__links__address">
        <div class="content__links__address__logo">
          <svg height="20" width="20">
            <use xlink:href="@/assets/images/icons.svg#left-menu-address"></use>
          </svg>
        </div>
        <div class="content__links__address__text">
          Адреса доставок
        </div>
      </div>
      <div class="content__links__history">
        <div class="content__links__history__logo">
          <svg height="20" width="20">
            <use xlink:href="@/assets/images/icons.svg#left-menu-history"></use>
          </svg>
        </div>
        <div class="content__links__history__text">
          История заказов
        </div>
      </div>
      <div class="content__links__save-cafe">
        <div class="content__links__save-cafe__logo">
          <svg height="20" width="20">
            <use xlink:href="@/assets/images/icons.svg#left-menu-likes"></use>
          </svg>
        </div>
        <div class="content__links__save-cafe__text">
          Сохраненные заведения
        </div>
      </div>
    </div>
    <div class="content__additional">
      <div class="content__additional__politic">
        Политика конфиденциальности
      </div>
      <div class="content__additional__conditions">
        Условия пользования
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    offModal() {
      this.$emit('offModal')
    }
  },
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.wrapper-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 70vw;
  width: 100%;
  background-color: $BLACK;
  opacity: 0.3;
}

.content {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 70vw;
  background-color: $WHITE;
  padding: 20px;

  &__logo {
    margin-bottom: 30px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    padding: 5px 14px;
    border: 1px solid $SPACEMAN;
    border-radius: 50px;
    margin-bottom: 30px;

    &__text {
      font-family: 'SF';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 17px;
      color: $SPACEMAN;

      margin-left: 10px;
    }

    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__links {
    margin-bottom: 30px;

    &__my-data, &__address, &__history, &__save-cafe {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      &__logo {
        margin-right: 14px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__text {
        font-family: 'SF';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $MACHINE-GUN-METAL;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    & div:last-child {
      margin-bottom: 0;
    }
  }

  &__additional {
    padding-top: 30px;
    border-top: 1px solid $VAGUELY-VIOLET;

    &__politic, &__conditions {
      font-family: 'SF';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: $MACHINE-GUN-METAL;

      margin-bottom: 20px;
    }
  }
}

</style>