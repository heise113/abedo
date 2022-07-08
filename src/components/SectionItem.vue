<template>

<div class="section-wrapper">
  {{ item.name }}
</div>

</template>

<script>

export default {
  props: {
    item: {
      type: Object,
    }
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";

.section-wrapper {
  font-family: 'SF';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: $MACHINE-GUN-METAL;

  padding: 13px 28px;
  border: 1px solid $SPACEMAN;
  border-radius: 50px;

  margin-right: 5px;
  margin-bottom: 10px;
}

</style>
