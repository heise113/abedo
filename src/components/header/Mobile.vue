<template>
  <header class="header-mobile">
    <router-link to="/" href="#">
      <svg height="30" width="107">
        <use xlink:href="@/assets/images/icons.svg#logo-header-mobile"></use>
      </svg>
    </router-link>
    <svg height="28" width="28">
      <use xlink:href="@/assets/images/icons.svg#profile"></use>
    </svg>
  </header>
</template>

<script>

</script>

<style lang="scss" scoped>

@import '@/assets/styles/styles.scss';

.header-mobile {
  padding: 15px 20px 20px 15px;
  display: flex;
  justify-content: space-between;
  background-color: $WHITE;
}

</style>