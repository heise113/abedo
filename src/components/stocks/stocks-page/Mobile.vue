<template>
  <div class="ssm-wrapper">
    <div class="ssm-wrapper__header">
      <span class="ssm-wrapper__header__title">
        Акции
      </span>
    </div>
    <div class="ssm-wrapper__stocks-list">

      <div class="ssm-wrapper__stocks-list__item ssm-wrapper__stocks-list__item-1">

          <div class="ssm-wrapper__stocks-list__item-1__logo">
            <img src="@/assets/images/stocks-logo.png" alt="#">
          </div>
          <span class="ssm-wrapper__stocks-list__item-1__title">
            Кафе “Лимончелло”
          </span>
          <span class="ssm-wrapper__stocks-list__item-1__description">
            Получайте 1% бонусами и скидку до 99%
          </span>
          <img src="@/assets/images/stocks-background.png" alt="" class="ssm-wrapper__stocks-list__item-1__background">

      </div>

      <div class="ssm-wrapper__stocks-list__item ssm-wrapper__stocks-list__item-2">

          <span class="ssm-wrapper__stocks-list__item-2__title">
            Кафе “Лимончелло”
          </span>
          <span class="ssm-wrapper__stocks-list__item-2__description">
            Получайте 1% бонусами и скидку до 99%
          </span>
          <img src="@/assets/images/stocks-background.png" alt="" class="ssm-wrapper__stocks-list__item-2__background">

      </div>

      <div class="ssm-wrapper__stocks-list__item ssm-wrapper__stocks-list__item-3">

          <div class="ssm-wrapper__stocks-list__item-3__logo">
            <img src="@/assets/images/stocks-logo.png" alt="#">
          </div>
          <span class="ssm-wrapper__stocks-list__item-3__title">
            Кафе “Лимончелло”
          </span>
          <span class="ssm-wrapper__stocks-list__item-3__description">
            Получайте 1% бонусами и скидку до 99%
          </span>
          <img src="@/assets/images/stocks-background.png" alt="" class="ssm-wrapper__stocks-list__item-3__background">

      </div>

      <div class="ssm-wrapper__stocks-list__item ssm-wrapper__stocks-list__item-4">

          <span class="ssm-wrapper__stocks-list__item-4__title">
            Кафе “Лимончелло”
          </span>
          <span class="ssm-wrapper__stocks-list__item-4__description">
            Получайте 1% бонусами и скидку до 99%
          </span>
          <img src="@/assets/images/stocks-background.png" alt="" class="ssm-wrapper__stocks-list__item-4__background">

      </div>

      <div class="ssm-wrapper__stocks-list__item ssm-wrapper__stocks-list__item-5">

          <div class="ssm-wrapper__stocks-list__item-5__logo">
            <img src="@/assets/images/stocks-logo.png" alt="#">
          </div>
          <span class="ssm-wrapper__stocks-list__item-5__title">
            Кафе “Лимончелло”
          </span>
          <span class="ssm-wrapper__stocks-list__item-5__description">
            Получайте 1% бонусами и скидку до 99%
          </span>
          <img src="@/assets/images/stocks-background.png" alt="" class="ssm-wrapper__stocks-list__item-5__background">

      </div>

      <div class="ssm-wrapper__stocks-list__item ssm-wrapper__stocks-list__item-6">

          <div class="ssm-wrapper__stocks-list__item-6__logo">
            <img src="@/assets/images/stocks-logo.png" alt="#">
          </div>
          <span class="ssm-wrapper__stocks-list__item-6__title">
            Кафе “Лимончелло”
          </span>
          <span class="ssm-wrapper__stocks-list__item-6__description">
            Получайте 1% бонусами и скидку до 99%
          </span>
          <img src="@/assets/images/stocks-background.png" alt="" class="ssm-wrapper__stocks-list__item-6__background">

      </div>

      <div class="ssm-wrapper__stocks-list__item ssm-wrapper__stocks-list__item-7">

          <div class="ssm-wrapper__stocks-list__item-7__logo">
            <img src="@/assets/images/stocks-logo.png" alt="#">
          </div>
          <span class="ssm-wrapper__stocks-list__item-7__title">
            Кафе “Лимончелло”
          </span>
          <span class="ssm-wrapper__stocks-list__item-7__description">
            Получайте 1% бонусами и скидку до 99%
          </span>
          <img src="@/assets/images/stocks-background.png" alt="" class="ssm-wrapper__stocks-list__item-7__background">

      </div>

      <div class="ssm-wrapper__stocks-list__item ssm-wrapper__stocks-list__item-8">

          <div class="ssm-wrapper__stocks-list__item-8__logo">
            <img src="@/assets/images/stocks-logo.png" alt="#">
          </div>
          <span class="ssm-wrapper__stocks-list__item-8__title">
            Кафе “Лимончелло”
          </span>
          <span class="ssm-wrapper__stocks-list__item-8__description">
            Получайте 1% бонусами и скидку до 99%
          </span>

      </div>

      <div class="ssm-wrapper__stocks-list__item ssm-wrapper__stocks-list__item-9">

          <div class="ssm-wrapper__stocks-list__item-9__logo">
            <img src="@/assets/images/stocks-logo.png" alt="#">
          </div>
          <span class="ssm-wrapper__stocks-list__item-9__title">
            Кафе “Лимончелло”
          </span>
          <span class="ssm-wrapper__stocks-list__item-9__description">
            Получайте 1% бонусами и скидку до 99%
          </span>

      </div>

    </div>
  </div>
