<template>
  <AdvantagesBlock></AdvantagesBlock>
  <SeparatyLine></SeparatyLine>
  <FAGBlock></FAGBlock>
  <SeparatyLine></SeparatyLine>
  <FromUs></FromUs>
  <SeparatyLine></SeparatyLine>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

import FromUs from "@/pages/FromUs/FromUs";
import FAGBlock from "@/pages/FAGBlock/FaBlock";
import AdvantagesBlock from "@/pages/Advantages/AdvantagesBlock";
const SeparatyLine = defineAsyncComponent(() =>
  import("@/components/SeparatyLine")
);
</script>
<style lang="scss" scoped></style>
