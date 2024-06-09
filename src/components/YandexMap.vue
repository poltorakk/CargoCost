<template>
  <div id="map" style="width: 800px; height: 500px"></div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "YandexMap",
  emits: ["mapClick"],
  setup() {
    const emitMapClick = (coords, address) => {
      this.$emit("mapClick", { coords, address });
    };
    onMounted(() => {
      // Загружаем скрипт Яндекс.Карт
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=0b3df6c3-e70a-401c-9a51-c675c570ea00&lang=ru_RU";
      script.async = true;
      script.onload = () => {
        // Инициализируем карту после загрузки скрипта
        window.ymaps.ready(init);
      };
      document.head.appendChild(script);

      function init() {
        // eslint-disable-next-line no-unused-vars
        var map = new window.ymaps.Map("map", {
          center: [44.6166, 33.5254], // Координаты центра карты
          zoom: 10,
        });

        // Создаем пустой массив для хранения меток
        const placemarks = [];
        let route;

        // Обработчик кликов по карте
        map.events.add("click", function (e) {
          if (placemarks.length >= 2) {
            // Если уже есть две метки, удаляем первую и маршрут
            map.geoObjects.remove(placemarks.shift());
            if (route) {
              map.geoObjects.remove(route);
            }
          }

          // Получаем координаты щелчка
          const coords = e.get("coords");

          // Создаем новую метку
          const placemark = new window.ymaps.Placemark(
            coords,
            {},
            {
              preset: "islands#icon",
              iconColor: placemarks.length === 0 ? "red" : "blue",
            }
          );

          // Добавляем метку на карту
          map.geoObjects.add(placemark);
          placemarks.push(placemark);

          // Получаем адрес по координатам
          getAddress(coords);

          // Если есть две метки, строим маршрут между ними
          if (placemarks.length === 2) {
            createRoute(
              placemarks[0].geometry.getCoordinates(),
              placemarks[1].geometry.getCoordinates()
            );
          }
        });

        function getAddress(coords) {
          window.ymaps.geocode(coords).then(function (res) {
            const firstGeoObject = res.geoObjects.get(0);
            const address = firstGeoObject.getAddressLine();

            emitMapClick(coords, address);
          });
        }

        function createRoute(point1, point2) {
          window.ymaps.route([point1, point2]).then(
            function (routeResult) {
              route = routeResult;
              map.geoObjects.add(route);
            },
            function (error) {
              console.error("Ошибка построения маршрута:", error);
            }
          );
        }
      }
    });
  },
};
</script>
