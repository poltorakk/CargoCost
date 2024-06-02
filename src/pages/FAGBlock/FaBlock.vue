<script setup>
import TitleInfBlock from "@/components/TitleInfBlock.vue";
import QuestionSelect from "./Component/QuestionSelect.vue";
</script>
<template>
  <TitleInfBlock title="Часто задаваемые вопросы"> </TitleInfBlock>
  <div class="BackImg">
    <QuestionSelect
      title="Помогают ли грузчики грузить вещи?"
      answer="Да, наши грузчики профессионально загружают и разгружают ваши вещи, обеспечивая их безопасность в процессе транспортировки."
    ></QuestionSelect>
    <QuestionSelect
      title="Работаю ли грузчики ночью?"
      answer="Да, у нас есть возможность заказать услуги грузчиков в любое время суток, включая ночное время, чтобы обеспечить удобство для наших клиентов."
    ></QuestionSelect>
    <QuestionSelect
      title="Можно ли перевозить вещи без упаковки?"
      answer="Хотя мы настоятельно рекомендуем использовать упаковку для защиты ваших вещей, перевозка без упаковки возможна. Однако, в этом случае мы не можем гарантировать полную сохранность предметов."
    ></QuestionSelect>
  </div>
</template>
<style lang="scss" scoped>
.BackImg {
  background-image: url("@/assets/img/FAGImg.svg");
  background-size: cover;
  width: 100%;
  transition: 0.5 ease;
}
</style>
