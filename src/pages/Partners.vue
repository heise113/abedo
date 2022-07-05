<template>
  <div class="wrapper">

    <header class="wrapper__header">
      <HeaderMainDesktop
        v-if="width > 768"
      />
      <HeaderPartnersMobile
        v-else
      />
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
import HeaderPartnersMobile from "@/components/headers/HeaderPartnersMobile"
import HeaderMainDesktop  from "@/components/headers/HeaderMainDesktop"
import CafeMobile from "@/components/cafe/CafeMobile.vue"
import CafePartnersDesktop from "@/components/cafe/CafePartnersDesktop"
import Footer from "@/components/footer/Item"

export default {
  components: {
    HeaderPartnersMobile,
    HeaderMainDesktop,
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

@import "@/assets/styles.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__content {
    background-color: $PEARL;
    flex: 1 0 auto;
  }

  &__footer {
    flex: 0 0 auto;
  }
}

</style>
