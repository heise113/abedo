<template>
  <header class="header-mobile">
    <svg height="30" width="107">
      <use xlink:href="@/assets/images/icons.svg#logo"></use>
    </svg>
    <svg height="28" width="28">
      <use xlink:href="@/assets/images/icons.svg#profile"></use>
    </svg>
  </header>

  <header class="header-desktop">
    <div class="header-desktop__container">
      <svg height="30" width="107">
        <use xlink:href="@/assets/images/icons.svg#logo"></use>
      </svg>

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
          <div class="header-desktop__container__profile-stocks__profile__text">
            Кабинет
          </div>
        </div>
        <div class="header-desktop__container__profile-stocks__stocks">
          <svg height="24" width="24">
            <use xlink:href="@/assets/images/icons.svg#header-msg"></use>
          </svg>
          <div class="header-desktop__container__profile-stocks__stocks__text">
            Акции магазинов
          </div>
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
        <div class="header-desktop__container__icons__basket">
          <svg height="20" width="20">
            <use xlink:href="@/assets/images/icons.svg#header-basket"></use>
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
@media (max-width: 769px) {
  .header-desktop {
    display: none;
  }

  .header-mobile {
    padding: 15px 20px 20px 15px;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
  }
}

@media (min-width: 770px) {
  .header-mobile {
    display: none;
  }

  .header-desktop {
    background-color: #ffffff;

    &__container {
      max-width: 1270px;
      width: 100%;
      margin: 0 auto;
      padding: 15px 20px 20px 15px;
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__button {
        padding: 10px 30px 10px 30px;
        display: flex;
        align-items: center;
        background: #5c6784;
        border-radius: 50px;

        &__text {
          margin-left: 10px;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #ffffff;
        }
      }

      &__profile-stocks {
        display: flex;
        align-items: center;

        &__profile {
          margin-right: 10px;
          display: flex;
          align-items: center;

          &__text {
            margin-left: 10px;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #212121;
          }
        }

        &__stocks {
          display: flex;
          align-items: center;

          &__text {
            margin-left: 10px;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #212121;
          }
        }
      }
      &__icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        &__search, &__likes, &__basket {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          border: 1px solid #878787;
          border-radius: 50px;
        }
      }
    }
  }
}
</style>
