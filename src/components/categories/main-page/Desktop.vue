<template>
  <div class="categories-desktop">
    <div class="categories-desktop__container">
      <div class="categories-desktop__container__title">
        Маркетплейс РСО-Алания
      </div>
      <div class="categories-desktop__container__input-block">
        <svg height="20" width="20">
          <use xlink:href="@/assets/images/icons.svg#input-search"></use>
        </svg>
        <input
            class="categories-desktop__container__input-block__input"
            type="text"
            placeholder="Найти магазин товар или услугу"
        />
      </div>
      <div class="categories-desktop__container__list">
        <CategoriesDesktopItem
            v-for="item in categories"
            :category="item"
            :key="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesDesktopItem from "@/components/categories/main-page/DesktopItem.vue";
import axios from "axios";

export default {
  components: {
    CategoriesDesktopItem,
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

@import "@/assets/styles/variables.scss";

.categories-desktop {
  background-color: $VAGUELY-VIOLET;
  padding-top: 85px;
  padding-bottom: 40px;
  padding-right: 20px;
  padding-left: 20px;

  &__container {
    max-width: 1270px;
    width: 100%;
    margin: 0 auto;

    &__input-block {
      width: 730px;
      border-radius: 50px;
      background: $WHITE;
      margin-bottom: 40px;
      margin-top: 55px;
      padding: 20px;
      display: flex;
      align-items: center;

      &__input {
        font-family: 'SF';
        font-weight: 400;
        box-shadow: 0px 10px 50px -30px $BLACK;
        border: none;
        outline: none;
        flex: 1;
        margin-left: 15px;
      }
    }

    &__title {
      font-family: 'Montserrat';
      font-weight: 700;
      font-size: 40px;
      line-height: 49px;
      color: $MACHINE-GUN-METAL;
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 15px;
    }
  }
}


@media (min-width: $TABLET) {
  .categories-desktop__container__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
  }
}

</style>
