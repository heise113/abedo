<template>

  <div class="ssd-wrapper">
    <div class="ssd-wrapper__container">
      <div class="ssd-wrapper__container__header">
        <div class="ssd-wrapper__container__header__title">
          Акции
        </div>
      </div>
      <div class="ssd-wrapper__container__stocks-list">

        <StocksBlock
          v-for="item in stocksList"
          :item="item"
          :key="item.id"
        />

      </div>
    </div>
  </div>

</template>

<script>

import StocksBlock from "@/components/stocks/StocksBlock.vue"

export default {
  data() {
    return {
      stocksList: [
        {
          id: 1,
          title: 'Кафе “Лимончелло”',
          description: 'Получайте 1% бонусами и скидку до 99% ',
          backgroundColor: 'blue',
          backgroundImage: 'stocks-background.png',
          logo: 'stocks-logo.png',
        },
        {
          id: 2,
          title: 'Кафе “Лимончелло”',
          description: 'Получайте 1% бонусами и скидку до 99% ',
          backgroundColor: 'red',
          backgroundImage: 'stocks-background.png',
          logo: '',
        },
        {
          id: 3,
          title: 'Кафе “Лимончелло”',
          description: 'Получайте 1% бонусами и скидку до 99% ',
          backgroundColor: 'blue',
          backgroundImage: 'stocks-background.png',
          logo: 'stocks-logo.png',
        },
        {
          id: 4,
          title: 'Кафе “Лимончелло”',
          description: 'Получайте 1% бонусами и скидку до 99% ',
          backgroundColor: 'red',
          backgroundImage: 'stocks-background.png',
          logo: '',
        },
        {
          id: 5,
          title: 'Кафе “Лимончелло”',
          description: 'Получайте 1% бонусами и скидку до 99% ',
          backgroundColor: 'blue',
          backgroundImage: 'stocks-background.png',
          logo: 'stocks-logo.png',
        },
        {
          id: 6,
          title: 'Кафе “Лимончелло”',
          description: 'Получайте 1% бонусами и скидку до 99% ',
          backgroundColor: 'yellow',
          backgroundImage: 'stocks-background.png',
          logo: 'stocks-logo.png',
        },
        {
          id: 7,
          title: 'Кафе “Лимончелло”',
          description: 'Получайте 1% бонусами и скидку до 99% ',
          backgroundColor: 'green',
          backgroundImage: 'stocks-background.png',
          logo: 'stocks-logo.png',
        },
        {
          id: 8,
          title: 'Кафе “Лимончелло”',
          description: 'Получайте 1% бонусами и скидку до 99% ',
          backgroundColor: 'yellow',
          backgroundImage: '',
          logo: 'stocks-logo.png',
        },
        {
          id: 9,
          title: 'Кафе “Лимончелло”',
          description: 'Получайте 1% бонусами и скидку до 99% ',
          backgroundColor: 'yellow',
          backgroundImage: '',
          logo: 'stocks-logo.png',
        },
      ]
    }
  },
  components: {
    StocksBlock,
  }
}

</script>

<style scoped lang="scss">

@import "@/assets/styles.scss";

@media (max-width: 1100px) {
  .ssd-wrapper__container__stocks-list {
    grid-template-columns: 1fr 1fr;
  }
}

.ssd-wrapper {
  padding-top: 38px;
  padding-bottom: 100px;
  background-color: $PEARL;

  &__container {
    max-width: $CONTAINER-WIDTH;
    width: 100%;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px;

    &__header {
      margin-bottom: 70px;

      &__title {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        color: $MACHINE-GUN-METAL;
      }
    }

    &__stocks-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 30px;
      row-gap: 58px;
    }
  }
}

@media (max-width: 1340px) {
  .ssd-wrapper__container__stocks-list {
    justify-content: center;
    grid-template-columns: 403px 403px;
  }
}

@media (max-width: 870px) {
  .ssd-wrapper__container__stocks-list {
    justify-content: center;
    grid-template-columns: 403px;
  }
}

</style>