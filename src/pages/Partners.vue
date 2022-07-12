<template>
  <div class="wrapper">

    <header class="wrapper__header">
      <Header/>
    </header>

    <div class="wrapper__content">
      <CafePartnersDesktop v-if="width > 768" />
      <CafeMobile v-else />
    </div>

    <footer class="wrapper__footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header  from "@/components/header/Settings"
import CafeMobile from "@/components/cafe/main-page/Mobile.vue"
import CafePartnersDesktop from "@/components/cafe/partners-page/Desktop"
import Footer from "@/components/footer/Settings"

export default {
  components: {
    Header,
    CafeMobile,
    CafePartnersDesktop,
    Footer,
  },
  data() {
    return {
      width: innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },

  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize(e) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
};
</script>

<style scoped lang="scss">

@import "@/assets/styles/styles.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__header {
    position: sticky;
    top: 0;
    z-index: 5;
  }

  &__content {
    background-color: $PEARL;
    flex: 1 0 auto;
  }

  &__footer {
    flex: 0 0 auto;
  }
}

</style>
