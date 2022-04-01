import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// стили
import "../scss/style.scss";

// поддерживает ли вебп или нет
import * as webp from "./files/webp.js";
webp.isWebp();

document.addEventListener("DOMContentLoaded", function(event) {

  // слайдер в начале (gпервый)
  new Swiper('.main-screen__swiper', {
    navigation: {
      nextEl: '.main-screen__swiper-next',
    },
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 10,
    simulateTouch: true,
    grabCursor: true,
    // centeredSlides: true,
  });

  // второй слайдер
  new Swiper('.popular-dishes__swiper', {
    navigation: {
      prevEl: '.popular-dishes__swiper-prev',
      nextEl: '.popular-dishes__swiper-next',
    },
    loop: true,
    slidesPerView: 1,
    // spaceBetween: 10,
    simulateTouch: true,
    grabCursor: true,
    // centeredSlides: true,
  });
})


