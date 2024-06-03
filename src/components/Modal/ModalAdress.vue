<template>
  <div
    class="background-modal"
    v-if="isVisible"
    :class="{ blurred: isVisible }"
    @click.self="closeModal"
  >
    <div class="modal-content">
      <span class="close-button" @click="closeModal">&times;</span>
      <form class="modal-form">
        <div class="map-container"></div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "ModalAdress",
  setup() {
    const isVisible = ref(false);
    const address = ref("");

    const openModal = () => {
      isVisible.value = true;
    };

    const closeModal = () => {
      isVisible.value = false;
    };

    const confirmAddress = () => {
      console.log("Введенный адрес:", address.value);
      closeModal();
    };

    return {
      isVisible,
      address,
      openModal,
      closeModal,
      confirmAddress,
    };
  },
};
</script>
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
.map-container {
  width: 100%;
  height: 400px;
}
.modal-content {
  z-index: 9;
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
</style>
