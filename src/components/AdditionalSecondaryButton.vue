<template>
  <button class="additional-secondary-button">
    <img class="additional-secondary-button__icon" :src="require('@/assets/icons/Chevron right.svg')" >
    <span class="additional-secondary-button__text text-normal-regular">
        Button big
    </span>
    <img class="additional-secondary-button__icon" :src="require('@/assets/icons/Chevron right.svg')" >
  </button>
</template>

<script>
export default {
  name: "AdditionalSecondaryButton"
}
</script>

<style lang="scss" scoped>
.additional-secondary-button {
  background: var(--white);
  padding: 8px 24px;
  border-radius: 10px;
  gap: 8px;
  display: flex;
  align-items: center;
  border:none;
  width: max-content;
  color: var(--yellow-gold-500);

  &:hover{
    color: var(--white);
    background: var(--yellow-gold-dark);
    cursor: pointer;
  }

  &__icon{
    height: 16px;
    width: 16px;
  }

  &__text{
    user-select: none;
  }

  &:disabled{
    background: var(--gray) border-box;
    color: var(--lines);
    cursor: default;
  }
}
</style>