<template>
  <InfoText
    v-if="width > 768"
  />
</template>

<script>
import InfoText from "@/components/infotext/InfoText.vue";

export default {
  components: {
    InfoText
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