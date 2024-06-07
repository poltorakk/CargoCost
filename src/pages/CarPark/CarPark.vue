<script setup>
import TitleInfBlock from "@/components/TitleInfBlock.vue";
import CarCard from "./component/CarCard.vue";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import carData from "./component/CarCardData.json";
const carCards = carData;
</script>
<template>
  <TitleInfBlock title="Наш Автопарк"> </TitleInfBlock>

  <TabView>
    <TabPanel header="Все машины" class="MainHeader">
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
      <CarCard
        content="Машина для перевозки хрупких и плоских грузов: стёкол, окон, зеркал, сайдинга или гипсокартона. Предметы фиксируются в вертикальном положении."
        title="Газель Пирамида"
        icon="Advantages2.png"
        item_3="Advantages2.png"
        item_2="Advantages2.png"
        item_1="Advantages2.png"
        type="Перевозка окон"
        type2="Перевозка зеркал"
        type3="Перевозка картин"
        mini_title="3.15м х 1.8м"
      >
      </CarCard>
      <br />
      <CarCard
        content="Ещё больше места для перевозки хрупких и плоских грузов: стёкол, окон, зеркал, сайдинга или гипсокартона. Предметы фиксируются в вертикальном положении."
        title="Газель Пирамида"
        icon="Advantages2.png"
        item_3="Advantages2.png"
        item_2="Advantages2.png"
        item_1="Advantages2.png"
        type="Перевозка окон"
        type2="Перевозка зеркал"
        type3="Перевозка картин"
        mini_title="4.2м х 2м"
      >
      </CarCard>
    </TabPanel>
    <TabPanel header="Бортовая">
      <CarCard
        content="Машина для транспортировки длинномерных грузов. Открытый кузов идеально подходит для боковой и верхней погрузки."
        title="Газель Бортовая"
        icon="Advantages2.png"
        item_3="Advantages2.png"
        item_2="Advantages2.png"
        item_1="Advantages2.png"
        type="Перевозка труб"
        type2="Перевозка досок"
        type3="Стройматериалы"
        mini_title="3.15м х 2м"
      >
      </CarCard>
      <br />
      <CarCard
        content="Увеличенная машина для транспортировки длинномерных грузов. Открытый кузов идеально подходит для боковой и верхней погрузки."
        title="Газель Бортовая"
        icon="Advantages2.png"
        item_3="Advantages2.png"
        item_2="Advantages2.png"
        item_1="Advantages2.png"
        type="Перевозка труб"
        type2="Перевозка досок"
        type3="Стройматериалы"
        mini_title="4.2м х 2м"
      >
      </CarCard>

      <br />
      <CarCard
        content="Большая машина для транспортировки длинномерных грузов. Открытый кузов идеально подходит для боковой и верхней погрузки."
        title="Газель Бортовая"
        icon="Advantages2.png"
        item_3="Advantages2.png"
        item_2="Advantages2.png"
        item_1="Advantages2.png"
        type="Перевозка труб"
        type2="Перевозка досок"
        type3="Стройматериалы"
        mini_title="5.2м х 2.2м"
      >
      </CarCard>
    </TabPanel>
    <TabPanel header="Фургон">
      <p class="m-0">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus.
      </p>
    </TabPanel>
    <TabPanel header="Грузовик">
      <p class="m-0">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus.
      </p>
    </TabPanel>
  </TabView>
</template>
<style lang="scss" scoped>
.MainHeader {
  background-color: var(--back) !important;
}
</style>
