<template>
  <div class="cardInput" :class="{ 'cardInput--time': CardInputTime }">
    <div class="cardInput__text text-normal-regular">
      <div class="cardInput__title">{{ computedTitle }}</div>
      <div class="cardInput__placeholder">{{ placeholderText }}</div>
    </div>
    <div class="flex-wrap">
      <div
        :class="[
          'icon-button',
          'icon-button__' + buttonSize,
          'icon-button__' + buttonType,
        ]"
        @click="toggleCalendar"
      >
        <div
          class="icon-button__icon"
          :style="{
            '-webkit-mask-image': `url(${require(`../assets/icons/${icon}`)})`,
            'mask-image': `url(${require(`../assets/icons/${icon}`)})`,
          }"
        ></div>
      </div>
    </div>
  </div>
  <h3 class="menu-items-regular">{{ buttonText }}</h3>
  <div class="__calendar" v-if="isOpen">
    <div class="__header">
      <span class="text-normal-semi-bold">{{ currentMonth }}</span>
      <div class="__header-chevron">
        <img
          class="__chevron-up"
          :src="require('@/assets/icons/Chevron up.svg')"
          @click="prevMonth"
        />
        <img
          class="__chevron-down"
          :src="require('@/assets/icons/ChevronDown.svg')"
          @click="nextMonth"
        />
      </div>
    </div>
    <div class="__days text-normal-regular" v-if="days.length !== 0">
      <div
        class="__week-days text-normal-regular"
        v-for="(day, index) in weekDaysAbbreviated"
        :key="index"
      >
        {{ day }}
      </div>
      <div
        v-for="(day, index) in days"
        :key="index"
        class="__day text-normal-regular"
        @click="!day.isPrevMonth ? selectDate(day.day, index) : () => {}"
        :class="[
          'day',
          !!selectedDates.start
            ? !day.isPrevMonth &&
              selectedDates.start.getDate() === day.day &&
              selectedDates.start.getMonth() === currentMonthIndex &&
              selectedDates.start.getYear() + 1900 === currentYear
              ? '__selected-day'
              : '__day'
            : '__day ',
          !!selectedDates.end
            ? !day.isPrevMonth &&
              selectedDates.end.getDate() === day.day &&
              selectedDates.end.getMonth() === currentMonthIndex &&
              selectedDates.end.getYear() + 1900 === currentYear
              ? '__selected-day'
              : '__day'
            : '__day ',
          {
            '__prev-month-day text-normal-regular': day.isPrevMonth,
            '__day text-normal-regular': !day.isPrevMonth,
          },
        ]"
      >
        {{ day.day }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "IconButton",
  props: {
    buttonSize: {
      required: true,
      validator: function (value) {
        return ["large", "big", "small", "tiny"].includes(value);
      },
      type: String,
    },
    buttonType: {
      required: true,
      validator: function (value) {
        return ["default", "dark", "dark__red"].includes(value);
      },
      type: String,
    },
    icon: {
      required: true,
      type: String,
    },
    buttonText: {
      type: String,
      required: false,
    },
  },
  methods: {
    calendar() {},
  },
  computed: {
    iconURL() {
      return "url(" + this.iconPath + ")";
    },
    iconPath() {
      return "/assets/icons/" + this.icon;
    },
  },
  setup() {
    const isOpen = ref(false);
    const currentDate = new Date();
    const currentMonthIndex = ref(currentDate.getMonth());
    const currentYear = ref(currentDate.getFullYear());
    const selectedDates = ref({ start: null, end: null });

    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    const daysInMonth = computed(() => {
      return new Date(
        currentYear.value,
        currentMonthIndex.value + 1,
        0
      ).getDate();
    });
    // Создаем массив сокращенных названий дней недели
    const weekDaysAbbreviated = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

    const days = computed(() => {
      const firstDayOfMonth =
        new Date(currentYear.value, currentMonthIndex.value, 1).getDay() - 1;
      const prevMonthDays = new Date(
        currentYear.value,
        currentMonthIndex.value,
        0
      ).getDate();
      const daysArray = [];

      for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        daysArray.push({ day: prevMonthDays - i, isPrevMonth: true });
      }

      for (let i = 1; i <= daysInMonth.value; i++) {
        daysArray.push({ day: i, isPrevMonth: false });
      }

      const daysAdded = daysArray.length;
      const remainingDays = 35 - daysAdded;

      for (let i = 1; i <= remainingDays; i++) {
        daysArray.push({ day: i, isPrevMonth: true });
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
      if (!date) return "";
      const d = date.getDate();
      const m = months[date.getMonth()];
      const y = date.getFullYear();
      return `${d} ${m} ${y}`;
    };

    const selectDate = (day) => {
      const selectedDate = new Date(
        `${day} ${months[currentMonthIndex.value].substring(0, 3)} ${
          currentYear.value
        }`
      );

      // Установка или сброс выбранной даты
      if (selectedDates.value.date?.getTime() === selectedDate.getTime()) {
        selectedDates.value.date = null; // Сброс даты, если та же самая дата выбрана снова
      } else {
        selectedDates.value.date = selectedDate;
        toggleCalendar(); // Установка новой выбранной даты
        console.log(selectedDates);
      }
    };

    const computedTitle = computed(() => {
      if (!selectedDates.value.date) {
        return "Сегодня";
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      const selectedDate = new Date(selectedDates.value.date);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate.getTime() === today.getTime()) {
        return "Сегодня";
      } else if (selectedDate.getTime() === tomorrow.getTime()) {
        return "Завтра";
      } else {
        return formatDate(selectedDate);
      }
    });

    const placeholderText = computed(() => {
      if (!selectedDates.value.date) {
        return "Выберите дату";
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      const selectedDate = new Date(selectedDates.value.date);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate.getTime() > tomorrow.getTime()) {
        return "Несрочно";
      } else {
        return "";
      }
    });

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
      currentYear,
      computedTitle,
      placeholderText,
    };
  },
};
</script>

