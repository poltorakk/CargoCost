<template>
  <div
    class="background-modal"
    v-if="isVisible"
    :class="{ blurred: isVisible }"
    @click.self="closeModal"
  >
    <div class="modal-content">
      <form class="modal-form">
        <span class="close-button" @click="closeModal">&times;</span>
        <div class="map-style">
          <YandexMap @mapClick="HandMapClick(data)" />
          <div class="vmodel-content">
            <label for="adrespo" class="text"
              >Выберите адрес погрузки меткой на карте</label
            >
            <IntTextInput
              placeholder="Адрес погрузки"
              id="adrespo"
              :readonly="isReadonly"
            ></IntTextInput>
            <label for="adresvi" class="text"
              >Выберите адрес погрузки меткой на карте</label
            >
            <IntTextInput
              placeholder="Адрес выгрузки"
              id="adresvi"
              :readonly="isReadonly"
            ></IntTextInput>
            <label for="comment" class="text">Комментарий к заказу</label>
            <IntTextInput
              placeholder="Комментарий"
              id="comment"
              :readonly="isReadonly"
            ></IntTextInput>
            <PrimaryButton
              class="button"
              title="Подтвердить"
              icon="Success.svg"
            ></PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref, defineAsyncComponent } from "vue";
import YandexMap from "@/components/YandexMap.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
const IntTextInput = defineAsyncComponent(() =>
  import("@/components/IntTextInput")
);
export default {
  name: "ModalAdress",
  components: {
    YandexMap,
    IntTextInput,
    PrimaryButton,
  },
  data() {
    return {
      isReadonly: true,
    };
  },
  methods: {
    HandMapClick(data) {
      const coords = data.coords;
      const address = data.address;
      console.log(data);
      console.log("Координаты:", coords);
      console.log("Адрес:", address);
    },
  },
  setup() {
    const isVisible = ref(false);

    const openModal = () => {
      isVisible.value = true;
    };

    const closeModal = () => {
      isVisible.value = false;
    };

    return {
      isVisible,
      openModal,
      closeModal,
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
  margin: 0 auto;
  border-radius: 16px;
}
.modal-form {
  margin: 0 auto;
  width: 80%;
  height: 40%;
  border-radius: 16px;
  background-color: var(--white);
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
.map-container {
  margin-top: 30px;
  padding: 10px 10px;
  border-radius: 15px;
  border: 1px solid var(--darkact);
  box-shadow: 0 0 50px var(--darkact);
}
.map-style {
  padding: 16px 16px;
  border-radius: 15px;
  border: 1px solid var(--darkact);
  box-shadow: 0 0 50px var(--darkact);
  display: flex;
  gap: 20px;
  margin-top: 100px;
}
.vmodel-content {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.button {
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.text {
  text-align: center;
}
</style>
