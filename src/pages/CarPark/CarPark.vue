<script setup>
import CarCard from "./component/CarCard.vue";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import carData from "./component/CarCardData.json";

const carCards = carData;
const carPyramids = carData.slice(0, 2);
const carBoard = carData.slice(2, 5);
const carVan = carData.slice(5, 12);
const carTruck = carData.slice(12, 14);

const carCardsLength = carCards.length;
const carPyramidsLength = carPyramids.length;
const carBoardLength = carBoard.length;
const carVanLength = carVan.length;
const carTruckLength = carTruck.length;
</script>
<template>
  <div class="mt-8 mr-auto">
    <TabView class="bg-black">
      <TabPanel header="Все машины" class="MainHeader bg-black"
        ><p class="text-lg italic my-8 text-center">
          Всего машин у компании: {{ carCardsLength }}
        </p>
        <CarCard
          v-for="car in carCards"
          :key="car.title"
          :content="car.content"
          :title="car.title"
          :icon="car.icon"
          :item_3="car.item_3"
          :item_2="car.item_2"
          :item_1="car.item_1"
          :type="car.type"
          :type2="car.type2"
          :type3="car.type3"
          :mini_title="car.mini_title"
          style="margin-bottom: 20px"
        >
        </CarCard>
      </TabPanel>
      <TabPanel header="Пирамиды">
        <p class="text-lg italic my-8 text-center">
          Всего машин Пирамид у компании: {{ carPyramidsLength }}
        </p>
        <CarCard
          v-for="car in carPyramids"
          :key="car.title"
          :content="car.content"
          :title="car.title"
          :icon="car.icon"
          :item_3="car.item_3"
          :item_2="car.item_2"
          :item_1="car.item_1"
          :type="car.type"
          :type2="car.type2"
          :type3="car.type3"
          :mini_title="car.mini_title"
          style="margin-bottom: 20px"
        >
        </CarCard>
      </TabPanel>
      <TabPanel header="Бортовая">
        <p class="text-lg italic my-8 text-center">
          Всего машин Бортовых у компании: {{ carBoardLength }}
        </p>
        <CarCard
          v-for="car in carBoard"
          :key="car.title"
          :content="car.content"
          :title="car.title"
          :icon="car.icon"
          :item_3="car.item_3"
          :item_2="car.item_2"
          :item_1="car.item_1"
          :type="car.type"
          :type2="car.type2"
          :type3="car.type3"
          :mini_title="car.mini_title"
          style="margin-bottom: 20px"
        >
        </CarCard>
      </TabPanel>
      <TabPanel header="Фургон">
        <p class="text-lg italic my-8 text-center">
          Всего машин Фургонов у компании: {{ carVanLength }}
        </p>
        <CarCard
          v-for="car in carVan"
          :key="car.title"
          :content="car.content"
          :title="car.title"
          :icon="car.icon"
          :item_3="car.item_3"
          :item_2="car.item_2"
          :item_1="car.item_1"
          :type="car.type"
          :type2="car.type2"
          :type3="car.type3"
          :mini_title="car.mini_title"
          style="margin-bottom: 20px"
        >
        </CarCard>
      </TabPanel>
      <TabPanel header="Грузовик">
        <p class="text-lg italic my-8 text-center">
          Всего машин Грузовиков у компании: {{ carTruckLength }}
        </p>
        <CarCard
          v-for="car in carTruck"
          :key="car.title"
          :content="car.content"
          :title="car.title"
          :icon="car.icon"
          :item_3="car.item_3"
          :item_2="car.item_2"
          :item_1="car.item_1"
          :type="car.type"
          :type2="car.type2"
          :type3="car.type3"
          :mini_title="car.mini_title"
          style="margin-bottom: 20px"
        >
        </CarCard>
      </TabPanel>
    </TabView>
  </div>
</template>
<style lang="scss" scoped>
.MainHeader {
  background-color: var(--back) !important;
}
</style>
