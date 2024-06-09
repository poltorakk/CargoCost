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
    <div class="Header__NavigationMenu">
      <DropdownMenu
        buttonTextProp="Севастополь"
        :options="dropdownitem"
        :size="medium"
        icon="Map.svg"
      ></DropdownMenu>
      <span class="text-normal-request Header__People"> Людям </span>
      <div class="Header__RightSide" @click="openModalPhone()">
        <div
          class="Header__Phones text-normal-request no-underline hover:underline hover:decoration-1"
        >
          <span class="Header__Phone text-normal-request no-underline">
            Круглосуточно
          </span>
          +7 (978) 972-67-90
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

  <div class="Header-bottom">
    <nav class="router">
      <div class="Header-bottom__City_Logo">
        <router-link to="/">
          <img
            :src="require('@/assets/img/Logo.svg')"
            class="Header-bottom__logo"
        /></router-link>
      </div>
      <router-link to="/" class="router__item text-normal-regular"
        >Главная</router-link
      >
      <router-link to="/about" class="router__item text-normal-regular"
        >О компании</router-link
      >
      <router-link to="/car" class="router__item text-normal-regular"
        >Наш Автопарк</router-link
      >
    </nav>
    <router-view></router-view>
  </div>
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
  &__RightSide {
    margin-left: 45%;
    display: flex;
    gap: 50px;
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
    cursor: pointer;
  }
  &__Phone {
    font-weight: normal;
    color: var(--action);
    text-decoration: none !important;
  }
  &__Phone-button {
    margin-top: 5%;
    padding: 5px 5px;
    background: var(--action);
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
}
.router {
  margin-left: 5%;
  display: flex;
  gap: 20px;
  align-items: center;
  &__item {
    font-size: 20px;
    color: var(--letters);
    text-decoration: none;
  }
}
.Header-bottom {
  &__logo {
    height: 60px;
    width: 150px;
  }
}
</style>
