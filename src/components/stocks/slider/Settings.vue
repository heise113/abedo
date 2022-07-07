<template>
  <Desktop
      v-if="width > 768"
  />
  <Mobile
      v-else
  />
</template>

<script>
import Mobile from "@/components/stocks/slider/Mobile.vue";
import Desktop from "@/components/stocks/slider/Desktop.vue";

export default {
  components: {
    Mobile,
    Desktop,
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