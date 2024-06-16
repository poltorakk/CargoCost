<template>
  <div :class="[`dropdown-menu dropdown-menu__${size}`]">
    <span class="dropdown-menu__title text-normal-regular">{{ title }}</span>

    <div class="dropdown-menu__button-and-menu">
      <button
        type="button"
        class="dropdown-menu__button"
        @click="toggleDropdown"
      >
        <div class="dropdown-menu__text-icon">
          <div
            v-if="showIcon"
            class="dropdown-menu__icon3"
            :style="{
              '-webkit-mask-image': `url(${require(`../assets/icons/${icon}`)})`,
              'mask-image': `url(${require(`../assets/icons/${icon}`)})`,
            }"
          ></div>
          <span class="text-normal-regular">{{ buttonText }}</span>
        </div>
        <img
          class="dropdown-menu__icon-chevron-down"
          :class="{ 'hide-icon': isOpen }"
        />
      </button>
      <div class="dropdown-menu__menu" v-if="isOpen">
        <ul class="dropdown-menu__ul text-normal-regular">
          <li
            class="dropdown-menu__li"
            v-for="(item, index) in options"
            :key="index"
            @click="selectOption(item)"
          >
            <div class="dropdown-menu__li-text">
              <div
                v-if="showIcon"
                class="dropdown-menu__icon2"
                :style="{
                  '-webkit-mask-image': `url(${require(`../assets/icons/${icon}`)})`,
                  'mask-image': `url(${require(`../assets/icons/${icon}`)})`,
                }"
              ></div>
              <span class="text-normal-regular">
                {{
                  item.name && item.name.length > 11
                    ? item.name.slice(0, 11) + "..."
                    : item.name || item
                }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <span class="dropdown-menu__below text-small-regular"
      >{{ description }}
      <span class="text-small-semi-bold">
        {{ descriptionAdditional }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    descriptionAdditional: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number, Object],
      required: false,
    },
    icon: {
      type: String,
      default: undefined,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    buttonTextProp: {
      type: String,
      default: "Select",
    },
    size: {
      type: String,
      default: "small",
      validator: function (value) {
        return ["small", "medium", "large"].includes(value);
      },
    },
  },
  data() {
    return {
      isOpen: false,
      buttonText: this.buttonTextProp || "Select",
    };
  },
  watch: {
    modelValue(newValue) {
      this.buttonText = (newValue && newValue.name) || this.buttonTextProp;
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
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.buttonText = option.name || option;
      this.toggleDropdown();
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--letters);
  &__small {
    min-width: 172px;
  }

  &__medium {
    min-width: 300px;
  }

  &__large {
    min-width: 100%;
  }

  &__button {
    cursor: pointer;
    background: var(--white);
    border-radius: 12px;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    width: 100%;
    height: 40px;
    color: var(--darkact);
    padding: 10px 16px 10px 16px;
    justify-content: space-between;

    &:hover,
    &:active {
      color: var(--action);
      transition: color 0.5s ease, border 1s ease;
      border: 1px solid var(--action);

      &__menu {
        color: var(--action);
        transition: color 0.5s ease;
      }
    }
  }

  &__text-icon {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__button-and-menu {
    position: relative;
    width: 100%;
  }

  &__menu {
    position: absolute;
    margin-top: 2px;
    z-index: 1;
    border: 1px solid transparent;
    border-radius: 12px;
    width: calc(100%);
    background: var(--white);
    overflow-y: auto;
    padding: 8px 8px 8px 0px;
    align-items: center;
    align-content: space-between;
    color: var(--darkact);
    &:hover,
    &:active {
      color: var(--action);
      transition: color 0.5s ease;

      &__button {
        background: var(--white);
        transition: background-color 0.7s ease;
      }
    }
  }

  &__ul {
    box-sizing: border-box;
    margin: 0;
    max-width: 100%;
    overflow-y: auto;
    max-height: 178px;
    padding: 0 8px 0 0;

    &::-webkit-scrollbar {
      position: absolute;
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: var(--gray);
      border-radius: 4px;
      scrollbar-arrow-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: var(--light-gray);
    }
  }

  &__li {
    background: linear-gradient(var(--white), var(--white)) padding-box,
      var(--yellow-gold-stripe) border-box;
    border: 1px solid var(--white);
    position: relative;
    margin: 1px 0;
    display: flex;
    list-style-type: none;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px 12px 16px;

    &:hover {
      border: 1px solid transparent;
      border-radius: 20px;
      transition: color 0.5s ease, border 1s ease;
    }
  }

  &__icon2 {
    height: 15px;
    width: 15px;
    cursor: default;
    background: var(--action);
    mask-size: 15px;
    display: inline-block;
  }

  &__icon3 {
    height: 15px;
    width: 15px;
    cursor: default;
    background: var(--action);
    mask-size: 15px;
    display: inline-block;
    align-items: center;
  }

  &__icon {
    height: 12px;
    width: 12px;
    cursor: default;
    display: inline-block;
    mask-size: 12px;
    background-color: var(--green-500);
  }

  &__icon-chevron-down {
    height: 17px;
    width: 17px;
    cursor: default;
    background: var(--action);
    mask-image: url("../assets/icons/ChevronDown.svg");
    mask-size: 17px;
    display: inline-block;
    transition: 0.5 ease;
  }

  &__li-text {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__below,
  &__title {
    color: var(--gray);
    padding: 0px 0px 0px 16px;
    gap: 4px;
  }

  &__icon-chevron-down.hide-icon {
    transform: rotate(180deg);
    transition: 0.5 ease;
  }
}
</style>
