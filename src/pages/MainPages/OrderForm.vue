<script setup>
import { useForm } from "@inertiajs/vue3";
import CalendarSelect from "@/components/CalendarSelect.vue";
import SummaryButton from "@/components/SummaryButton.vue";
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
const DropOptions = ["Онлайн", "Наличные"];

const form = useForm({
  loadingAddress: "",
  unloadingAddress: "",
  selectedOption: "",
  loaderCount: "",
  selectedDate: "",
  paymentMethod: "",
  durationHours: "",
  phoneNumber: "",
});
//Функция отправки данных
const submit = () => {
  console.log(form.loadingAddress);
};
</script>
<template>
  <div class="allFormStyle">
    <div class="titleForm text-normal-regular">Оформить заказ</div>
    <div class="formStyleDiv">
      <form class="formStyle" @submit.prevent="submit">
        <br /><br />
        <div class="formStyle__inputAdress">
          <CardAdress
            title="Введите"
            placeholder="Адрес погрузки"
            class="formStyle__AdressCard"
            v-model="form.loadingAddress"
          ></CardAdress
          ><span>{{ form.loadingAddress }}</span>
          <CardAdress
            title="Введите"
            placeholder="Адрес выгрузки"
            class="formStyle__AdressCard"
            v-model="form.unloadingAddress"
          ></CardAdress
          ><span>{{ form.unloadingAddress }}</span>
        </div>
        <DropdownImg
          buttonTextProp="Любая газель"
          buttonTextProp2="Реактивная подача 15 мин"
          :options="DropOptions"
          showIcon="true"
          v-model="form.typeCar"
        ></DropdownImg>
        <span>{{ form.typeCar }}</span>
        <div class="formStyle__countTime">
          <AddInput title="Грузчики" v-model="form.loaderCount"></AddInput>
          <span>{{ form.loaderCount }}</span>
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
          <span>{{ form.selectedDate }}</span>
        </div>
        <div class="formStyle__payDay">
          <DropdownMenu
            buttonTextProp="Оплата"
            :options="DropOptions"
            showIcon="true"
            icon="Hochel.svg"
            v-model="form.paymentMethod"
          ></DropdownMenu>
          <span>{{ form.paymentMethod }}</span>

          <AddInput
            title="Время (часы)"
            v-model="form.durationHours"
          ></AddInput>
          <span>{{ form.durationHours }}</span>
        </div>

        <div class="formStyle__submitDiv">
          <IntTextInput
            placeholder="+7-ххх-ххх-ххх"
            Inputype="text"
            title="Телефон"
            v-mask="'+7-###-###-##-##'"
            v-model="form.phoneNumber"
          ></IntTextInput>
          <span>{{ form.phoneNumber }}</span>

          <SummaryButton></SummaryButton>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
    width: 50%;
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
    width: 91%;
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
