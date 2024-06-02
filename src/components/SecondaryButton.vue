<template>
  <button class="secondary-button">
      <div v-if="firstIcon !== ''" class="secondary-button__icon" :style="{ maskImage: firstURL }"></div>
      <span class="secondary-button__text text-normal-regular">
          {{ buttonText }}
      </span>
      <div v-if="secondIcon !== ''" class="secondary-button__icon" :style="{ maskImage: secondURL }"></div>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';

const firstIcon = ref('');
const secondIcon = ref('');
const buttonText = ref('');

const firstURL = computed(() => {
  return firstIcon.value !== '' ? "url('/assets/icons/" + firstIcon.value + "')" : '';
});

const secondURL = computed(() => {
  return secondIcon.value !== '' ? "url('/assets/icons/" + secondIcon.value + "')" : '';
});

</script>

<style lang="scss" scoped>
.secondary-button {
  background: linear-gradient(var(--bars), var(--bars)) padding-box,
  var(--yellow-gold-stripe) border-box;
  border: 1px solid transparent;
  padding: 7px 23px;
  border-radius: 10px;
  gap: 8px;
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
    height: 16px;
    width: 16px;
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