<template>
  <button class="primary-button">
    <span class="primary-button__text text-normal-regular"> {{ title }} </span>
    <div
      :style="{
        'background-image': `url(${require(`@/assets/icons/${icon}`)})`,
      }"
      class="primary-button__icon"
    ></div>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    title: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style lang="scss" scoped>
.primary-button {
  background: var(--darkact);
  padding: 8px 24px;
  border-radius: 15px;
  gap: 8px;
  display: flex;
  align-items: center;
  border: none;
  width: max-content;

  &:hover {
    background: var(--action);
    cursor: pointer;
    box-shadow: 0 0 10px var(--letters);
  }

  &__icon {
    height: 24px;
    width: 24px;
    background-size: cover;
  }

  &__text {
    color: var(--white);
    user-select: none;
  }

  &:disabled {
    background: var(--gray) border-box;
    color: var(--lines);
    cursor: default;
  }
}
</style>
