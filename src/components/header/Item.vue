<template>
  <HeaderDesktop
      v-if="width > 768"
  />
  <HeaderMobile
      v-else
  />
</template>

<script>
import HeaderMobile from "@/components/header/HeaderMobile";
import HeaderDesktop from "@/components/header/HeaderDesktop";

export default {
  components: {
    HeaderMobile,
    HeaderDesktop,
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