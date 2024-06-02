<script setup>
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
</script>
<template>
  <div class="allFormStyle">
    <div class="titleForm text-normal-regular">Оформить заказ</div>
    <div class="formStyleDiv">
      <form class="formStyle">
        <br /><br />
        <div class="formStyle__inputAdress">
          <CardAdress title="Введите" placeholder="Адрес погрузки"></CardAdress>
          <CardAdress title="Введите" placeholder="Адрес выгрузки"></CardAdress>
        </div>
        <DropdownImg
          buttonTextProp="Любая газель"
          buttonTextProp2="Реактивная подача 15 мин"
          :options="DropOptions"
          showIcon="true"
        ></DropdownImg>
        <div class="formStyle__countTime">
          <AddInput title="Грузчики"></AddInput>
          <CalendarSelect
            :selectedDates="{ date: selectedDate }"
            :computedTitle="computedTitle"
            :placeholderText="placeholderText"
            buttonType="default"
            buttonSize="large"
            icon="Calendar.svg"
          >
          </CalendarSelect>
        </div>
        <div class="formStyle__payDay">
          <DropdownMenu
            buttonTextProp="Оплата"
            :options="DropOptions"
            showIcon="true"
            icon="Hochel.svg"
          ></DropdownMenu>
          <AddInput title="Время (часы)"></AddInput>
        </div>

        <div class="formStyle__submitDiv">
          <IntTextInput
            placeholder="+7-ххх-ххх-ххх"
            Inputype="text"
            title="Телефон"
            v-model="phoneNumber"
            v-mask="'+7-###-###-##-##'"
          ></IntTextInput>
          <SummaryButton></SummaryButton>
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
  &__countTime {
    display: flex;
    gap: 5px;
    margin: 4px;
  }
  &__inputAdress {
    display: flex;
    margin: 4px;
    width: 91%;
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
