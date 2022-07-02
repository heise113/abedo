<template>
  <div class="wrapper">
    <div class="wrapper__container">
      <div class="wrapper__container__header">
        <div class="wrapper__container__header__title">
          <span>Список заведений</span>
        </div>
        <div class="wrapper__container__header__list-partners__filter">
          <span>Фильтр</span>
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
        Загрузить еще
      </div>
    </div>
  </div>
</template>

<script>

import CategoriesPartnersDesktopItem from "@/components/categories/CategoriesPartnersDesktopItem";
import CafeDesktopItems from "@/components/cafe/CafeDesktopItem";
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
        .get("https://abedo.ru/api/shops", {params: {cuisine: 1}})
        .then((response) => (this.cafeList = response.data.shops.data));

    axios
        .get("https://abedo.ru/api/cuisines/get")
        .then((response) => (this.categoriesList = response.data.cuisines.data));
  },

};

</script>

<style scoped lang="scss">

@import "@/assets/styles.scss";

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
    }

    &__main {
      margin-top: 72px;
      //display: grid;
      //grid-template-columns: 1fr 3fr;
      //column-gap: 30px;
      display: flex;
      align-items: start;
      justify-content: space-between;

      &__sidebar {
        //border: 2px solid black;
        margin-right: 30px;
        background-color: $WHITE;
        padding: 20px;
        border-radius: 20px;

        &__title {
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
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $MACHINE-GUN-METAL;
      text-align: center;

      //border: 2px solid black;
      margin-top: 57px;
      padding: 20px 86px 20px 86px;
      background-color: $PEARL;
    }
  }
}

</style>