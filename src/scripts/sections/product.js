import {register} from '@shopify/theme-sections'
import Swiper from 'swiper';
import { screens } from '../core/breakpoints-tailwind.js';

const selectors = {
  swiperContainer: '.pdp-images .swiper-container',
  slides: '.pdp-images .swiper-slide',
  prev: '.pdp-images .swiper-button-prev',
  next:'.pdp-images .swiper-button-next',
  pagination:'.pdp-images__pagination',
  thumbs: '.pdp-images__thumb'
}

register('product', {
  onLoad() {
    this.thumbClicked = this.thumbClicked.bind(this)
    const imagesEl = this.container.querySelector(selectors.swiperContainer)
    this.thumbs = this.container.querySelectorAll(selectors.thumbs)
    this.thumbs.forEach((thumb) => {
      thumb.addEventListener('click', this.thumbClicked)
    })

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

  thumbClicked(e) {
    const index = parseInt(e.currentTarget.dataset.index)
    this.imageSwiper.slideToLoop(index)
  },

  onUnload() {
    if (this.imageSwiper) this.imageSwiper.destroy();
    this.thumbs.forEach(thumb => {
      thumb.removeEventListener('click', this.thumbClicked)
    })
  }
});


