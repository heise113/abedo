<template>

  <div class="item-wrapper">
    <div class="left-side">
      <svg height="30" width="30"><use xlink:href="@/assets/images/icons.svg#cafe-heart"></use></svg>
      <div class="description">
        <div class="cafe-name">
          {{ cafeItem.cafeName }}
        </div>
        <div class="cafe-description">
          {{ cafeItem.cafeDescription }}
        </div>
      </div>
    </div>
    <div class="right-side">
      <svg height="15" width="15"><use xlink:href="@/assets/images/icons.svg#cafe-arrow"></use></svg>
    </div>
  </div>

</template>

<script>

export default {
  props: {
    cafeItem: {
      type: Object,
    }
  }
}

</script>

<style lang="scss" scoped>

.item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px;
  background: #FFFFFF;
  border: 1px solid #DDE2F2;
  border-radius: 10px;
  margin-bottom: 15px;
}

.left-side {
  display: flex;
  align-items: center;
}

.description {
  margin-left: 14px;
}

.cafe-name {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #212121;
  margin-bottom: 4px;
}

.cafe-description {
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #5C6784;
}

</style>