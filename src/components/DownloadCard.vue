<template>
  <div class="CardDownload">
    <span class="CardDownload__text text-normal-regular"> {{ title }}</span>
    <img
      :src="require('@/assets/icons/DownloadFile.svg')"
      class="CardDownload__icon"
    />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
body,
#app {
  background-color: var(--white);
}
.CardDownload {
  cursor: pointer;
  border: 1px solid var(--darkact);
  border-radius: 12px;
  width: max-content;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
  height: 44px;
  &__text {
    color: var(--darkact);
  }
  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>
