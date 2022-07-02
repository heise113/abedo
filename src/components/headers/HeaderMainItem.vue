<template>
  <HeaderDesktop
      v-if="width > 768"
  />
  <HeaderMobile
      v-else
  />
</template>

<script>
import HeaderMobile from "@/components/headers/HeaderMainMobile";
import HeaderDesktop from "@/components/headers/HeaderMainDesktop";

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