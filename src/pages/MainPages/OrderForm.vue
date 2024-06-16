<script setup>
import { useForm } from "@inertiajs/vue3";
import CalendarSelect from "@/components/CalendarSelect.vue";
import SummaryButton from "@/components/SummaryButton.vue";
import axios from 'axios';
import { defineAsyncComponent } from "vue";
const DropdownMenu = defineAsyncComponent(() =>
  import("@/components/DropdownMenu")
);
const AddInput = defineAsyncComponent(() => import("@/components/AddInput"));
const IntTextInput = defineAsyncComponent(() =>
  import("@/components/IntTextInput")
);
const DropdownImg = defineAsyncComponent(() =>
  import("@/components/DropdownImg")
);
const CardAdress = defineAsyncComponent(() =>
  import("@/components/CardAdress")
);

const form = useForm({
  loadingAddress: "",
  unloadingAddress: "",
  selectedOption: "",
  loaderCount: "0",
  selectedDate: "",
  paymentMethod: "",
  durationHours: "1",
  phoneNumber: "",
  distanceBetweenAddresses: "50",
  calculatedPrice: "..."
});
//Функция отправки данных
const submit = () => {
  console.log(form.loadingAddress);
};
import carData from "@/pages/CarPark/component/CarCardData.json";

const getPrice = async () => {
  if (form.distanceBetweenAddresses && form.loadingAddress && form.unloadingAddress) { // проверяем, заполнены ли необходимые проге поля
      // если город погрузки это Севастополь, то ставим в качестве "точки" город выгрузки. Иначе "точка" равна городу погрузки
      let to = form.loadingAddress;
      if (to == 'Севастополь') to = form.unloadingAddress;

      let data = {
          'cityLoad': to, // "точка". ГОРОД, а не полный адрес
          'workTime': form.durationHours, // время работы, по дефолту 1 
          'loaders': form.loaderCount, // количество грузчиков, по дефолту 0
          'distance': form.distanceBetweenAddresses, // дистанция между пунктами погрузки и выгрузки
      };
      let priceCalc = (await axios.get(`https://api.tiger-park.ru/api/v2/calculatePrice?${new URLSearchParams(data).toString()}`)
          .then(res => res.data)).price; // получение цены

      priceCalc = Math.round(priceCalc * 100) / 100; // округляем до сотни

      console.log(priceCalc); // отображаем значение на странице
  }
}

const DropOptions = carData.map((item) => `${item.title} - ${item.mini_title}`);
const DropDownImg = carData.map((item) => item.icon);
const DropOptionsPay = ["Онлайн", "Наличные"];
</script>
<template>
  <div class="allFormStyle sm:text-lg md:text-xl lg:text-2xl">
    <div class="titleForm">Оформить заказ</div>
    <button @click="getPrice(form)">getPrice</button>
    <div class="formStyleDiv">
      <form class="formStyle" @submit.prevent="submit">
        <div class="formStyle__inputAdress">
          <CardAdress
            title="Выберите адрес погрузки"
            class="formStyle__AdressCard sm:text-lg md:text-xl lg:text-2xl"
            v-model="form.loadingAddress"
          ></CardAdress>
          <CardAdress
            title="Выберите адрес выгрузки"
            class="formStyle__AdressCard sm:text-lg md:text-xl lg:text-2xl"
            v-model="form.unloadingAddress"
          ></CardAdress>
        </div>
        <DropdownImg
          buttonTextProp="Любая газель"
          buttonTextProp2="Реактивная подача 15 мин"
          :options="DropOptions"
          showIcon="true"
          v-model="form.typeCar"
          :icon="DropDownImg"
        ></DropdownImg>
        <div class="formStyle__countTime sm:text-lg md:text-xl lg:text-2xl">
          <AddInput title="Грузчики" v-model="form.loaderCount"></AddInput>
          <CalendarSelect
            :selectedDates="{ date: selectedDate }"
            :computedTitle="computedTitle"
            :placeholderText="placeholderText"
            buttonType="default"
            buttonSize="large"
            icon="Calendar.svg"
            v-model="form.selectedDate"
          >
          </CalendarSelect>
        </div>
        <div class="formStyle__payDay sm:text-lg md:text-xl lg:text-2xl">
          <DropdownMenu
            buttonTextProp="Оплата"
            :options="DropOptionsPay"
            showIcon="true"
            icon="Hochel.svg"
            v-model="form.paymentMethod"
          ></DropdownMenu>

          <AddInput
            title="Время (часы)"
            v-model="form.durationHours"
          ></AddInput>
        </div>

        <div class="formStyle__submitDiv sm:text-lg md:text-xl lg:text-2xl">
          <IntTextInput
            placeholder="+7-ххх-ххх-ххх"
            Inputype="text"
            title="Телефон"
            v-mask="'+7-###-###-##-##'"
            v-model="form.phoneNumber"
          ></IntTextInput>

          <SummaryButton v-model="form.calculatedPrice"></SummaryButton>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.allFormStyle {
}
.formStyleDiv {
  background-color: var(--fkwhite);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 10px 15px;
  border: 1px solid var(--darkact);
  border-top: none;
}
.formStyle {
  border: 1px solid var(--darkact);
  border-radius: 12px;
  padding: 20px 24px;
  width: auto;
  height: auto;
  margin: 1% auto;
  box-shadow: 0 5px 40px rgba(119, 138, 57, 0.5);
  background-color: var(--white);
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 4px;
  &__AdressCard {
    width: 20%;
  }
  &__countTime {
    display: flex;
    gap: 5px;
    margin: 4px;
  }
  &__inputAdress {
    display: flex;
  }
  &__payDay {
    align-items: center;
    display: flex;
    gap: 5px;
    margin: 4px;
  }
  &__submitDiv {
    background: linear-gradient(
      to top,
      rgba(119, 138, 57, 0.5),
      var(--white),
      rgba(119, 138, 57, 0.5)
    );
    align-items: center;
    border-radius: 15px;
    border: 1px solid var(--action);
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
  }
}
.titleForm {
  display: flex;
  padding: 20px 0px;
  align-items: center;
  margin: 0 auto;
  background: linear-gradient(to right, white, var(--swact), white);
  border: 1px solid var(--darkact);
  justify-content: center;
  font-size: 25px;
  color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
</style>
