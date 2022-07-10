<template>
  <FooterDesktop
    v-if="width > 768"
  />
  <FooterMobile
    v-else
  />
</template>

<script>
import FooterMobile from "@/components/footer/Mobile";
import FooterDesktop from "@/components/footer/Desktop";

export default {
  components: {
    FooterMobile,
    FooterDesktop,
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
