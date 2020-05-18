import {register} from '@shopify/theme-sections'
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import Breakpoints from '../core/breakpoints-tailwind.js';

const selectors = {
  texts: '.press-quotes__texts',
  images: '.press-quotes__images',
  slides: '.swiper-slide'
}

register('press-quotes', {
  onLoad() {
    this.textsEl = this.container.querySelector(selectors.texts)
    this.imagesEl = this.container.querySelector(selectors.images)
    this.initImageSwiper = this.initImageSwiper.bind(this)
    this.destroyImageSwiper = this.destroyImageSwiper.bind(this)


    this.textSwiper = new Swiper(this.textsEl, {
      slidesPerView: 1,
      slideActiveClass: 'swiper-slide-active',
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });

    Breakpoints.on('sm-', {
      enter: () => {
        this.initImageSwiper()
      },
      leave: () => {
        this.destroyImageSwiper()
      }
    })

    if (Breakpoints.is('sm-')) {
      this.initImageSwiper()
    }

  },

  initImageSwiper() {
    this.imageSwiper = new Swiper(this.imagesEl, {
      slidesPerView: 1,
      touchRatio: 0.2,
      slideActiveClass: 'swiper-slide-active opacity-100',
      slideToClickedSlide: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });

    this.textSwiper.controller.control = this.imageSwiper
    this.imageSwiper.controller.control = this.textSwiper

  },

  destroyImageSwiper() {
    delete this.textSwiper.controller.control
    if (this.imageSwiper) this.imageSwiper.destroy()
  },

  onUnload() {
    Breakpoints.off('sm-');
    this.destroyImageSwiper()
  }
});


