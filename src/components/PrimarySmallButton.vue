<template>
  <button class="primary-small-button">
    <img class="primary-small-button__icon" :src="require('@/assets/icons/Chevron right.svg')">
    <span class="primary-small-button__text text-small-regular">
        Small big
    </span>
    <img class="primary-small-button__icon" :src="require('@/assets/icons/Chevron right.svg')">
  </button>
</template>

<script>
export default {
  name: "PrimarySmallButton"
}
</script>

<style lang="scss" scoped>
.primary-small-button {
  background: var(--yellow-gold-point);
  padding: 6px 10px;
  border-radius: 8px;
  gap: 4px;
  display: flex;
  align-items: center;
  border: none;
  width: max-content;

  &:hover {
    background: var(--yellow-gold-dark);
    cursor: pointer;
  }

  &__text {
    color: var(--white);
    user-select: none;

  }

  &__icon {
    height: 10px;
    width: 10px;
  }

  &:disabled {
    background: var(--gray) border-box;
    color: var(--lines);
    cursor: default;
  }
}
</style>