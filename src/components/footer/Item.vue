<template>
  <FooterDesktop 
    :partner="partner" 
    v-if="width > 768" 
    class="partner-item" 
  />
  <FooterMobile 
    :partner="partner" 
    v-else 
    class="partner-item" 
  />
</template>

<script>
import FooterMobile from "@/components/footer/FooterMobile";
import FooterDesktop from "@/components/footer/FooterDesktop";

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
