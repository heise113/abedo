<template>

  <footer class="footer">
    <LeftMenu
        @offModal="leftMenuActive"
        v-if="menu"
    />
    <div class="footer-inner">
      <router-link to="/" href="#">
        <svg height="30" width="30">
          <use xlink:href="@/assets/images/icons.svg#footer-main"></use>
        </svg>
      </router-link>
      <a href="#">
        <svg height="24" width="26">
          <use xlink:href="@/assets/images/icons.svg#footer-likes"></use>
        </svg>
      </a>
      <a href="#">
        <svg height="26" width="26">
          <use xlink:href="@/assets/images/icons.svg#footer-basket"></use>
        </svg>
      </a>
      <a href="#">
        <svg height="25" width="25">
          <use xlink:href="@/assets/images/icons.svg#footer-search"></use>
        </svg>
      </a>
      <a @click="leftMenuActive" href="#">
        <svg height="30" width="30">
          <use xlink:href="@/assets/images/icons.svg#footer-different"></use>
        </svg>
      </a>
    </div>
  </footer>

</template>

<script>

import LeftMenu from "@/components/modals-window/LeftMenu";

export default {
  components: {
    LeftMenu,
  },
  data() {
    return {
      menu: false,
    }
  },
  methods: {
    leftMenuActive() {
      this.menu ? this.menu = false : this.menu = true
    }
  },
}

</script>

<style lang="scss" scoped>

.footer {
  padding-right: 20px;
  padding-left: 20px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

</style>