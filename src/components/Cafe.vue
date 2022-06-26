<template>

  <div class="wrapper">
    <div class="cafe-header">
      <div class="cafe-title">
        Заведения
      </div>
      <div class="filter">
        <svg height="20" width="20">
          <use xlink:href="@/assets/images/icons.svg#cafe-filter"></use>
        </svg>
        <div class="filter-text">
          Фильтры
        </div>
      </div>
    </div>
    <div class="cafe-list">
      <CafeItems
          v-for="cafeItem in cafeList"
          :cafeItem="cafeItem"
      />
    </div>
    <button class="loading">
      <span class="loading-text">
        Загрузить еще
      </span>
    </button>
  </div>

</template>

<script>

import CafeItems from "@/components/CafeItems";

export default {
  components: {
    CafeItems,
  },

  data() {
    return {
      cafeList: [
        {cafeName: 'Винчензо', cafeDescription: 'Вкусно и точка'},
        {cafeName: 'Винчензо', cafeDescription: 'Вкусно и точка'},
        {cafeName: 'Винчензо', cafeDescription: 'Вкусно и точка'},
        {cafeName: 'Винчензо', cafeDescription: 'Вкусно и точка'},
        {cafeName: 'Винчензо', cafeDescription: 'Вкусно и точка'},
        {cafeName: 'Винчензо', cafeDescription: 'Вкусно и точка'},
        {cafeName: 'Винчензо', cafeDescription: 'Вкусно и точка'},
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

.wrapper {
  margin-top: 30px;
  margin-bottom: 15px;
}

.cafe-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.cafe-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #454545;
}

.filter {
  display: flex;
  align-items: center;
}

.filter-text {
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #454545;
}

.loading {
  margin: 15px auto;
  width: 228px;
  background: #5C6784;
  border: 1px solid #5C6784;
  border-radius: 50px;
  padding: 10px 36px 10px 36px;
}

.loading-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}

</style>