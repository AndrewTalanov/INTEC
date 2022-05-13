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
    breakpoints: {
      '548': {
        spaceBetween: 15,
        slidesPerView: 1.5,
      },
      '636': {
        slidesPerView: 1.6,
      },
      '674': {
        slidesPerView: 1.8,
      },
      '764': {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      '865': {
        slidesPerView: 2.3,
      },
      '984': {
        slidesPerView: 2.8,
      },
      '1200': {
        spaceBetween: 30,
      },
      '1240': {
        spaceBetween: 30,
        slidesPerView: 2.9,
      },
    }
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

  secondSwiper.on('transitionEnd', function () {

    let slide = paginationDots[secondSwiper.realIndex];

    paginationDots.forEach(item => {
      item.classList.remove('active');
    });
    slide.classList.add('active');
  });
  //-------------------------Слайдер и табы разеала "Меню"-------------------------//

  const menuDishesSwiper = new Swiper('.type-dishes-slider', {
    simulateTouch: true,
    grabCursor: true,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 24,
    initialSlide: 1,
    breakpoints: {
      '500': {
        spaceBetween: 30,
        slidesPerView: 2.3,
      },

    }

  });

  menuDishesSwiper.on('transitionStart', function (e) {

    // для предыдущего слайда
    e.slides.forEach(item => {
      if (item.classList.contains("swiper-slide-prev")) {

        let text = item.textContent || item.innerText;
        text = text.trim().length;

        if (text < 10) {

          e.slides[e.previousIndex].firstElementChild.style.display = "flex";
          e.slides[e.previousIndex].firstElementChild.style.justifyContent = "flex-end";

        }
      }
    });

    e.slides[e.realIndex].firstElementChild.style.display = "flex";
    e.slides[e.realIndex].firstElementChild.style.justifyContent = "center";

    // для следующего слайда

    e.slides.forEach(item => {
      if (item.classList.contains("swiper-slide-next")) {

        let text = item.textContent || item.innerText;
        text = text.trim().length;

        if (text < 10) {

          e.slides[e.realIndex + 1].firstElementChild.style.display = "flex";
          e.slides[e.realIndex + 1].firstElementChild.style.justifyContent = "flex-start";

        }
      }
    });

    e.slides[e.realIndex].firstElementChild.style.display = "flex";
    e.slides[e.realIndex].firstElementChild.style.justifyContent = "center";

  });

  new Swiper('.menu-food-slider', {
    initialSlide: 1,
    slidesPerView: 1.8,
    centeredSlides: true,
    simulateTouch: true,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      '400': {
        spaceBetween: 15,
      },
      '500': {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      '600': {
        spaceBetween: 5,
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 2.1,
      },
    }
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

  // scroll body 
  function scrollSite() {
    if (document.body.style.overflow != 'hidden') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  // маска для номера телефона
  let phoneMask = document.querySelectorAll('.phone-mask');
  let maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };
  phoneMask.forEach(item => {
    let mask = IMask(item, maskOptions);
  });

  //Добавления эффекта размытия при скролле для header
  let className = "scrolled";
  let scrollTrigger = 65;

  window.onscroll = function () {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.getElementsByTagName("header")[0].classList.add(className);
    } else {
      document.getElementsByTagName("header")[0].classList.remove(className);
    }
  };

});