import {register} from '@shopify/theme-sections'
import Swiper from 'swiper';
import Breakpoints from '../core/breakpoints-tailwind';

const selectors = {
  texts: '.press-quotes__texts .swiper-container',
  images: '.press-quotes__images .swiper-container',
  slides: '.swiper-slide',
}

register('press-quotes', {
  onLoad() {
    this.textsEl = this.container.querySelector(selectors.texts)
    this.imagesEl = this.container.querySelector(selectors.images)
    this.imageSlides = this.imagesEl.querySelectorAll(selectors.slides)
    this.enteredMobile = this.enteredMobile.bind(this)
    this.enteredDesktop = this.enteredDesktop.bind(this)
    this.imageSlideClickedDesktop = this.imageSlideClickedDesktop.bind(this)

    this.textSwiper = new Swiper(this.textsEl, {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });

    Breakpoints.on('sm-', {
      enter: () => {
        this.enteredMobile()
      },
      leave: () => {
        this.enteredDesktop()
      }
    })

    if (Breakpoints.is('sm-')) {
      this.enteredMobile()
    } else {
      this.enteredDesktop()
    }

  },

  imageSlideClickedDesktop(e) {
    const imageSlide = e.currentTarget
    const index = parseInt(imageSlide.dataset.index)
    this.activateImageDesktop(imageSlide)
    this.textSwiper.slideTo(index)
  },

  activateImageDesktop(slide){
    const activeClass = 'active'
    if (!slide.classList.contains(activeClass)) {
      this.imageSlides.forEach( imageSlide => {
        imageSlide.classList.remove(activeClass)
      })
      slide.classList.add(activeClass)
    }
  },

  enteredMobile() {
    this.removeDesktopListeners()
    this.imageSwiper = new Swiper(this.imagesEl, {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });

    this.textSwiper.controller.control = this.imageSwiper
    this.imageSwiper.controller.control = this.textSwiper
  },

  enteredDesktop() {
    const activeIndex = this.textSwiper.realIndex
    this.destroyImageSwiper()
    this.addDesktopListeners()
    this.activateImageDesktop(this.imageSlides[activeIndex])
  },

  removeDesktopListeners() {
    this.imageSlides.forEach((slide) => {
      slide.removeEventListener('click', this.imageSlideClickedDesktop)
    })
  },

  addDesktopListeners() {
    this.imageSlides.forEach((slide) => {
      slide.addEventListener('click', this.imageSlideClickedDesktop)
    })
  },

  destroyImageSwiper() {
    if (this.textSwiper) delete this.textSwiper.controller.control
    if (this.imageSwiper) this.imageSwiper.destroy()
  },

  destroyTextSwiper() {
    if (this.imageSwiper) delete this.imageSwiper.controller.control
    if (this.textSwiper) this.textSwiper.destroy()
  },

  onUnload() {
    Breakpoints.off('sm-');
    this.removeDesktopListeners()
    this.destroyImageSwiper()
    this.destroyTextSwiper()
  }
});


