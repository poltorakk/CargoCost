<template>
  <div class="cardInput" :class="{ 'cardInput--time': CardInputTime }">
    <div class="cardInput__text text-normal-regular">
      <div class="cardInput__title">{{ title }}</div>
      <div class="cardInput__placeholder">{{ placeholder }}</div>
    </div>
    <IconButton
      buttonType="default"
      buttonSize="large"
      icon="Time.svg"
    ></IconButton>
  </div>
</template>
<script setup>
import { defineAsyncComponent } from "vue";

const IconButton = defineAsyncComponent(() =>
  import("@/components/IconButton")
);
</script>
<script>
export default {
  name: "IntTextInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    CardInputTime: {
      type: Boolean,
      required: "true",
    },
  },
};
</script>
<style lang="scss" scoped>
.cardInput {
  border: 1px solid var(--darkact);
  border-radius: 12px;
  background-color: var(--back);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  height: 100%;
  &__text {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
  }
  &__placeholder {
    color: var(--action);
  }
  &__title {
    color: var(--letters);
    font-weight: bold;
  }
}
.cardInput--time {
  border: 1px solid var(--darkact);
  border-radius: 12px;
  background-color: var(--back);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
</style>
