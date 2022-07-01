<template>
  <div class="wrapper">
    <HeaderDesktop 
      v-if="width > 768" 
    />
    <GoBack 
      v-else 
    />

    <div class="wrapper__content">
      <CafeMobile />
    </div>

    <Footer />
  </div>
</template>

<script>
import HeaderDesktop from "@/components/header/HeaderDesktop";
import GoBack from "@/components/GoBack";
import CafeMobile from "@/components/cafe/CafeMobile.vue";
import Footer from "@/components/footer/Item";

export default {
  components: {
    HeaderDesktop,
    GoBack,
    CafeMobile,
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
