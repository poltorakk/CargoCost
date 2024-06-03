<template>
  <div class="main-int-input">
    <div class="main-int-input__title-input">
      <span class="main-int-input__title text-normal-regular">
        {{ title }}
      </span>
      <div class="main-int-input__below-input">
        <div class="int-text-input">
          <div class="int-text-input__icon-text">
            <div
              class="int-text-input__icon2"
              v-show="inputType === 'email'"
            ></div>
            <input
              :type="inputType"
              class="int-text-input__input text-normal-regular"
              :placeholder="getPlaceholder()"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
            />
          </div>
        </div>
      </div>
      <span class="main-int-input__below text-small-regular"
        >{{ description }}
        <span class="text-small-semi-bold">
          {{ descriptionAdditional }}
        </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "IntTextInput",
  props: {
    inputType: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    descriptionAdditional: {
      type: String,
      default: "",
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: undefined,
    },
    modelValue: {
      type: String,
      required: true,
    },
    colorlessIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconURL() {
      return "url('" + this.iconPath + "')";
    },
    iconPath() {
      if (this.icon === "") {
        return;
      }
      return "/assets/icons/" + this.icon;
    },
  },
  methods: {
    getPlaceholder() {
      if (this.placeholder) {
        return this.placeholder;
      }

      switch (this.inputType) {
        case "number":
          return "0.00";
        case "email":
          return "Enter your email";
        case "password":
          return "Enter your password";
        default:
          return "Enter text";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
//Убрать счетчик для числового поля
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="email"]::-webkit-inner-spin-button,
input[type="email"]::-webkit-outer-spin-button {
  padding: 0;
}

//Основание input
.int-text-input {
  background: var(--white);
  border-radius: 14px;
  padding: 10px 16px 10px 16px;
  display: flex;
  border: 1px solid var(--darkact);
  width: 340px;
  max-width: 100%;
  height: auto;
  color: var(--darkact);
  justify-content: space-between;
  box-sizing: border-box;
  background: linear-gradient(var(--white), var(--white)) padding-box,
    var(--yellow-gold-stripe);
  align-items: center;

  &:hover {
    border: 1px solid transparent;
    color: var(--action);
    box-shadow: 0 0 10px rgba(232, 189, 106, 0.5);
    cursor: pointer;
  }

  &:hover &__icon {
    background: var(--action);
    transition: background-color 0.7s ease;
  }

  &__below,
  &__title {
    color: var(--gray);
    padding: 0px 0px 0px 16px;
    gap: 4px;
  }

  &__input {
    background: transparent;
    border: 0;
    outline: 0;
    color: var(--darkact);
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
    color: var(--darkact);
    transition: color 0.5s ease;
  }

  &__icon-text {
    gap: 8px;
    display: flex;
    align-items: center;
  }

  &__icon {
    height: 20px;
    width: 20px;
    cursor: default;
    background: var(--darkact);
    mask-image: url("@/assets/icons/Show.svg");
    mask-size: 21px;
  }

  &__icon2 {
    height: 20px;
    width: 20px;
    cursor: default;
    background: var(--yellow-gold-stripe);
    mask-image: url("@/assets/icons/Mail.svg");
    mask-size: cover;
    display: inline-block;
  }

  &:disabled {
    color: var(--lines);
    background-color: var(--gray);
  }
}

.main-int-input {
  &__title {
    color: var(--gray);
    padding: 0px 0px 0px 16px;
  }

  &__below {
    color: var(--gray);
    padding: 0px 0px 0px 16px;
    gap: 4px;
    display: flex;
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
</style>
