<template>
  <button class="summary-button">
    <span class="summary-button__text text-normal-regular"> Оформить за </span>
    <span class="summary-button__summary text-normal-regular"> 1000</span>
  </button>
</template>

<script>
export default {
  name: "summaryButton",
  props: {
    summary: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.summary-button {
  background: var(--action);
  padding: 8px 24px;
  border-radius: 10px;
  gap: 2px;
  display: flex;
  align-items: center;
  border: 1px solid var(--action);
  flex-direction: column;
  width: 50%;

  &:hover {
    cursor: pointer;
    background: var(--swact);
    box-shadow: 0px 0px 15px var(--darkact);
    border-color: var(--shaw);
  }

  &__icon {
    height: 16px;
    width: 16px;
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
  &__summary {
    background: var(--swact);
    padding: 2px 20px;
    border-radius: 12px;
    color: var(--white);
  }
}
</style>
