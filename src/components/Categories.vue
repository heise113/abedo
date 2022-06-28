<template>
  <div class="categories-mobile">
    <p class="categories-mobile__title">Категории</p>
    <div class="categories-mobile__list">
      <CategoriesItem
        v-for="item in categories"
        :category="item"
        :key="item.id"
      />
    </div>
  </div>

  <div class="categories-desktop">
    <div class="categories-desktop__container">
      <div class="categories-desktop__container__title">Маркетплейс РСО-Алания</div>
      <input
        class="categories-desktop__container__input"
        type="text"
        placeholder="Найти магазин товар или услугу"
      />
      <div class="categories-desktop__container__list">
        <CategoriesItem
          v-for="item in categories"
          :category="item"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesItem from "@/components/CategoriesItem.vue";
import axios from "axios";

export default {
  components: {
    CategoriesItem,
  },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    axios
      .get("https://abedo.ru/api/cuisines/get")
      .then((response) => (this.categories = response.data.cuisines.data));
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 769px) {
  .categories-desktop {
    display: none;
  }

  .categories-mobile {
    background-color: #f7f7f9;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 30px;
    margin-bottom: 30px;

    &__title {
      font-weight: 600;
      font-size: 20px;
      line-height: 20px;
      color: #454545;
      margin-bottom: 20px;
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
  }
}

@media (min-width: 770px) and (max-width: 1024px) {
  .categories-mobile {
    display: none;
  }

  .categories-desktop {
    background-color: #dde2f2;
    padding-top: 85px;
    padding-bottom: 40px;
    padding-right: 20px;
    padding-left: 20px;

    &__container {
      max-width: 1270px;
      width: 100%;
      margin: 0 auto;
    
      &__input {
        padding: 25px;
        margin-bottom: 40px;
        width: 730px;
        height: 60px;
        margin-top: 55px;
        background: #ffffff;
        box-shadow: 0px 10px 50px -30px #000000;
        border-radius: 50px;
        border: none;
      }
  
      &__title {
        font-weight: 700;
        font-size: 40px;
        line-height: 49px;
        color: #454545;
      }
  
      &__list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
      }
    }
  }
}

@media (min-width: 1024px) {
  .categories-mobile {
    display: none;
  }

  .categories-desktop {
    background-color: #dde2f2;
    padding-top: 85px;
    padding-bottom: 40px;
    padding-right: 20px;
    padding-left: 20px;

    &__container {
      max-width: 1270px;
      width: 100%;
      margin: 0 auto;
    
      &__input {
        padding: 25px;
        margin-bottom: 40px;
        width: 730px;
        height: 60px;
        margin-top: 55px;
        background: #ffffff;
        box-shadow: 0px 10px 50px -30px #000000;
        border-radius: 50px;
        border: none;
      }
  
      &__title {
        font-weight: 700;
        font-size: 40px;
        line-height: 49px;
        color: #454545;
      }
  
      &__list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 15px;
      }
    }
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
