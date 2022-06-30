<template>

  <footer class="footer">
    <div class="footer-inner">
      <a href="#"><svg height="24" width="24"><use xlink:href="@/assets/images/icons.svg#footer-main"></use></svg></a>
      <a href="#"><svg height="18" width="20"><use xlink:href="@/assets/images/icons.svg#footer-likes"></use></svg></a>
      <a href="#"><svg height="20" width="20"><use xlink:href="@/assets/images/icons.svg#footer-basket"></use></svg></a>
      <a href="#"><svg height="19" width="19"><use xlink:href="@/assets/images/icons.svg#footer-search"></use></svg></a>
      <a href="#"><svg height="24" width="24"><use xlink:href="@/assets/images/icons.svg#footer-different"></use></svg></a>
    </div>
  </footer>

</template>

<script>



</script>

<style lang="scss" scoped>

.footer {
  padding-right: 20px;
  padding-left: 20px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

</style>