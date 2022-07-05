<template>
  <CafeCartDesktop
      v-if="width > 768"
  />
  <CafeCartMobile
      v-else
  />
</template>

<script>
import CafeCartMobile from "@/components/cafe/CafeCartMobile";
import CafeCartDesktop from "@/components/cafe/CafeCartDesktop";

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