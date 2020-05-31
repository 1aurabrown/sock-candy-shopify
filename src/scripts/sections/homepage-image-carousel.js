import {register} from '@shopify/theme-sections'
import Swiper from 'swiper';
import { screens } from '../core/breakpoints-tailwind';

const selectors = {
  swiperContainer: '.swiper-container',
  slides: '.swiper-slide',
  prev: '.image-carousel__prev',
  next:'.image-carousel__next'
}

register('image-carousel', {
  onLoad() {
    const imagesEl = this.container.querySelector(selectors.swiperContainer)
    const sliderBreakpoints = {}

    sliderBreakpoints[screens.md] = {
      slidesPerView: 4
    }

    this.imageSwiper = new Swiper(imagesEl, {
      loop: true,
      navigation: {
        nextEl: selectors.next,
        prevEl: selectors.prev,
      },
      slidesPerView: 2,
      centeredSlides: true,
      breakpoints: sliderBreakpoints
    });
  },

  onUnload() {
    if (this.imageSwiper) this.imageSwiper.destroy();
  }
});