<style lang="scss" scoped>
.flex-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

.icon-button {
  display: flex;
  align-items: center;
  width: max-content;
  height: max-content;

  &:hover {
    cursor: pointer;
  }

  &__default {
    background: linear-gradient(var(--action), var(--action)) padding-box,
      var(--action) border-box;
    border: 1px solid transparent;

    & .icon-button__icon {
      background: var(--white);
    }
  }

  &__large {
    padding: 10px;
    border-radius: 12px;
  }

  &__large &__icon {
    height: 24px;
    width: 23px;
    mask-size: 23px;
  }

  &__big,
  &__small {
    padding: 8px;
    border-radius: 8px;
  }

  &__big &__icon {
    height: 16px;
    width: 16px;
    mask-size: 16px;
  }

  &__small &__icon {
    height: 12px;
    width: 12px;
    mask-size: 12px;
  }

  &__tiny {
    padding: 4px;
    border-radius: 4px;
  }

  &__tiny &__icon {
    height: 10px;
    width: 10px;
    mask-size: 10px;
  }
}
.__calendar {
  position: absolute;
  z-index: 3;
  margin-top: 2px;
  max-width: 100%;
  width: 307px;
  border-radius: 12px;
  padding: 12px 16px 12px 16px;
  color: var(--letters);
  gap: 12px;
  background: var(--white);
  border: 1px solid var(--lines);
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
.__header {
  gap: 16px;
  display: flex;
  justify-content: space-between;
}
.dropdown-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--letters);
}
.__small {
  min-width: 200px;
}

.__medium {
  min-width: 300px;
}

.__large {
  min-width: 100%;
}
.__week-days {
  color: var(--action);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-content: space-between;
  text-align: center;
  gap: 4px;
}
.__button {
  cursor: pointer;
  background: var(--white);
  border-radius: 12px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  width: 100%;
  height: 40px;
  color: var(--darkact);
  padding: 10px 16px 10px 16px;
  justify-content: space-between;

  &:hover,
  &:active {
    color: var(--action);
    transition: color 0.5s ease, border 1s ease;
    border: 1px solid var(--action);

    .__menu {
      color: var(--action);
      transition: color 0.5s ease;
    }
  }
}

