<template>
  <!-- <Desktop
      v-if="width > 768"
  />
  <Mobile
      v-else
  /> -->
  <Mobile
      v-if="width < 768"
  />
</template>

<script>
import Mobile from "@/components/stocks/main-page/Mobile.vue";
import Desktop from "@/components/stocks/main-page/Desktop.vue";

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
