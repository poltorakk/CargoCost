<template>
  <div class="main-calendar">
    <button @click="toggleCalendar" class="main-calendar__btn-calendar">
      <div class="main-calendar__date-and-icon">
        <div class="main-calendar__icon"></div>
        <div class="main-calendar__text text-small-regular">
          <span v-show="!selectedDates.start && !selectedDates.end">
            DD MMM YYYY - DD MMM YYYY
          </span>
          <span v-if="selectedDates.start && !selectedDates.end">
            {{ formatDate(selectedDates.start) }} - DD MMM YYYY
          </span>
          <span v-if="selectedDates.start && selectedDates.end">
            {{ formatDate(selectedDates.start) }} - {{ formatDate(selectedDates.end) }}
          </span>
        </div>
      </div>
      <div class="main-calendar__chevron-down2"></div>
    </button>
    <div class="main-calendar__calendar" v-if="isOpen">
      <div class="main-calendar__header">
        <span class="text-small-semi-bold">{{ currentMonth }}</span>
        <div class="main-calendar__header-chevron">
          <img class="main-calendar__chevron-up" :src="require('@/assets/icons/Chevron up.svg')" @click="prevMonth">
          <img class="main-calendar__chevron-down" :src="require('@/assets/icons/Chevron down.svg')" @click="nextMonth">
        </div>
      </div>
      <div class="main-calendar__days text-small-regular" v-if="days.length !== 0">
        <div class="main-calendar__week-days text-small-regular" v-for="(day, index) in weekDaysAbbreviated"
          :key="index">
          {{ day }}
        </div>
        <div v-for="(day, index) in days" :key="index" class="main-calendar__day text-small-regular"
          @click="!day.isPrevMonth ? selectDate(day.day, index) : () => { };" :class="['day', !!selectedDates.start ? !day.isPrevMonth &&
            selectedDates.start.getDate() === day.day && selectedDates.start.getMonth() === currentMonthIndex
            && selectedDates.start.getYear() + 1900 === currentYear
            ? 'main-calendar__selected-day' : 'main-calendar__day' : 'main-calendar__day ',
            !!selectedDates.end ? !day.isPrevMonth && selectedDates.end.getDate() === day.day
              && selectedDates.end.getMonth() === currentMonthIndex && selectedDates.end.getYear() + 1900 === currentYear
              ? 'main-calendar__selected-day' : 'main-calendar__day' : 'main-calendar__day '
            , {
              'main-calendar__prev-month-day text-normal-regular': day.isPrevMonth,
              'main-calendar__day text-normal-regular': !day.isPrevMonth
            }]">
          {{ day.day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: "CalendarSmall",
  setup() {
    const isOpen = ref(false);
    const currentDate = new Date();
    const currentMonthIndex = ref(currentDate.getMonth());
    const currentYear = ref(currentDate.getFullYear());
    const selectedDates = ref({ start: null, end: null });

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const daysInMonth = computed(() => {
      return new Date(currentYear.value, currentMonthIndex.value + 1, 0).getDate();
    });
    // Создаем массив сокращенных названий дней недели
    const weekDaysAbbreviated = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const days = computed(() => {

      const firstDayOfMonth = new Date(currentYear.value, currentMonthIndex.value, 1).getDay() - 1;
      // День недели первого дня текущего месяца
      const prevMonthDays = new Date(currentYear.value, currentMonthIndex.value, 0).getDate();
      // Количество дней предыдущего месяца
      const daysArray = [];

      for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        daysArray.push({ day: prevMonthDays - i, isPrevMonth: true }); // Добавление дней предыдущего месяца
      }

      for (let i = 1; i <= daysInMonth.value; i++) {
        daysArray.push({ day: i, isPrevMonth: false }); // Добавление дней текущего месяца
      }

      const daysAdded = daysArray.length;
      const remainingDays = 35 - daysAdded;

      for (let i = 1; i <= remainingDays; i++) {
        daysArray.push({ day: i, isPrevMonth: true }); // Добавление дней следующего месяца
      }
      return daysArray;
    });

    const currentMonth = computed(() => {
      return `${months[currentMonthIndex.value]} ${currentYear.value}`;
    });
    // Переход к следующему месяцу
    const nextMonth = () => {
      if (currentMonthIndex.value === 11) {
        currentMonthIndex.value = 0;
        currentYear.value++;
      } else {
        currentMonthIndex.value++;
      }
    };
    // Переход к предыдущему месяцу
    const prevMonth = () => {
      if (currentMonthIndex.value === 0) {
        currentMonthIndex.value = 11;
        currentYear.value--;
      } else {
        currentMonthIndex.value--;
      }
    };

    const toggleCalendar = () => {
      isOpen.value = !isOpen.value;
    };

    // Форматирование даты для отображения
    const formatDate = (date) => {
      const d = date.getDate();
      const m = months[date.getMonth()].substring(0, 3);
      const y = date.getFullYear();
      return `${d} ${m} ${y}`;
    };

    const selectDate = (day) => {

      const selectedDate = new Date(`${day} ${months[currentMonthIndex.value].substring(0, 3)} ${currentYear.value}`);
      if (!selectedDates.value.start) {
        selectedDates.value.start = selectedDate; // Установка начальной даты
      } else if (!selectedDates.value.end) {
        selectedDates.value.end = selectedDate; // Установка конечной даты

        if (selectedDates.value.end < selectedDates.value.start) {
          [selectedDates.value.start, selectedDates.value.end] = [selectedDates.value.end, selectedDates.value.start];
        } // Обмен значениями, если конечная дата раньше начальной

        if (selectedDates.value.start.getTime() === selectedDates.value.end.getTime()) {
          selectedDates.value.start = null;
          selectedDates.value.end = null;
        }
      } else {
        selectedDates.value.start = selectedDate;
        selectedDates.value.end = null;
      }
    };

    return {
      isOpen,
      selectedDates,
      currentMonth,
      days,
      nextMonth,
      prevMonth,
      toggleCalendar,
      selectDate,
      formatDate,
      weekDaysAbbreviated,
      currentMonthIndex,
      currentYear
    };
  },

};
</script>

