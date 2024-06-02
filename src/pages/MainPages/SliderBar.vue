<template>
  <Carousel>
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <h3>{{ slide.title }}</h3>
        <div class="carousel__item__icon">
          <img :src="slide.icon" alt="Icon" />
        </div>
        <p>{{ slide.content }}</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const slides = [
  { id: "1", icon: require("@/assets/img/SideBar1.png") },
  { id: "2", icon: require("@/assets/img/SideBar2.png") },
  { id: "3", icon: require("@/assets/img/SideBar3.png") },
];
</script>

<style scoped>
.slider {
  position: relative;
  width: 500px;
  overflow: hidden;
  background-size: cover;
  margin: 0 10px;
}

.slide {
  display: none;
}

.slide.active {
  display: block;
}

.controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.controls button {
  margin: 0 5px;
}
.carousel {
  width: 60%;
  background-size: cover;
  margin: 0 10px;
}
.carousel__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &__slide {
    width: 100px;
    height: 100px;
  }

  &__icon {
    width: 100px;
    height: 100px;
    margin-bottom: 16px;

    img {
      width: 200px;
      height: 150px;
      object-fit: contain;
    }
  }
}
</style>
