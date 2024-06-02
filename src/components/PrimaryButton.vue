<template>
  <button class="primary-button">
    <img class="primary-button__icon" :src="require('@/assets/icons/Chevron right.svg')" >
    <span class="primary-button__text text-normal-regular">
        Button big
    </span>
    <img class="primary-button__icon" :src="require('@/assets/icons/Chevron right.svg')" >
  </button>
</template>

<script>
export default {
  name: "PrimaryButton"
}
</script>

<style lang="scss" scoped>
.primary-button {
  background: var(--yellow-gold-point);
  padding: 8px 24px;
  border-radius: 10px;
  gap: 8px;
  display: flex;
  align-items: center;
  border:none;
  width: max-content;

  &:hover{
    background: var(--yellow-gold-dark);
    cursor: pointer;
  }

  &__icon{
    height: 16px;
    width: 16px;
  }

  &__text{
    color: var(--white);
    user-select: none;
  }

  &:disabled{
    background: var(--gray) border-box;
    color: var(--lines);
    cursor: default;
  }
}
</style>