<style lang="scss" scoped>
.main-calendar {
  &__calendar {
    position: absolute;
    z-index: 3;
    margin-top: 2px;
    max-width: 100%;
    width: 236px;
    border-radius: 12px;
    padding: 12px 16px 12px 16px;
    color: var(--white);
    gap: 12px;
    background: var(--bars);
    border: 1px solid var(--lines);
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }

  &__date-and-icon {
    display: flex;
    gap: 8px;
  }

  &__chevron-up,
  &__chevron-down {
    width: 12px;
    height: 12px;
    background-color: transparent;
  }

  &__header-chevron {
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
  }

  &__btn-calendar {
    position: relative;
    background: var(--bars);
    padding: 10px 16px 10px 16px;
    border-radius: 12px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--lines);
    gap: 8px;
    max-width: 100%;
    width: 270px;
  }

  &__text {
    color: var(--lines);
    cursor: pointer;
    align-items: center;
    display: flex;
  }

  &__text:hover, &__text:focus {
    color: var(--letters);
    cursor: pointer;
  }

  &__header {
    gap: 16px;
    display: flex;
    justify-content: space-between;
  }

  &__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    justify-content: space-between;
    gap: 4px;
  }

  &__week-days {
    color: var(--yellow-gold-500);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    justify-content: space-between;
    text-align: center;
    gap: 4px;
  }

  &__day {
    width: 20px;
    height: 20px;
    gap: 10px;
    padding: 3px 4px 3px 4px;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    background: var(--bars) border-box;
    border: 1px solid transparent;
  }

  &__day:hover {
    background: linear-gradient(var(--bars), var(--bars)) padding-box,
      var(--yellow-gold-stripe) border-box;

    border: 1px solid transparent;
    border-radius: 4px;
  }

  &__selected-day {
    background: linear-gradient(var(--bars), var(--bars)) padding-box,
      var(--yellow-gold-stripe) border-box;

    border: 1px solid transparent;
    border-radius: 4px;
  }

  &__icon {
    height: 12px;
    width: 12px;
    cursor: default;
    mask-image: url('@/assets/icons/Calendar.svg');
    background: var(--yellow-gold-stripe);
    mask-size: 12px;
    align-items: center;
    display: flex;
  }

  &__chevron-down2 {
    height: 12px;
    width: 12px;
    mask-image: url('@/assets/icons/Chevron down.svg');
    background: var(--lines);
    mask-size: 12px;
    gap: 5px;
  }

  &__prev-month-day {
    color: var(--gray);
  }
}
</style>
  