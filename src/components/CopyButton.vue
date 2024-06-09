<template>
  <button class="copyButton" @click="copyToClipboard()">
    <span class="copyButton__number text-normal-regular">
      {{ number }}
    </span>
    <div class="copyButton__texts">
      <div class="copyButton__text text-normal-regular">Скопировать</div>
      <img :src="require('@/assets/icons/Copy.svg')" class="copyButton__icon" />
    </div>
  </button>
  <Toast />
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";

import { defineProps } from "vue";

const toast = useToast();
const props = defineProps({
  number: String,
});

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(props.number)
    .then(() => {
      console.log(props.number);
      toast.add({
        label: "Success",
        severity: "success",
        summary: "Номер скопирован в буфер обмена!",
        life: 3000,
      });
    })
    .catch((error) => {
      console.error("Ошибка копирования в буфер обмена:", error);

      toast.add({
        label: "Eroror",
        severity: "eroror",
        summary: "Ошибка копирования в буфер обмена.",
        life: 3000,
      });
    });
};
</script>

<style lang="scss" scoped>
.copyButton {
  flex-direction: column-reverse;
  background: var(--action);
  padding: 15px 24px;
  border-radius: 10px;
  gap: 8px;
  display: flex;
  align-items: center;
  border: none;
  width: auto;

  &:hover {
    background: var(--darkact);
    cursor: pointer;
  }

  &__icon {
    height: 20px;
    width: 20px;
  }

  &__text {
    color: var(--white);
    user-select: none;
    text-decoration: underline;
  }

  &__number {
    color: var(--white);
    user-select: none;
    font-size: 25px;
  }
  &:disabled {
    background: var(--gray) border-box;
    color: var(--lines);
    cursor: default;
  }

  &__texts {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: flex-end;
    margin-left: 70%;
  }
}
</style>
