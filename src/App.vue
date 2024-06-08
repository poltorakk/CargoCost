<template>
  <div id="app">
    <HeaderStyle></HeaderStyle>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import HeaderStyle from "@/components/HeaderStyle";
import FooterComponent from "@/components/FooterComponent";
</script>

<style lang="scss" scoped>
html,
body,
#app {
  min-height: 100%;
  height: 1px;
  margin: 0px 200px;
  padding: 0px 50px;
}
// Media query for screens up to 1200px
@media (max-width: 1200px) {
  html,
  body,
  #app {
    margin: 0px auto;
    padding: 0px 0px;
  }
}
</style>
