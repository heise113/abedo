<template>
  <CafeDesktop
      v-if="width > 768"
  />
  <CafeMobile
      v-else
  />
</template>

<script>
import CafeMobile from "@/components/cafe/main-page/Mobile";
import CafeDesktop from "@/components/cafe/main-page/Desktop";

export default {
  components: {
    CafeMobile,
    CafeDesktop,
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
  }
}
</script>

<style scoped lang="scss"></style>