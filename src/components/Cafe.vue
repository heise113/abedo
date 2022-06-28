<template>
  <div class="cafe">
    <div class="cafe__header">
      <div class="cafe__header__title">Заведения</div>
      <div class="cafe__header__filter">
        <svg height="20" width="20">
          <use xlink:href="@/assets/images/icons.svg#cafe-filter"></use>
        </svg>
        <div class="cafe__header__filter__text">Фильтры</div>
      </div>
    </div>
    <div class="cafe__list">
      <CafeItems
        v-for="(cafeItem, index) in cafeList"
        :cafeItem="cafeItem"
        :key="index"
      />
    </div>
    <div class="cafe__loading">Загрузить еще</div>
  </div>
</template>

<script>
import CafeItems from "@/components/CafeItems";
import axios from "axios";

export default {
  components: {
    CafeItems,
  },

  data() {
    return {
      cafeList: [
        // { cafeName: "Винчензо", cafeDescription: "Вкусно и точка" },
        // { cafeName: "Винчензо", cafeDescription: "Вкусно и точка" },
        // { cafeName: "Винчензо", cafeDescription: "Вкусно и точка" },
        // { cafeName: "Винчензо", cafeDescription: "Вкусно и точка" },
        // { cafeName: "Винчензо", cafeDescription: "Вкусно и точка" },
        // { cafeName: "Винчензо", cafeDescription: "Вкусно и точка" },
        // { cafeName: "Винчензо", cafeDescription: "Вкусно и точка" },
      ],
    };
  },
  mounted() {
    axios
      .get("https://abedo.ru/api/shops", { params: { cuisine: 1 } })
      .then((response) => (this.cafeList = response.data.shops.data))
  },
};
</script>

<style lang="scss" scoped>
.cafe {
  margin-top: 30px;
  margin-bottom: 15px;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    &__title {
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      color: #454545;
    }

    &__filter {
      display: flex;
      align-items: center;

      &__text {
        margin-left: 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #454545;
      }
    }
  }

  &__loading {
    color: white;
    text-align: center;
    margin: 15px auto;
    width: 228px;
    background: #5c6784;
    border: 1px solid #5c6784;
    border-radius: 50px;
    padding: 10px 36px 10px 36px;
  }
}

@media (min-width: 769px) {
  .cafe__loading {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #454545;
    background: #ffffff;
    border: 1px solid #5c6784;
    border-radius: 50px;
    padding: 10px 50px 10px 50px;
  }
}
</style>
