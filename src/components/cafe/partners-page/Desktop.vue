<template>
  <div class="wrapper">
    <div class="wrapper__container">
      <div class="wrapper__container__header">
        <div class="wrapper__container__header__title">
          <span>Список заведений</span>
        </div>
        <div class="wrapper__container__header__filter">
          <svg height="24" width="24">
            <use xlink:href="@/assets/images/icons.svg#filter-vertical"></use>
          </svg>
          <span class="wrapper__container__header__filter__text">Фильтр</span>
        </div>
      </div>
      <div class="wrapper__container__main">
        <div class="wrapper__container__main__sidebar">
          <div class="wrapper__container__main__sidebar__title">
            <span>Категории</span>
          </div>
          <div class="wrapper__container__main__sidebar__list-categories">
            <CategoriesPartnersDesktopItem
                v-for="(category, index) in categoriesList"
                :category="category"
                :key="index"
            />
          </div>
        </div>
        <div class="wrapper__container__main__list-partners">
          <CafeDesktopItems
              v-for="(cafeItem, index) in cafeList"
              :cafeItem="cafeItem"
              :key="index"
          />
        </div>
      </div>
      <div class="wrapper__container__loading">
        ЗАГРУЗИТЬ ЕЩЕ
      </div>
    </div>
  </div>
</template>

<script>

import CategoriesPartnersDesktopItem from "@/components/categories/partners-page/DesktopItem";
import CafeDesktopItems from "@/components/cafe/main-page/DesktopItem";
import axios from "axios";

export default {
  components: {
    CafeDesktopItems,
    CategoriesPartnersDesktopItem,
  },

  data() {
    return {
      cafeList: [],
      categoriesList: [],
    };
  },
  mounted() {
    axios
        .get("https://admin.abedo.ru/api/shops", {params: {cuisine: 1}})
        .then((response) => (this.cafeList = response.data.shops.data));

    axios
        .get("https://admin.abedo.ru/api/cuisines/get")
        .then((response) => (this.categoriesList = response.data.cuisines.data));
  },

};

</script>

<style scoped lang="scss">

@import "@/assets/styles/styles.scss";

.wrapper {
  padding: 75px 20px 100px 20px;
  background-color: $PEARL;

  &__container {
    max-width: $CONTAINER-WIDTH;
    width: 100%;
    margin: 0 auto;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__title {
         font-family: 'Montserrat';
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        color: $MACHINE-GUN-METAL;
      }

      &__filter {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        background-color: $WHITE;
        border-radius: 5px;
        cursor: pointer;

        &__text {
          font-family: 'SF';
          font-weight: 600;
          margin-left: 10px;
        }
      }
    }


    &__main {
      margin-top: 72px;
      display: flex;
      align-items: start;
      justify-content: space-between;

      &__sidebar {
        margin-right: 30px;
        background-color: $WHITE;
        padding: 20px;
        border-radius: 20px;
        width: 295px;
        flex-shrink: 0;

        &__title {
          font-family: 'SF';
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          color: $MACHINE-GUN-METAL;
          margin-bottom: 14px;
        }
      }

      &__list-partners {
        //border: 2px solid black;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 40px;
        column-gap: 30px;
      }

    }

    &__loading {
      font-family: 'SF';
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $MACHINE-GUN-METAL;
      text-align: center;

      width: 306px;
      border: 2px solid black;
      margin: 57px auto;
      padding: 10px 0 10px 0;
      background-color: $PEARL;
      border: 1px solid $SPACEMAN;
      border-radius: 50px;
      cursor: pointer;
      transition-duration: 0.3s;

      &:hover {
        background-color: $BLUISH-GREEN;
        color: $WHITE;
      }
    }
  }
}

@media (max-width: 950px) {
  .wrapper__container__main__list-partners {
    grid-template-columns: 1fr 1fr;
  }
}

</style>