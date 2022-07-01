<template>

  <header class="header-desktop">
    <div class="header-desktop__container">
      <router-link to="/" class="header-desktop__container__logo" href="#">
        <svg height="30" width="107">
          <use xlink:href="@/assets/images/icons.svg#logo"></use>
        </svg>
      </router-link>

      <div class="header-desktop__container__button">
        <svg height="24" width="24">
          <use xlink:href="@/assets/images/icons.svg#header-shop"></use>
        </svg>
        <span class="header-desktop__container__button__text"> Магазины </span>
      </div>

      <div class="header-desktop__container__profile-stocks">
        <div class="header-desktop__container__profile-stocks__profile">
          <svg height="28" width="28">
            <use xlink:href="@/assets/images/icons.svg#profile"></use>
          </svg>
          <a class="header-desktop__container__profile-stocks__profile__text" href="#">
            Кабинет
          </a>
        </div>
        <div class="header-desktop__container__profile-stocks__stocks">
          <svg height="24" width="24">
            <use xlink:href="@/assets/images/icons.svg#header-msg"></use>
          </svg>
          <a class="header-desktop__container__profile-stocks__stocks__text" href="#">
            Акции магазинов
          </a>
        </div>
      </div>

      <div class="header-desktop__container__icons">
        <div class="header-desktop__container__icons__search">
          <svg height="20" width="20">
            <use xlink:href="@/assets/images/icons.svg#header-search"></use>
          </svg>
        </div>
        <div class="header-desktop__container__icons__likes">
          <svg height="20" width="20">
            <use xlink:href="@/assets/images/icons.svg#header-likes"></use>
          </svg>
        </div>
      </div>

      <div class="header-desktop__container__basket">
        <svg height="20" width="20">
          <use xlink:href="@/assets/images/icons.svg#header-basket"></use>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>

</script>

<style lang="scss" scoped>

@import '@/assets/styles.scss';

.header-desktop {
  background-color: $WHITE;

  &__container {
    max-width: $CONTAINER-WIDTH;
    width: 100%;
    margin: 0 auto;
    padding: 15px 20px 20px 15px;
    background-color: $WHITE;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__button {
      padding: 10px 30px 10px 30px;
      display: flex;
      align-items: center;
      background: $SPACEMAN;
      border-radius: 50px;
      cursor: pointer;
      transition-duration: 0.3s;

      &:hover {
        background-color: $PHYSALIS;
      }

      &__text {
        margin-left: 10px;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: $WHITE;
        cursor: pointer;
        user-select: none;
      }
    }

    &__profile-stocks {
      display: flex;
      align-items: center;

      &__profile {
        margin-right: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;

        &__text {
          margin-left: 10px;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: $LEAD;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      &__stocks {
        display: flex;
        align-items: center;
        cursor: pointer;

        &__text {
          margin-left: 10px;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: $LEAD;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    &__icons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__search,
      &__likes {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        border: 1px solid $MITHRIL;
        border-radius: 50px;
        cursor: pointer;
        margin-right: 15px;
      }
    }

    &__basket {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      border: 1px solid $MITHRIL;
      border-radius: 50px;
      cursor: pointer;
    }
  }
}

</style>