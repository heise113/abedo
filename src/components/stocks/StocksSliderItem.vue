<template>
  <StocksSliderDesktop
      v-if="width > 768"
  />
  <StocksSliderMobile
      v-else
  />
</template>

<script>
import StocksSliderMobile from "@/components/stocks/StocksSliderMobile";
import StocksSliderDesktop from "@/components/stocks/StocksSliderDesktop";

export default {
  components: {
    StocksSliderMobile,
    StocksSliderDesktop,
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