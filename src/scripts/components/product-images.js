import Swiper from 'swiper';

const selectors = {
  swiperContainer: '.swiper-container',
  slides: '.swiper-slide',
  prev: '.pdp-images__prev',
  next:'.pdp-images__next',
  pagination:'.pdp-images__pagination',
  thumbs: '.pdp-images__thumb'
}

export default class ProductImages {
  constructor({container}) {
    this.container = container
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
  }

  thumbClicked(e) {
    const index = parseInt(e.currentTarget.dataset.index)
    this.imageSwiper.slideToLoop(index)
  }

  destroy() {
    if (this.imageSwiper) this.imageSwiper.destroy();
    this.thumbs.forEach(thumb => {
      thumb.removeEventListener('click', this.thumbClicked)
    })
  }
}
