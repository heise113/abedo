<template>
  <div class="item-mobile" @click="$router.push('/cafe-cart')">
    <div class="item-mobile__left-side">
      <div class="item-mobile__left-side__cafe-heart-svg">
        <svg height="16" width="16">
          <use xlink:href="@/assets/images/icons.svg#cafe-heart"></use>
        </svg>
      </div>
      <div class="item-mobile__left-side__description">
        <div class="item-mobile__left-side__description__cafe-name">
          {{ cafeItem.name }}
        </div>
        <div class="item-mobile__left-side__description__cafe-description">
          {{ cafeItem.cafeDescription }}
        </div>
      </div>
    </div>
    <div class="item-mobile__right-side">
      <div class="item-mobile__right-side__cafe-arrow-svg">
        <svg height="15" width="15">
          <use xlink:href="@/assets/images/icons.svg#cafe-arrow"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cafeItem: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

@import '@/assets/styles.scss';

.item-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px;
  background: #ffffff;
  border: 1px solid #dde2f2;
  border-radius: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: $SPACEMAN;

    .item-mobile__left-side__description__cafe-name {
      color: $WHITE;
    }

    .item-mobile__left-side__description__cafe-description {
      color: $WHITE;
    }

    .item-mobile__left-side__cafe-heart-svg {
      border-color: $WHITE;
    }

    .item-mobile__left-side__cafe-heart-svg svg {
      stroke: $WHITE;
    }

    .item-mobile__right-side__cafe-arrow-svg {
      stroke: $WHITE;
      fill: $WHITE;
    }
  }

  &__left-side {
    display: flex;
    align-items: center;

    &__cafe-heart-svg {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $SPACEMAN;
      padding: 6px;
      border-radius: 50%;
    }

    &__description {
      margin-left: 14px;

      &__cafe-name {
        font-family: 'SF';
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #212121;
        margin-bottom: 4px;
      }

      &__cafe-description {
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #5c6784;
      }
    }
  }

  &__right-side {
    &__cafe-arrow-svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

</style>