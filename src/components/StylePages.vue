<script setup>
import { ref } from "vue";
import ModalPhone from "@/components/Modal/ModalPhone.vue";
import SeparatyLine from "@/components/SeparatyLine";
import DropdownMenu from "@/components/DropdownMenu";

const dropdownitem = ref(["Москва", "Севастополь", "Казань", "Новосибирск"]);

const modal = ref(null);

const openModalPhone = () => {
  modal.value.openModalPhone();
};
</script>

<template>
  <div class="Header">
    <div class="Header__City_Logo">
      <img :src="require('@/assets/img/Logo.svg')" class="Header__logo" />
      <!-- <DropdownMenu buttonTextProp="Город"></DropdownMenu> -->
    </div>
    <div class="Header__NavigationMenu">
      <DropdownMenu
        buttonTextProp="Севастополь"
        :options="dropdownitem"
        :size="medium"
        icon="Map.svg"
      ></DropdownMenu>
      <span class="text-normal-request Header__People"> Людям </span>
      <div class="Header__RightSide" @click="openModalPhone()">
        <div class="Header__Phones text-normal-request">
          +7 (978) 980-04-12
          <span class="Header__Phone text-normal-request"> Бесплатно </span>
        </div>
        <div class="Header__Phones text-normal-request">
          +7 (978) 972-67-90
          <span class="Header__Phone text-normal-request"> Круглосуточно </span>
        </div>
        <div class="Header__Phone-button">
          <img :src="require('@/assets/icons/Phone.svg')" />
        </div>

        <ModalPhone ref="modal" />
      </div>
      <!-- <DropdownMenu buttonTextProp="Услуги"></DropdownMenu> -->
      <!-- <SecondaryButton buttonText="Войти" secondURL="/assets/icons/LogoCompany.svg" firstURL="/assets/icons/LogoCompany.svg"></SecondaryButton> -->
    </div>
  </div>
  <SeparatyLine></SeparatyLine>
</template>

<style lang="scss" scoped>
body,
#app {
  background-color: var(--white);
}
.Header {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
  &__NavigationMenu {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  &__logo {
    height: 60px;
    width: 150px;
  }
  &__RightSide {
    margin-left: 45%;
    display: flex;
    gap: 20px;
    justify-content: end;
    cursor: pointer;
  }
  &__People {
    background: var(--back);
    border-radius: 12px;
    padding: 8px 16px;
    font-weight: bold;
    color: var(--letters);
    justify-content: center;
    align-items: center;
    display: flex;
    height: 5%;
  }
  &__Phones {
    color: var(--letters);
    font-weight: bold;
    display: flex;
    gap: 5px;
    font-size: 24px;
    justify-content: center;
    flex-direction: column;
  }
  &__Phone {
    font-weight: normal;
    color: var(--action);
  }
  &__Phone-button {
    padding: 5px 5px;
    background: var(--action);
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
}
</style>
