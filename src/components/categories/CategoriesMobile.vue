<template>
  <div class="categories-mobile">
    <p class="categories-mobile__title">Категории</p>
    <div class="categories-mobile__list">
      <CategoriesMobileItem
          v-for="item in categories"
          :category="item"
          :key="item.id"
      />
    </div>
  </div>

</template>

<script>
import CategoriesMobileItem from "@/components/categories/CategoriesMobileItem.vue";
import axios from "axios";

export default {
  components: {
    CategoriesMobileItem,
  },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    axios
        .get("https://admin.abedo.ru/api/cuisines/get")
        .then((response) => (this.categories = response.data.cuisines.data));
  },
};
</script>

<style lang="scss" scoped>

@import "@/assets/variables.scss";

.categories-mobile {
  background-color: $PEARL;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 30px;
  margin-bottom: 30px;

  &__title {
    font-family: 'SF';
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: $MACHINE-GUN-METAL;
    margin-bottom: 20px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
}

@media (min-width: 550px) {
  .categories-mobile__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }
}

</style>
