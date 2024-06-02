<script setup>
import { ref } from "vue";
import IntTextInput from "@/components/IntTextInput.vue";

const isVisible = ref(false);
const phoneNumber = ref("");

const openModal = () => {
  isVisible.value = true;
};

const closeModal = () => {
  isVisible.value = false;
};
</script>
<template>
  <div
    class="background-modal"
    v-if="isVisible"
    :class="{ blurred: isVisible }"
  >
    <div class="modal-content">
      <span class="close-button" @click="closeModal">&times;</span>
      <div class="main-content text-normal-request">
        <div class="main-content__title">Обратный звонок</div>
        <div class="main-content__form">
          <IntTextInput
            placeholder="+7-ххх-ххх-ххх"
            Inputype="text"
            title="Телефон"
            v-model="phoneNumber"
            v-mask="'+7-###-###-##-##'"
          ></IntTextInput>
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
  width: 300px;
  max-width: 80%;
  text-align: center;
  position: relative;
  top: 250px;
  &__title {
    border: 1px solid var(--darkact);
    border-bottom: transparent;
  }
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
.main-content {
  background-color: var(--white);
}
</style>
