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
    return{
      categories: [
        {title: 'Рестораны и кафе', images: '@/assets/images/categories_cafe.png'},
        {title: 'Рестораны и кафе', images: '@/assets/images/categories_cafe.png'},
        {title: 'Рестораны и кафе', images: '@/assets/images/categories_cafe.png'},
        {title: 'Рестораны и кафе', images: '@/assets/images/categories_cafe.png'},
        {title: 'Рестораны и кафе', images: '@/assets/images/categories_cafe.png'},
        {title: 'Рестораны и кафе', images: '@/assets/images/categories_cafe.png'},
        {title: 'Рестораны и кафе', images: '@/assets/images/categories_cafe.png'},
        {title: 'Рестораны и кафе', images: '@/assets/images/categories_cafe.png'},
      ]
    }
  },
}

</script>

<style lang="scss" scoped>
  
  .categories {
    padding-top: 30px;
  }

  .category-title {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #454545;
  }

</style>