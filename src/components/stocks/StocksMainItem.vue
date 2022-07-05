<template>
  <!-- <StocksMainDesktop
      v-if="width > 768"
  />
  <StocksMainMobile
      v-else
  /> -->
  <StocksMainMobile
      v-if="width < 768"
  />
</template>

<script>
import StocksMainMobile from "@/components/stocks/StocksMainMobile";
import StocksMainDesktop from "@/components/stocks/StocksMainDesktop";

export default {
  components: {
    StocksMainMobile,
    StocksMainDesktop,
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
