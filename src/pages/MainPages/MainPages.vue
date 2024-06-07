<template>
  <div class="SideBar_OrderForm">
    <SideBar></SideBar>
    <OrderForm></OrderForm>
  </div>
</template>

<script setup>
import OrderForm from "@/pages/MainPages/OrderForm";
import SideBar from "@/pages/MainPages/SliderBar";
</script>
<style lang="scss" scoped>
.SideBar_OrderForm {
  display: flex;
  gap: 5px;
  width: 100%;
}
</style>
