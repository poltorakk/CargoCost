<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    item_1: {
      type: String,
      required: true,
    },
    item_2: {
      type: String,
      required: true,
    },
    item_3: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    type2: {
      type: String,
      required: true,
    },
    type3: {
      type: String,
      required: true,
    },
    mini_title: {
      type: String,
      required: true,
    },
  },
  methods: {
    navigateToMainPages() {
      this.$router.push({ name: "MainPages" });
    },
  },
};
</script>

<template>
  <div class="Card">
    <div class="Card__div-icon">
      <div
        class="Card__icon"
        :style="{
          'background-image': `url(${require(`@/assets/img/${icon}`)})`,
        }"
      ></div>
    </div>
    <div class="Card__text">
      <div class="Card__text-title-main">
        <div class="Card__text-title text-normal-regular">{{ title }}</div>
        <div class="Card__title-mini text-normal-regular">
          {{ mini_title }}
        </div>
      </div>
      <div class="Card__text-content text-normal-regular">{{ content }}</div>
    </div>
    <div class="Card__type">
      <div class="Card__type-item">
        <div
          class="Card__type-icon"
          :style="{
            'background-image': `url(${require(`@/assets/img/${item_2}`)})`,
          }"
        ></div>
        <div class="Card__type-title">{{ type }}</div>
      </div>
      <div class="Card__type-item">
        <div
          class="Card__type-icon"
          :style="{
            'background-image': `url(${require(`@/assets/img/${item_1}`)})`,
          }"
        ></div>
        <div class="Card__type-title">{{ type2 }}</div>
      </div>
      <div class="Card__type-item">
        <div
          class="Card__type-icon"
          :style="{
            'background-image': `url(${require(`@/assets/img/${item_3}`)})`,
          }"
        ></div>
        <div class="Card__type-title">{{ type3 }}</div>
      </div>
      <div class="Card__route-button" @click="navigateToMainPages">
        Заказать от 1000р/час
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Card {
  border: 1px solid var(--darkact);
  padding: 20px 16px;
  border-radius: 16px;
  box-shadow: 0 0 30px var(--light-gray);
  display: flex;
  gap: 5px;
  align-items: center;
  height: 450px;
  width: 80%;
  &__div-icon {
    padding: 16px 16px;
    border-radius: 12px;
    border: 1px solid var(--darkact);
    width: 100px;
    height: 100px;
  }
  &__icon {
    width: 60px;
    height: 60px;
  }
  &__text-title {
    font-size: 25px;
  }
  &__title-mini {
    font-size: 14px;
    color: var(--gray);
  }
  &__text {
    width: 50%;
  }
  &__text-title-main {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
    align-items: center;
  }
  &__text-content {
  }
  &__type {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  &__type-item {
    border: 1px solid var(--darkact);
    display: flex;
    gap: 10px;
    border-radius: 25px;
    padding: 16px 16px;
    align-items: center;
  }
  &__type-icon {
    width: 60px;
    height: 60px;
    padding: 20px 20px;
    border: 1px solid var(--darkact);
    border-radius: 25px;
    box-shadow: 0 0 10px var(--gray);
  }
  &__route-button {
    cursor: pointer;
    background-color: var(--action);
    padding: 15px 5px;
    border-radius: 16px;
    text-align: center;
    color: var(--white);
    &:hover {
      background-color: var(--swact);
      box-shadow: 0 0 10px var(--gray);
    }
    &:action {
      background-color: var(--darkact);
    }
  }
}
</style>
