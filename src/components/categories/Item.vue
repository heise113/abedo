<template>
  <CategoriesDesktop
      v-if="width > 768"
  />
  <CategoriesMobile
      v-else
  />
</template>

<script>
import CategoriesMobile from "@/components/categories/CategoriesMobile";
import CategoriesDesktop from "@/components/categories/CategoriesDesktop";

export default {
  components: {
    CategoriesMobile,
    CategoriesDesktop,
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