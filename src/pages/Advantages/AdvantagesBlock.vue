<script setup>
import CardInfo from "./Component/CardInfo.vue";
import TitleInfBlock from "@/components/TitleInfBlock.vue";
const advantagesData = [
  {
    icon: "Advantages1.png",
    title: "СЭКОНОМЯТ ВАШИ СИЛЫ",
    text: "Не стоит тратить свои силы, время и нервы на самостоятельную погрузку/выгрузку. Доверьте эту работу нам. Вам достаточно лишь заказать бригаду по телефону или на сайте, а все остальное мы возьмем на себя.",
  },
  {
    icon: "Advantages2.png",
    title: "ПЕРЕНЕСУТ ВСЕ",
    text: "Нам вы можете доверить доставку наиболее ценных и хрупких предметов. Мы отвечаем за ваше имущество и гарантируем его абсолютную сохранность.",
  },
  {
    icon: "Advantages3.png",
    title: "ЗАЩИТЯТ ВАШ ГРУЗ",
    text: "Мы не только прдоеставляет газель с грузчиками, но и проявляем всестороннюю заботу об имуществе клиента. Именно поэтому столь пристальное внимание уделяем упаковке груза и его защите. Используем при этом профессиональный такелаж и надежные упаковочные материалы самого разного типа.",
  },
  {
    icon: "Advantages4.png",
    title: "БЕСПЛАТНО ПОДНИМУТ НА ЭТАЖ",
    text: "Подъем груза на требуемый этаж осуществляется нами бесплатно вне зависимости от наличия лифта на объекте и его этажности.",
  },
];
</script>
<template>
  <TitleInfBlock title="Ваши надежные помощники"> </TitleInfBlock>
  <div class="Advantage">
    <CardInfo
      v-for="(card, index) in advantagesData"
      :key="index"
      :icon="card.icon"
      :title="card.title"
      :text="card.text"
    ></CardInfo>
  </div>
</template>
<style lang="scss" scoped>
.Advantage {
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.Advantage > * {
  margin: 15px 15px;
  flex-basis: 47%;
}
</style>
