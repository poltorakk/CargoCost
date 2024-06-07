<template>
  <div class="TitleInfBlock">{{ title }}</div>
  <br />
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.TitleInfBlock {
  color: var(--darkact);
  font-size: 64px;
  font-weight: bold;
  display: flex;
}
</style>
