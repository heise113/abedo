<template>
   <div class="wrapper-message">
     <slot></slot>
   </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";

.wrapper-message {
  border: 1px solid #f95738;
  border-radius: 20px;
  background: #dde2f2;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #f95738;
  margin-top: 30px;
  padding: 20px 30px;

  animation: show 3s;

  @keyframes show {
    0%, 100% {
      opacity: 0;
      padding-top: 0;
      padding-bottom: 0;
    }

    25%, 80% {
      opacity: 1;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
}

</style>