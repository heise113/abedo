<template>
  <div class="wrapper">
    <div class="wrapper__header" v-if="width > ">

    </div>
    <div class="wrapper__content">

    </div>
    <div class="wrapper__footer">

    </div>
  </div>
</template>

<script>
import Header from "@/components/headers/HeaderMainDesktop.vue";
import Footer from "@/components/footer/Item.vue";

export default {
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
</style>
