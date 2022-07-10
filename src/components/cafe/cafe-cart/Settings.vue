<template>
  <CafeCartDesktop
      v-if="width > 768"
  />
  <CafeCartMobile
      v-else
  />
</template>

<script>
import CafeCartMobile from "@/components/cafe/cafe-cart/Mobile";
import CafeCartDesktop from "@/components/cafe/cafe-cart/Desktop";

export default {
  components: {
    CafeCartMobile,
    CafeCartDesktop,
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