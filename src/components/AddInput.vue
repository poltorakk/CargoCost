<template>
  <div class="main-int-input">
    <div class="main-int-input__title-input">
      <div class="int-text-input">
        <div class="int-text-input__icon-text">
          <div class="container_icons">
            <div class="icon-button__button" @click="decrement()">
              <div class="icon-button__icon"></div>
            </div>
            <div class="icon-button2__button" @click="increment()">
              <div class="icon-button2__icon"></div>
            </div>
          </div>
          <div class="int-text-input__all-input">
            <span class="int-text-input__text text-normal-regular">
              {{ title }}</span
            >
            <input
              type="number"
              class="int-text-input__input text-normal-regular"
              :placeholder="placeholder"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "AddInput",
  props: {
    inputType: {
      type: String,
      default: "text",
    },
    title: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const localValue = ref(props.modelValue);

    const handleInput = (event) => {
      localValue.value = event.target.value;
      emit("update:modelValue", localValue.value);
    };

    const increment = () => {
      localValue.value = Number(localValue.value) + 1;
      emit("update:modelValue", localValue.value);
    };

    const decrement = () => {
      localValue.value = Number(localValue.value) - 1;
      emit("update:modelValue", localValue.value);
    };

    return {
      localValue,
      handleInput,
      increment,
      decrement,
    };
  },
};
</script>

<style lang="scss" scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="email"]::-webkit-inner-spin-button,
input[type="email"]::-webkit-outer-spin-button {
  padding: 0;
}
.int-text-input {
  background: var(--bars);
  border-radius: 14px;
  padding: 10px 16px 10px 16px;
  display: flex;
  border: 1px solid var(--darkact);
  width: 100%;
  max-width: 100%;
  color: var(--darkact);
  justify-content: space-between;
  box-sizing: border-box;
  background: linear-gradient(var(--white), var(--white)) padding-box,
    var(--yellow-gold-stripe);
  align-items: center;

  &:hover {
    border: 1px solid transparent;
    color: var(--darkact);
    box-shadow: 0 0 10px rgba(232, 189, 106, 0.5);
    cursor: pointer;
  }

  &:hover &__icon {
    background: var(--active);
    transition: background-color 0.7s ease;
  }

  &__input {
    background: transparent;
    border: 0;
    outline: 0;
    color: var(--darkact);
    width: 80%;
  }

  &__input::placeholder {
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  &__input:hover {
    color: var(--active);
    transition: color 0.5s ease;
  }

  &__icon-text {
    width: 147px;
    gap: 16px;
    display: flex;
    align-items: center;
  }

  &__all-input {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  &__text {
    color: var(--letters);
    font-weight: bold;
  }
  &__icon {
    height: 20px;
    width: 20px;
    cursor: default;
    background: var(--darkact);
    mask-image: url("@/assets/icons/Show.svg");
    mask-size: 20px;
    z-index: 2;
  }

  &__gold {
    background: var(--yellow-gold-point) border-box;
    border: 1px solid transparent;

    & .icon-button__icon {
      background: var(--white);
    }
  }

  &:disabled {
    color: var(--lines);
    background-color: var(--gray);
  }
}

.icon-button {
  &__button {
    padding: 4px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__button &__icon {
    height: 10px;
    width: 10px;
    mask-size: 10px;
  }

  &__button {
    background: var(--action) border-box;
    border: 1px solid transparent;

    & .icon-button__icon {
      mask-image: url("@/assets/icons/Minus.svg");
      background: var(--white);
    }
  }
}

.icon-button2 {
  &__button {
    padding: 4px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__button &__icon {
    height: 10px;
    width: 10px;
    mask-size: 10px;
  }

  &__button {
    background: var(--action) border-box;
    border: 1px solid transparent;

    & .icon-button2__icon {
      mask-image: url("@/assets/icons/Add.svg");
      background: var(--white);
    }
  }
}

.main-int-input {
  &__title,
  &__below {
    color: var(--gray);
    padding: 0px 0px 0px 16px;
  }

  &__title-input {
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  &__below-input {
    gap: 4px;
    display: flex;
    flex-direction: column;
  }
}
.container_icons {
  gap: 2px;
  display: flex;
  flex-direction: column-reverse;
}
</style>
