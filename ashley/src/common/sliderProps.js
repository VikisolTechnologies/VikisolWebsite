import SwiperCore, {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
} from "swiper";

SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  Pagination,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SliderProps = {
  milInfiniteSlider: {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 5000,
    autoplay: true,
    autoplay: {
        delay: 0,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
        576: { slidesPerView: 4 },
        992: { slidesPerView: 6 },
    },
  },
  milInfiniteSliderReverse: {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 5000,
    autoplay: true,
    autoplay: {
        delay: 0,
        reverseDirection: true,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
        576: { slidesPerView: 4 },
        992: { slidesPerView: 6 },
    },
  },
  milPortfolioSlider: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    parallax: true,
    mousewheel: {
        enable: true
    },
    navigation: {
        nextEl: '.mil-portfolio-next',
        prevEl: '.mil-portfolio-prev',
    },
    pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
    },
  },
  milOneSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
        nextEl: '.mil-portfolio-next',
        prevEl: '.mil-portfolio-prev',
    },
    pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
    },
  },
  milTwoSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
        nextEl: '.mil-portfolio-next',
        prevEl: '.mil-portfolio-prev',
    },
    pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
        },
    },
  }
};
