<script setup>
import TextIcon from "./Component/TextIcon.vue";
import TitleInfBlock from "@/components/TitleInfBlock.vue";
</script>
<template>
  <TitleInfBlock title="О нас"> </TitleInfBlock>
  <div class="FromUs__TextImg">
    <div>
      <div class="__divicontitle">
        <span class="__title text-normal-regular">Грузоперевозка </span>
      </div>
      <span class="__text text-normal-regular">
        Компания - перевозчик, которому можно доверять. Работаем на рынке
        транспортных услуг 5 лет. <br /><br />
        Широкий собственный автопарк позволяет нам перевозить различные по массе
        грузы: грузоподъемность наших машин варьируется от 1.5 до 20 тонн. Для
        перевозки грузов, которые требуют особого температурного режима (овощи,
        фрукты, молоко, косметика) мы предоставляем авторефрижераторы. Также
        оказываем услуги по упакове вещей, сборке/разборке мебели, установке
        офисных перегородок и др.</span
      >
    </div>
    <img :src="require('@/assets/img/FromUs.png')" class="FromUs__Img" />
  </div>
  <div class="FromUs__TextIcon">
    <TextIcon
      icon="FromUsImg (2).png"
      title="Надежные грузоперевозки"
      text="У нас действует система страхования грузовых перевозок, которая защищает ваш груз в случае возникновения форс-мажорных обстоятельств. Профессиональные мехники проверяют грузовики перед каждый выходом на линию. Водители и грузчики регулярно проходят медицинские осмотры."
    ></TextIcon>
    <TextIcon
      icon="FromUsImg (3).png"
      title="Выгодная цена"
      text="Стоимость наших услуг начинается от 490 рублей. Регулярно проводим акции и специальные предложения, действующие на перевозку грузов по всех России. Постоянным клиентам нашей компании представляем специальные тарифы на перевозку. С нами вы можете выгодно перевезти как вещи с одной квартиры на другу, так и целый архив или склад."
    ></TextIcon>
    <TextIcon
      icon="FromUsImg (1).png"
      title="Как заказать перевозку?"
      text="Что бы заказать перевозку в компании Cardo Cost, позвоните по телефону в верху страницы или заполните форму на сайте. Наш менеджер подберет для вас подходящий автомобиль, посчитает сколько грузчиков вам понадобится, поможет оформить дополнительные услуги, если они нужны, и рассчитает стоимость перевозки"
    ></TextIcon>
  </div>
</template>
<style lang="scss" scoped>
.FromUs {
  &__TextIcon {
    margin: 2% auto;
    display: flex;
    gap: 70px;
  }
  &__Img {
    width: 50%;
    height: 20%;
  }
  &__TextImg {
    margin-top: 2%;
    display: flex;
    gap: 5px;
  }
}
.__text {
  font-size: 19px;
  text-align: justify;
  line-height: 30px;
  color: var(--letters);
}
.__icon {
  margin-bottom: 10px;
}
.__title {
  margin: 30px 0px;
  font-size: 20px;
  font-weight: bold;
}
.__divicontitle {
  display: flex;
  gap: 30px;
}
</style>
