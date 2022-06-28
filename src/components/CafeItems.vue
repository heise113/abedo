<template>
  <div class="item-mobile">
    <div class="item-mobile__left-side">
      <svg height="30" width="30">
        <use xlink:href="@/assets/images/icons.svg#cafe-heart"></use>
      </svg>
      <div class="item-mobile__left-side__description">
        <div class="item-mobile__left-side__description__name">
          {{ cafeItem.name }}
        </div>
        <div class="item-mobile__left-side__description__cafe-description">
          {{ cafeItem.cafeDescription }}
        </div>
      </div>
    </div>
    <div class="item-mobile__right-side">
      <svg height="15" width="15">
        <use xlink:href="@/assets/images/icons.svg#cafe-arrow"></use>
      </svg>
    </div>
  </div>

  <div class="item-desktop">
    <div class="item-desktop__image" :style="{ backgroundImage: `url(https://abedo.ru${ cafeItem.image.original})` }">
    </div>
    <div class="item-desktop__text">
      <div class="item-desktop__text__title">
        {{ cafeItem.name }}
      </div>
      <div class="item-desktop__text__description">
        {{ cafeItem.description }}
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
@media (max-width: 769px) {
  .item-desktop {
    display: none;
  }

  .item-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px;
    background: #ffffff;
    border: 1px solid #dde2f2;
    border-radius: 10px;
    margin-bottom: 15px;


    &__left-side {
      display: flex;
      align-items: center;

      &__description {
        margin-left: 14px;

        &__cafe-name {
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
  }
}

@media(min-width: 769px) {
  .item-mobile {
    display: none;
  }
}
</style>
