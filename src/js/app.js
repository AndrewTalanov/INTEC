import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// маска для телефона
import IMask from 'imask';
// стили
import "../scss/style.scss";

// поддерживает ли вебп или нет
import * as webp from "./files/webp.js";
webp.isWebp();

document.addEventListener("DOMContentLoaded", function (event) {
  //Бургер меню
  const menuBtn = document.querySelector('.menu__icon');
  const menu = document.querySelector('.menu__body');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');

    scrollSite();
  });


  // СЛАЙДЕР В НАЧАЛЕ (первый)
  new Swiper('.main-screen__swiper', {
    navigation: {
      nextEl: '.main-screen__swiper-next',
    },
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 10,
    simulateTouch: true,
    grabCursor: true,
  });

  // ВТОРОЙ СЛАЙДЕР
  const paginationDots = document.querySelectorAll('.dots-item');

  const secondSwiper = new Swiper('.popular-dishes__swiper', {
    navigation: {
      prevEl: '.popular-dishes__swiper-prev',
      nextEl: '.popular-dishes__swiper-next',
    },
    loop: true,
    slidesPerView: 1,
    simulateTouch: true,
    grabCursor: true,
  });

  // let prevSlide;
  // let prevPos;

  secondSwiper.on('transitionEnd', function () {

    let slide = paginationDots[secondSwiper.realIndex];
    // let pos = parseInt(window.getComputedStyle(slide, null).getPropertyValue('left').match(/\d+/));

    paginationDots.forEach(item => {
      item.classList.remove('active');
    });
    slide.classList.add('active');

    // if (prevSlide) {
    //   prevSlide.style.left = prevPos + 'px';
    // }

    // prevSlide = slide;
    // prevPos = pos;

    // slide.style.left = pos - 1 + 'px';
  });
  //-------------------------Слайдер и табы разеала "Меню"-------------------------//

  const menuDishesSwiper = new Swiper('.type-dishes-slider', {
    simulateTouch: true,
    grabCursor: true,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 24,
    initialSlide: 1,
  });

  new Swiper('.menu-food-slider', {
    initialSlide: 1,
    slidesPerView: 1.8,
    centeredSlides: true,
    simulateTouch: true,
    spaceBetween: 10,
    grabCursor: true,
  });

  menuDishesSwiper.on('transitionEnd', function () {

    let slidersDishes = document.querySelectorAll(".sliders-item");

    let index = menuDishesSwiper.realIndex;

    slidersDishes.forEach(item => {
      item.style.display = "none";
    });

    slidersDishes[index].style.display = "block";
  });


  // popup
  const popupBtn = document.querySelector('.popup-btn');
  const popup = document.querySelector('.popup');
  const popupClose = document.querySelector('.close-popup');

  popupBtn.addEventListener('click', function () {
    popup.classList.toggle('open-popup');
    scrollSite();
  });
  popupClose.addEventListener('click', function () {
    popup.classList.toggle('open-popup');
    scrollSite();
  });

  // маска для номера телефона
  phoneMask = IMask(
    document.getElementById('phone-mask'), {
      mask: '+{7} (000) 000-00-00'
    });

  // scroll body 
  function scrollSite() {
    if (document.body.style.overflow != 'hidden') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }
});