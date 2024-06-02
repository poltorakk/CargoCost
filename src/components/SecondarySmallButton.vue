<template>
  <button class="secondary-small-button">
    <img class="secondary-small-button__icon" :src="require('@/assets/icons/Chevron right.svg')" >
    <span class="secondary-small-button__text text-small-regular">
        Button big
    </span>
    <img class="secondary-small-button__icon" :src="require('@/assets/icons/Chevron right.svg')" >
  </button>
</template>

<script>
export default {
  name: "SecondarySmallButton"
}
</script>

<style lang="scss" scoped>
.secondary-small-button {
  background: linear-gradient(var(--bars), var(--bars)) padding-box,
  var(--yellow-gold-stripe) border-box;
  border: 1px solid transparent;
  padding: 5px 9px;
  border-radius: 8px;
  gap: 4px;
  display: flex;
  align-items: center;
  color: var(--yellow-gold-500);
  width: max-content;


  &:hover {
    background: var(--yellow-gold-dark) border-box;
    border: 1px solid transparent;
    cursor: pointer;
    color: var(--white);
  }

  &__icon{
    height: 10px;
    width: 10px;
  }

  &__text {
    user-select: none;
  }

  &:disabled{
    background: var(--gray) border-box;
    border: 1px solid transparent;
    color: var(--lines);
    cursor: default;
  }
}
</style>