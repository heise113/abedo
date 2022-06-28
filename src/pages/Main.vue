<template>
  <div class="wrapper">
    <Header/>
    <Categories/>
    <main class="content">
      <Stocks/>
      <Cafe/>
    </main>
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Categories from '@/components/Categories'
import Stocks from "@/components/Stocks"
import Cafe from "@/components/Cafe"
import Footer from "@/components/footer/Footer"

export default {
  components: {
    Header,
    Categories,
    Stocks,
    Cafe,
    Footer,
  }
}

</script>

<style lang="scss" scoped>

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F7F7F9;
}


.content {
  padding-left: 20px;
  padding-right: 20px;
}


</style>