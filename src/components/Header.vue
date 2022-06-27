<template>

  <header class="header-mobile">
    <svg height="30" width="107"><use xlink:href="@/assets/images/icons.svg#logo"></use></svg>
    <svg height="28" width="28"><use xlink:href="@/assets/images/icons.svg#profile"></use></svg>
  </header>



  <header class="header-desktop">

    <div class="container">

      <svg height="30" width="107"><use xlink:href="@/assets/images/icons.svg#logo"></use></svg>

      <div class="shop">
        <svg height="24" width="24"><use xlink:href="@/assets/images/icons.svg#header-shop"></use></svg>
        <div class="shop-text">
          Магазины
        </div>
      </div>

      <div class="profile-stocksshop">
        <div class="profile">
          <svg height="28" width="28"><use xlink:href="@/assets/images/icons.svg#profile"></use></svg>
          <div class="profile-text">
            Кабинет
          </div>
        </div>
        <div class="stocksshop">
            <svg height="24" width="24"><use xlink:href="@/assets/images/icons.svg#header-msg"></use></svg>
          <div class="stocksshop-text">
            Акции магазинов
          </div>
        </div>
      </div>

      <div class="buttons">
        <div class="search-likes">
          <div class="search-btn">
            <svg height="20" width="20"><use xlink:href="@/assets/images/icons.svg#header-search"></use></svg>
          </div>
          <div class="likes-btn">
            <svg height="20" width="20"><use xlink:href="@/assets/images/icons.svg#header-likes"></use></svg>
          </div>
        </div>
        <div class="basket-btn">
            <svg height="20" width="20"><use xlink:href="@/assets/images/icons.svg#header-basket"></use></svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script>



</script>

<style lang="scss" scoped>
  
  @media (max-width: 769px) {
    .header-desktop {
      display: none;
    }

    .header-mobile {
      padding: 15px 20px 20px 15px;
      display: flex;
      justify-content: space-between;
      background-color: #FFFFFF;
    }

  }

  @media (min-width: 769px) {
    .container {
      max-width: 1270px;
      width: 100%;
      margin: 0 auto;
    }
  }

  @media (min-width: 770px) and (max-width: 1024px) {
    .header-mobile {
      display: none;
    }

    .header-desktop {
      background-color: #FFFFFF;
    }

    .container {
      padding: 15px 20px 20px 15px;
      background-color: #FFFFFF;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .profile-stocksshop {
      display: flex;
      align-items: center;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .shop {
      padding: 10px 30px 10px 30px;
      display: flex;
      align-items: center;
      background: #5C6784;
      border-radius: 50px;
    }

    .shop-text {
      margin-left: 10px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
    }

    .profile {
      margin-right: 10px;
      display: flex;
      align-items: center;
    }

    .stocksshop {
      display: flex;
      align-items: center;
    }

    .profile-text, .stocksshop-text {
      margin-left: 10px;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #212121;
    }

    .search-likes {
      display: flex;
      margin-right: 20px;
    }

    .search-btn {
      margin-right: 20px;
    }

    .search-btn, .likes-btn, .basket-btn {
      padding: 10px;
      border: 1px solid #878787;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (min-width: 1024px){
    .header-mobile {
      display: none;
    }

    .header-desktop {
      background-color: #FFFFFF;
    }

    .container {
      padding: 15px 20px 20px 15px;
      background-color: #FFFFFF;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .profile-stocksshop {
      display: flex;
      align-items: center;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .search-btn {
      margin-right: 20px;
    }

    .search-likes {
      display: flex;
      margin-right: 60px;
    }

    .shop {
      padding: 15px 30px 15px 30px;
      display: flex;
      align-items: center;
      background: #5C6784;
      border-radius: 50px;
    }

    .shop-text {
      margin-left: 10px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
    }

    .profile {
      margin-right: 40px;
      display: flex;
      align-items: center;
    }

    .stocksshop {
      display: flex;
      align-items: center;
    }

    .profile-text, .stocksshop-text {
      margin-left: 10px;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #212121;
    }

    .search-btn, .likes-btn, .basket-btn {
      padding: 10px;
      border: 1px solid #878787;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


</style>