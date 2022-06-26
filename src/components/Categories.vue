<template>
  <div class="categories">
    <p class="category-title">Категории</p>
    <div class="categories-list">
      <CategoriesItem
          v-for="item in categories"
          :category="item"
      />
    </div>
  </div>
</template>

<script>

import CategoriesItem from '@/components/CategoriesItem.vue'

export default {
  components: {
    CategoriesItem
  },
  data() {
    return {
      categories: [
        {title: 'Рестораны и кафе', images: '../assets/images/categories_cafe.png'},
        {title: 'Для дома и ремонта', images: '../assets/images/categories_cafe.png'},
        {title: 'Для детей', images: '../assets/images/categories_cafe.png'},
        {title: 'Одежда и обувь', images: '../assets/images/categories_cafe.png'},
        {title: 'Для автомобиля', images: '../assets/images/categories_cafe.png'},
        {title: 'Товары ручной работы', images: '../assets/images/categories_cafe.png'},
        {title: 'Продукты питания', images: '../assets/images/categories_cafe.png'},
        {title: 'Здоровье и Красота', images: '../assets/images/categories_cafe.png'},
        {title: 'Здоровье и Красота', images: '../assets/images/categories_cafe.png'},
      ]
    }
  },
}

</script>

<style lang="scss" scoped>

.categories {
  padding-top: 30px;
  margin-bottom: 30px;
}

.categories-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.category-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: #454545;
  margin-bottom: 20px;
}

</style>