<template>
  <Desktop
    v-if="width > 768"
  />
  <Mobile
    v-else
  />
</template>

<script>

import Desktop from '@/components/basket/Desktop'
import Mobile from '@/components/basket/Mobile'


export default {
  data() {
    return {
      width: innerWidth,
    };
  },

  components: {
    Mobile,
    Desktop,
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
@import "@/assets/styles/styles.scss";


</style>