<template>
  <div class="wrapper">
    <Header class="wrapper__header"
        v-if="width > 768"
    />
    <div class="wrapper__content">
      <Content/>
    </div>
    <div class="wrapper__footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Desktop.vue";
import Footer from "@/components/footer/Settings.vue";
import Content from "@/components/basket/Settings"

export default {
  data() {
    return {
      width: innerWidth,
    };
  },

  components: {
    Header,
    Content,
    Footer,
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

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    position: sticky;
    top: 0;
    z-index: 5;
  }

  &__content {
    background-color: $PEARL;
    flex: 1 0 auto;
  }

  &__footer {
    flex: 0 0 auto
  }
}

</style>
