<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <div class="CardInfo">
    <div class="CardInfo__divicontitle">
      <div
        class="CardInfo__icon"
        :style="{
          'background-image': `url(${require(`@/assets/img/${icon}`)})`,
        }"
      ></div>
      <span class="CardInfo__title text-normal-regular"> {{ title }}</span>
    </div>
    <span class="CardInfo__text text-normal-regular"> {{ text }}</span>
  </div>
</template>
<style lang="scss" scoped>
.CardInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  padding: 35px 35px;
  box-shadow: 0px 0px 15px rgba(112, 112, 112, 0.2);
  width: 80%;
  &__text {
    font-size: 19px;
    text-align: justify;
    color: var(--letters);
    line-height: 30px;
  }
  &__icon {
    width: 55px;
    height: 55px;
    margin-bottom: 10px;
    background-size: cover;
  }
  &__title {
    margin: 30px 0px;
    font-size: 20px;
    font-weight: bold;
  }
  &__divicontitle {
    display: flex;
    gap: 30px;
  }
}
</style>
