<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container__top">
        <div class="footer__container__top__logo">
          <svg height="30" width="107">
            <use xlink:href="@/assets/images/icons.svg#logo-footer"></use>
          </svg>
          <div class="footer__container__top__logo__copyright">
            © 2022. Все права защищены
          </div>
        </div>
        <div class="footer__container__top__info">
          <a href="#" class="footer__container__top__info__text">О сервисе</a>
          <a href="#" class="footer__container__top__info__text"
            >Добавить заведение</a
          >
          <a href="#" class="footer__container__top__info__text"
            >Новости сервиса</a
          >
          <a href="#" class="footer__container__top__info__text">Контакты</a>
          <a href="#" class="footer__container__top__info__text">Контакты</a>
         
        </div>
        <div class="footer__container__top__contact">
          <a href="#" class="footer__container__top__contact__email">
            pismo@admin.abedo.ru
          </a>
          <div class="footer__container__top__contact__sentence">
            Для жалоб и предложений
          </div>
        </div>
      </div>
      <div class="footer__container__bottom">
        <div class="footer__container__bottom__terms">
          <a href="#">Условия использования</a>
        </div>
        <div class="footer__container__bottom__policies">
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.footer {
  background-color: $LEAD;
  padding: 0 20px 0 20px;

  &__container {
    max-width: $CONTAINER-WIDTH;
    width: 100%;
    margin: 0 auto;

    &__top {
      padding-top: 60px;
      padding-bottom: 60px;
      display: flex;
      justify-content: space-between;

      &__logo {
        &__copyright {
          font-family: 'Montserrat';
          margin-top: 10px;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: $PEARL;
        }
      }

      &__info {
        display: flex;
        flex-wrap: wrap;

        &__text {
          font-family: 'Montserrat';
          text-decoration: none;
          margin: 0 10px 0 10px;
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          color: #ffffff;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      &__contact {
        &__email {
          font-family: 'Montserrat';
          text-decoration: none;
          color: $WHITE;
          font-weight: 600;
          font-size: 18px;
          line-height: 30px;

          &:hover {
            text-decoration: underline;
          }
        }

        &__sentence {
          font-family: 'Montserrat';
          margin-top: 10px;
          color: $WHITE;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
        }
      }
    }

    &__bottom {
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      justify-content: center;

      &__terms a{
        font-family: 'Montserrat';
        text-decoration: none;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $PEARL;

        &:hover a {
          text-decoration: underline;
        }
      }

      &__policies a{
        font-family: 'Montserrat';
        text-decoration: none;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $PEARL;

        &:hover a {
          text-decoration: underline;
        }
      }

      &__terms, &__policies {
        margin-right: 20px;
        margin-left: 20px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
