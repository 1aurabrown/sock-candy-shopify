import {register} from '@shopify/theme-sections'
import Swiper from 'swiper';
import { screens } from '../core/breakpoints-tailwind.js';

const selectors = {
  swiperContainer: '.pdp-images .swiper-container',
  slides: '.pdp-images .swiper-slide',
  prev: '.pdp-images .swiper-button-prev',
  next:'.pdp-images .swiper-button-next',
  pagination:'.pdp-images__pagination'
}

register('product', {
  onLoad() {
    const imagesEl = this.container.querySelector(selectors.swiperContainer)
    const sliderBreakpoints = {}

    this.imageSwiper = new Swiper(imagesEl, {
      loop: true,
      navigation: {
        nextEl: selectors.next,
        prevEl: selectors.prev,
      },

      pagination: {
        el: selectors.pagination,
        type: 'bullets',
      },

      slidesPerView: 1,
      centeredSlides: true
    });
  },

  onUnload() {
    if (this.imageSwiper) this.imageSwiper.destroy();
  }
});


