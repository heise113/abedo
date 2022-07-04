<template>
  <div class="cafe-desktop">
    <div class="cafe-desktop__container">
      <div class="cafe-desktop__container__header">
        <div class="cafe-desktop__container__header__title">Заведения</div>
        <div class="cafe-desktop__container__header__filter">
          <svg height="24" width="24">
            <use xlink:href="@/assets/images/icons.svg#filter-vertical"></use>
          </svg>
          <span class="cafe-desktop__container__header__filter__text">
            Фильтры
          </span>
        </div>
      </div>
      <div class="cafe-desktop__container__list">
        <CafeDesktopItems
            v-for="(cafeItem, index) in cafeList"
            :cafeItem="cafeItem"
            :key="index"
        />
      </div>
      <div @click="$router.push('/partners')" class="cafe-desktop__container__loading">ВСЕ ЗАВЕДЕНИЯ</div>
    </div>
  </div>
</template>

<script>
import CafeDesktopItems from "@/components/cafe/CafeDesktopItem";
import axios from "axios";

export default {
  components: {
    CafeDesktopItems,
  },

  data() {
    return {
      cafeList: [],
    };
  },
  mounted() {
    axios
        .get("https://abedo.ru/api/shops", {params: {cuisine: 1}})
        .then((response) => (this.cafeList = response.data.shops.data));
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.cafe-desktop {
  margin-top: 40px;
  background-color: $PEARL;

  &__container {
    max-width: $CONTAINER-WIDTH;
    width: 100%;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 35px;

      &__title {
        // font-family: 'Montserrat';
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
          margin-left: 10px;
        }
      }
    }

    &__loading {
      cursor: pointer;
      width: 306px;
      text-align: center;
      margin: 60px auto;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $MACHINE-GUN-METAL;
      background-color: $PEARL;
      border: 1px solid $SPACEMAN;
      border-radius: 50px;
      padding: 10px 0 10px 0;
      transition-duration: 0.3s;

      &:hover {
        background-color: $BLUISH-GREEN;
        color: $WHITE;
      }
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 30px;
      column-gap: 40px;
    }
  }
}


@media (min-width: $TABLET) {

  .cafe-mobile {
    display: none;
  }


  .cafe-desktop__container__list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>