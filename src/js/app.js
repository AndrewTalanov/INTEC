import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// стили
import "../scss/style.scss";

// поддерживает ли вебп или нет
import * as webp from "./files/webp.js";
webp.isWebp();

// первый слайдер
document.addEventListener("DOMContentLoaded", function(event) {

  // слайдер в начале
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

})