.__text-icon {
  display: flex;
  gap: 8px;
  align-items: center;
}

.__button-and-menu {
  position: relative;
  width: 100%;
}
.__header-chevron {
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
}
.__chevron-up,
.__chevron-down {
  width: 12px;
  height: 12px;
  background-color: transparent;
}
.__days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  justify-content: space-between;
  gap: 4px;
}
.__day {
  width: 24px;
  height: 24px;
  gap: 10px;
  padding: 3px 4px 3px 4px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  background: var(--white) border-box;
  border: 1px solid transparent;
}

.__day:hover {
  background: linear-gradient(var(--white), var(--white)) padding-box,
    var(--yellow-gold-stripe) border-box;
  border: 1px solid transparent;
  border-radius: 4px;
}
.__prev-month-day {
  color: var(--gray);
}
.__menu {
  position: absolute;
  margin-top: 2px;
  z-index: 1;
  border: 1px solid transparent;
  border-radius: 12px;
  width: calc(100%);
  background: var(--white);
  overflow-y: auto;
  padding: 8px 8px 8px 0px;
  align-items: center;
  align-content: space-between;
  color: var(--darkact);
  &:hover,
  &:active {
    color: var(--action);
    transition: color 0.5s ease;

    .__button {
      background: var(--white);
      transition: background-color 0.7s ease;
    }
  }

  .__ul {
    box-sizing: border-box;
    margin: 0;
    max-width: 100%;
    overflow-y: auto;
    max-height: 178px;
    padding: 0 8px 0 0;

    &::-webkit-scrollbar {
      position: absolute;
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: var(--gray);
      border-radius: 4px;
      scrollbar-arrow-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: var(--light-gray);
    }
  }

  .__li {
    background: linear-gradient(var(--white), var(--white)) padding-box,
      var(--yellow-gold-stripe) border-box;
    border: 1px solid var(--white);
    position: relative;
    margin: 1px 0;
    display: flex;
    height: 20px;
    list-style-type: none;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px 12px 16px;

    &:hover {
      border: 1px solid transparent;
      border-radius: 20px;
      transition: color 0.5s ease, border 1s ease;
    }
  }

  .__icon2 {
    height: 20px;
    width: 20px;
    cursor: default;
    background: var(--action);
    mask-image: url("../assets/icons/Mail.svg");
    mask-size: 20px;
    display: inline-block;
  }

  .__icon3 {
    height: 20px;
    width: 20px;
    cursor: default;
    background: var(--action);
    mask-size: cover;
    display: inline-block;
    align-items: center;
  }

  .__icon {
    height: 12px;
    width: 12px;
    cursor: default;
    display: inline-block;
    mask-size: 12px;
    mask-image: url("../assets/icons/Check.svg");
    background-color: var(--darkact);
  }

  .__icon-chevron-down {
    height: 17px;
    width: 17px;
    cursor: default;
    background: var(--darkact);
    mask-image: url("../assets/icons/ChevronDown.svg");
    mask-size: 17px;
    display: inline-block;
    transition: 0.5 ease;
  }

  .__li-text {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .__below,
  .__title {
    color: var(--gray);
    padding: 0px 0px 0px 16px;
    gap: 4px;
  }

  .__icon-chevron-down.hide-icon {
    transform: rotate(180deg);
    transition: 0.5 ease;
  }
}
.cardInput {
  border: 1px solid var(--darkact);
  border-radius: 12px;
  background-color: var(--back);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  height: 100%;
  &__text {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
  }
  &__placeholder {
    color: var(--action);
  }
  &__title {
    color: var(--letters);
    font-weight: bold;
  }
}
.cardInput--time {
  border: 1px solid var(--darkact);
  border-radius: 12px;
  background-color: var(--back);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
</style>
