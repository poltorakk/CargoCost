<template>
  <div class="cardInputBefore__icon-div">
    <div class="cardInputBefore__icon"></div>
  </div>
  <div
    class="cardInput"
    :class="{ 'cardInput--time': CardInputTime }"
    @click="openModal"
  >
    <div class="cardInput__text text-normal-regular">
      <div class="cardInput__title">{{ title }}</div>
      <input
        class="cardInput__placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
  <ModalAdress ref="modal" />
</template>
<script setup></script>
<script>
import ModalAdress from "@/components/Modal/ModalAdress.vue";
export default {
  name: "IntTextInput",
  components: {
    ModalAdress,
  },
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
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    openModal() {
      this.$refs.modal.openModal();
    },
  },
};
</script>
<style lang="scss" scoped>
.cardInput {
  cursor: pointer;
  border: 1px solid var(--darkact);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: var(--white);
  padding: 10px 20px;
  justify-content: space-between;
  height: auto;
  width: 150px;
  margin-right: 2%;
  &__text {
    font-size: 14px;
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
    font-size: 13px;
    line-height: 100%;
  }
}
.cardInputBefore {
  cursor: pointer;
  &__icon-div {
    border: 1px solid var(--darkact);
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: var(--nowhite);
    align-items: center;
    display: flex;
    width: 50px;
    justify-content: center;
    border-right-width: 0px;
    height: auto;
  }
  &__icon {
    height: 20px;
    width: 15px;
    cursor: default;
    background: var(--darkact);
    mask-image: url("@/assets/icons/Twoline.svg");
    mask-size: 16px;
    display: inline-block;
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
