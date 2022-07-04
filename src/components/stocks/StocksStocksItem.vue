<template>
  <StocksStocksDesktop
      v-if="width > 768"
  />
  <StocksStocksMobile
      v-else
  />
</template>

<script>
import StocksStocksMobile from "@/components/stocks/StocksStocksMobile";
import StocksStocksDesktop from "@/components/stocks/StocksStocksDesktop";

export default {
  components: {
    StocksStocksMobile,
    StocksStocksDesktop,
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