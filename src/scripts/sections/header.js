import { register } from '@shopify/theme-sections'
import { Breakpoints } from '../core/breakpoints-tailwind'
import { freezeScroll, releaseScroll } from '../core/freeze-scroll'
import direction from '../core/scroll-direction'
import threshold from '../core/scroll-threshold'
import Vue from 'vue'

const animationDuration = 500;

register('header', {
  onLoad() {
    this.headerContainer = document.querySelector('#shopify-section-header')

    this.vue = new Vue ({
      el: this.container,
      delimiters: ['${', '}'],
      data: {
        mobileNavVisible: false
      },
      watch: {
        mobileNavVisible: (val) => {
          if (val===true) {
            freezeScroll()
          } else  {
            releaseScroll()
          }
        },

      }
    })

    direction({
      up: () => { this.up() },
      down: () => { this.down() }
    })

    threshold({
      pxOffset: () => { return this.vue.$el.scrollHeight },
      below: () => { this.belowHeader() }
    })

    threshold({
      pxOffset: 1,
      above: () => { this.top() },
    })

    this.up()

    Breakpoints.on('md+', {
      enter: () => {
        this.vue.mobileNavVisible = false
      }
    })
  },

  top() {
    console.log('top')
    this.headerContainer.classList.remove(`duration-${animationDuration}`)
    this.headerContainer.classList.remove('sticky')
    this.headerContainer.classList.remove('-translate-y-full')

    setTimeout( () => {
      this.headerContainer.classList.add(`duration-${animationDuration}`)
    }, 1)

    this.offset = 'top'
  },

  belowHeader() {
    console.log('below header')
    this.headerContainer.classList.remove(`duration-${animationDuration}`)
    this.headerContainer.classList.add('-translate-y-full')
    this.headerContainer.classList.add('sticky')

    setTimeout( () => {
      this.headerContainer.classList.add(`duration-${animationDuration}`)
    }, 1)

    this.offset = 'below'
  },

  down() {
        console.log('down')

    if (this.offset === 'top') return
    this.headerContainer.classList.add('-translate-y-full')
    this.direction = 'down'
  },

  up() {
            console.log('up')

    if (this.offset === 'top') return
    this.headerContainer.classList.remove('-translate-y-full')
    this.direction = 'up';
  },

  onUnload() {
    releaseScroll();
    Breakpoints.off('breakpointChange')
    this.vue.destroy()
  }
});
