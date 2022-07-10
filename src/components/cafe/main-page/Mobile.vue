<template>
  <div class="cafe-mobile">
    <div class="cafe-mobile__header">
      <div class="cafe-mobile__header__title">Заведения</div>
      <div class="cafe-mobile__header__filter">
        <svg height="20" width="20">
          <use xlink:href="@/assets/images/icons.svg#cafe-filter"></use>
        </svg>
        <div class="cafe-mobile__header__filter__text">Фильтры</div>
      </div>
    </div>
    <div class="cafe-mobile__list">
      <CafeMobileItems
          v-for="(cafeItem, index) in cafeList"
          :cafeItem="cafeItem"
          :key="index"
      />
    </div>
    <div @click="$router.push('/partners')" class="cafe-mobile__loading">Все заведения</div>
  </div>
</template>

<script>
import CafeMobileItems from "@/components/cafe/main-page/MobileItem";
import axios from "axios";

export default {
  components: {
    CafeMobileItems,
  },

  data() {
    return {
      cafeList: [],
    };
  },
  mounted() {
    axios
        .get("https://admin.abedo.ru/api/shops", {params: {cuisine: 1}})
        .then((response) => (this.cafeList = response.data.shops.data));
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.cafe-mobile {
  padding: 30px 20px 90px 20px;
  background-color: $PEARL;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    &__title {
      font-family: 'SF';
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      color: #454545;
    }

    &__filter {
      display: flex;
      align-items: center;
      cursor: pointer;

      &__text {
        font-family: 'SF';
        margin-left: 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #454545;
      }
    }
  }

  &__loading {
    font-family: 'SF';
    display: block;
    text-decoration: none;
    color: white;
    text-align: center;
    margin: 15px auto;
    width: 228px;
    background-color: #5c6784;
    border: 1px solid #5c6784;
    border-radius: 50px;
    padding: 10px 36px 10px 36px;
    cursor: pointer;
    transition-duration: 0.4s;

    &:hover {
      background-color: $BLUISH-GREEN;
    }
  }
}


</style>