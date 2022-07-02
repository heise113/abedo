<template>
  <div class="wrapper">

    <HeaderMainDesktop
      v-if="width > 768"
    />
    <HeaderPartnersMobile
      v-else
    />

    <div class="wrapper__content">
      <CafePartnersDesktop v-if="width > 768" />
      <CafeMobile v-else />
    </div>

    <Footer />
  </div>
</template>

<script>
import HeaderPartnersMobile from "@/components/headers/HeaderPartnersMobile";
import HeaderMainDesktop  from "@/components/headers/HeaderMainDesktop"
import CafeMobile from "@/components/cafe/CafeMobile.vue";
import CafePartnersDesktop from "@/components/cafe/CafePartnersDesktop"
import Footer from "@/components/footer/Item";

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
  height: 100%;
  &__content {
    background-color: $PEARL;
    height: 100%;
  }
}

</style>
