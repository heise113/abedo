<template>
  <header class="header-desktop">
    <div class="header-desktop__container">
      <router-link to="/" class="header-desktop__container__logo" href="#">
        <svg height="44" width="156">
          <use xlink:href="@/assets/images/icons.svg#logo-header-desktop"></use>
        </svg>
      </router-link>

      <div
        @click="$router.push('/partners')"
        class="header-desktop__container__button"
      >
        <svg height="24" width="24">
          <use xlink:href="@/assets/images/icons.svg#header-shop"></use>
        </svg>
        <span class="header-desktop__container__button__text"> Заведения </span>
      </div>

      <div class="header-desktop__container__profile-stocks">
        <div class="header-desktop__container__profile-stocks__profile">
          <svg height="28" width="28">
            <use xlink:href="@/assets/images/icons.svg#profile"></use>
          </svg>
          <a
            class="header-desktop__container__profile-stocks__profile__text"
            href="#"
          >
            Кабинет
          </a>
        </div>
        <div class="header-desktop__container__profile-stocks__stocks">
          <svg height="24" width="24">
            <use xlink:href="@/assets/images/icons.svg#header-msg"></use>
          </svg>
          <router-link
            to="/stocks"
            class="header-desktop__container__profile-stocks__stocks__text"
            href="#"
          >
            Акции магазинов
          </router-link>
          <router-link
            to="/stocks"
            class="header-desktop__container__profile-stocks__stocks__text_over"
            href="#"
          >
            Акции
          </router-link>
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

      <div class="header-desktop__container__basket" @click="$router.push('/basket')">
        <svg height="20" width="20">
          <use xlink:href="@/assets/images/icons.svg#header-basket"></use>
        </svg>
      </div>
    </div>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";

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
      padding: 14px 30px 14px 30px;
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
        font-family: "Montserrat", sans-serif;
        margin-left: 10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
        user-select: none;
        color: $WHITE;
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
          font-family: "Montserrat";
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

        &__text, &__text_over {
          font-family: "Montserrat";
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

        &__text_over {
          display: none;
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

        &:hover {
          border-color: $SPACEMAN;

          & svg {
            //fill: $SPACEMAN;
            stroke: $SPACEMAN;
          }
        }
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

@media (max-width: 900px) {
  .header-desktop__container__button {
    padding: 10px 20px 10px 20px;

    &__text {
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
    }
  }

  .header-desktop__container__icons__search, .header-desktop__container__icons__likes {
    margin-right: 8px;
  }

  .header-desktop__container__profile-stocks__stocks__text {
    display: none;
  }

  .header-desktop__container__profile-stocks__stocks__text_over {
    display: block;
  }
}
</style>