</template>

<script>



</script>

<style scoped lang="scss">

@import "@/assets/styles/styles.scss";

.ssm-wrapper {
  padding: 50px 20px 100px 20px;
  background-color: $PEARL;

  &__header {
    margin-bottom: 40px;

    &__title {
       font-family: 'Montserrat';
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      color: $MACHINE-GUN-METAL;
    }
  }

  &__stocks-list {
    display: grid;
    grid-template-columns: 1fr 1fr;

    column-gap: 20px;
    row-gap: 20px;
    justify-content: center;

    &__item {
      position: relative;
        border-radius: 20px;
        overflow: hidden;
        height: 172px;
        cursor: pointer;
    }

    &__item-1 {
      &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(360deg, rgba(92, 103, 132, 0.9) 0%, rgba(92, 103, 132, 0.9) 100%);
          z-index: 2;
        }

        &__title {
          position: absolute;
          left: 140px;
          top: 35px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: $WHITE;
        }

        &__description {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          color: $WHITE;
        }

        &__logo {
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100px;
          max-height: 60px;
          background-color: $WHITE;
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;
          border-radius: 10px;
        }

        &__background {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
    }
    &__item-2 {
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(249, 87, 56, 0.9);
          z-index: 2;
        }

        &__title {
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: $WHITE;
        }

        &__description {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          color: $WHITE;
        }

        &__logo {
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100px;
          max-height: 60px;
          background-color: $WHITE;
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;
          border-radius: 10px;
        }

        &__background {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
      }
      &__item-3 {
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(360deg, rgba(92, 103, 132, 0.9) 0%, rgba(92, 103, 132, 0.9) 100%);
          z-index: 2;
        }

        &__title {
          position: absolute;
          left: 140px;
          top: 35px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: $WHITE;
        }

        &__description {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          color: $WHITE;
        }

        &__logo {
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100px;
          max-height: 60px;
          background-color: $WHITE;
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;
          border-radius: 10px;
        }

        &__background {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
      }
      &__item-4 {
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(249, 87, 56, 0.9);
          z-index: 2;
        }

        &__title {
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: $WHITE;
        }

        &__description {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          color: $WHITE;
        }

        &__logo {
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100px;
          max-height: 60px;
          background-color: $WHITE;
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;
          border-radius: 10px;
        }

        &__background {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
      }
      &__item-5 {
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(360deg, rgba(92, 103, 132, 0.9) 0%, rgba(92, 103, 132, 0.9) 100%);
          z-index: 2;
        }

        &__title {
          position: absolute;
          left: 140px;
          top: 35px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: $WHITE;
        }

        &__description {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          color: $WHITE;
        }

        &__logo {
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100px;
          max-height: 60px;
          background-color: $WHITE;
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;
          border-radius: 10px;
        }

        &__background {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
      }
      &__item-6 {
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(238, 150, 75, 0.9);
          z-index: 2;
        }

        &__title {
          position: absolute;
          left: 140px;
          top: 35px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: $WHITE;
        }

        &__description {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          color: $WHITE;
        }

        &__logo {
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100px;
          max-height: 60px;
          background-color: $WHITE;
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;
          border-radius: 10px;
        }

        &__background {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
      }
      &__item-7 {
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(14, 169, 118, 0.9);
          z-index: 2;
        }

        &__title {
          position: absolute;
          left: 140px;
          top: 35px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: $WHITE;
        }

        &__description {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          color: $WHITE;
        }

        &__logo {
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100px;
          max-height: 60px;
          background-color: $WHITE;
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;
          border-radius: 10px;
        }

        &__background {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
      }
      &__item-8 {
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: $PHYSALIS;
          z-index: 2;
        }

        &__title {
          position: absolute;
          left: 140px;
          top: 35px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: $WHITE;
        }

        &__description {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          color: $WHITE;
        }

        &__logo {
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100px;
          max-height: 60px;
          background-color: $WHITE;
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;
          border-radius: 10px;
        }
      }
      &__item-9 {
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: $PHYSALIS;
          z-index: 2;
        }

        &__title {
          position: absolute;
          left: 140px;
          top: 35px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: $WHITE;
        }

        &__description {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 3;

           font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          color: $WHITE;
        }

        &__logo {
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100px;
          max-height: 60px;
          background-color: $WHITE;
          position: absolute;
          left: 20px;
          top: 20px;
          z-index: 3;
          border-radius: 10px;
        }
      }
  }
}

@media (max-width: 700px) {
  .ssm-wrapper__stocks-list {
    grid-template-columns: 374px;
  }
}

</style>