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
    <div class="title">Позвонить</div>
    <div class="modal-content">
      <span class="close-button" @click="closeModalPhone()">&times;</span>
      <br />
      <div class="main-content text-normal-request">
        <CopyButton number="+7 (978) 980-04-12"></CopyButton>
        <div class="main-content__text text-normal-request">
          Скопируйте один из номеров
        </div>
        <CopyButton number="+7 (978) 972-67-90"></CopyButton>
        <div class="main-content__text text-normal-request">
          Позвоните к нам
        </div>
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
  width: 450px;
  max-width: 100%;
  position: relative;
  top: 250px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  max-width: 80%;
  margin: 0 auto;
  padding: 15px;
  width: 450px;
  background-color: var(--back);
  border: 1px solid var(--darkact);
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: transparent;
  font-size: 25px;
  position: relative;
  top: 250px;
}
.main-content {
  background-color: var(--white);
  display: flex;
  gap: 5px;
  flex-direction: column;
  &__text {
    font-size: 25px;
    text-align: center;
  }
}
</style>
