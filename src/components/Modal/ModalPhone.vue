<script setup>
import { ref, defineExpose } from "vue";
import CopyButton from "@/components/CopyButton.vue";

const isVisible = ref(false);

const openModalPhone = () => {
  isVisible.value = true;
  console.log(isVisible.value);
};

const closeModalPhone = () => {
  isVisible.value = false;
  console.log("tired" + isVisible.value);
};

// Экспорт функций для использования в родительских компонентах
defineExpose({
  openModalPhone,
});
</script>
<template>
  <div
    class="background-modal"
    v-if="isVisible"
    :class="{ blurred: isVisible }"
    @click.self="closeModalPhone()"
  >
    <div class="modal-content">
      <div class="title">Позвонить</div>
      <span class="close-button" @click="closeModalPhone()">&times;</span>
      <div class="main-content text-normal-request">
        <CopyButton number="+7 (978) 980-04-12"></CopyButton>
        <div class="text-normal-request">Скопируйте один из номеров</div>
        <CopyButton number="+7 (978) 972-67-90"></CopyButton>
        <div class="text-normal-request">Позвоните нам</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.background-modal {
  display: block;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: blur(5px);

  &.blurred {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(233, 237, 201, 0.5);
      filter: blur(15px);
      z-index: -10;
    }
  }
}
.modal-content {
  border: 1px solid var(--darkact);
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  max-width: 80%;
  position: relative;
  top: 250px;
}
.close-button {
  color: var(--letters);
  float: right;
  font-size: 35px;
  font-weight: bold;
}

.close-button:hover,
.close-button:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.title {
  padding: 15px;
  background-color: var(--back);
  border: 1px solid var(--darkact);
  border-bottom: transparent;
  font-size: 25px;
  margin: 5px;
}
.main-content {
  background-color: var(--white);
  display: flex;
  gap: 5px;
  flex-direction: column;
}
</style>
