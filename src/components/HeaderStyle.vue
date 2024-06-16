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
  <div class="Header py-4 px-6 md:px-0 mx-auto">
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
          <i class="pi pi-phone"></i>
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
      <router-link
        :to="{ name: 'House' }"
        :class="[
          'router__item',
          'text-normal-regular',
          { 'router-link-active-class': $route.name === 'House' },
        ]"
      >
        Главная
      </router-link>
      <router-link
        :to="{ name: 'About' }"
        :class="[
          'router__item',
          'text-normal-regular',
          { 'router-link-active-class': $route.name === 'About' },
        ]"
      >
        О компании
      </router-link>
      <router-link
        :to="{ name: 'Car' }"
        :class="[
          'router__item',
          'text-normal-regular',
          { 'router-link-active-class': $route.name === 'Car' },
        ]"
      >
        Наш Автопарк
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
body,
#app {
  background-color: var(--white);
}
.router-link-active-class {
  background-color: var(--back);
  border-radius: 15px;
  padding: 5px 15px;
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
    font-size: 16px;
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
    align-items: center;
  }
}
i.pi.pi-phone {
  color: white;
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
