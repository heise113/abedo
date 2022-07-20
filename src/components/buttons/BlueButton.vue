<template>
  <button class="blue-button">
    <slot name="span"></slot>
    <slot name="svg"></slot>
  </button>
</template>

<script>



</script>


<style scoped lang="scss">
@import "@/assets/styles/styles.scss";

.blue-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>