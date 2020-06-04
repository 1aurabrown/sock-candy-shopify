import { register } from '@shopify/theme-sections'
import headerController from '../core/header-controller'
import Vue from 'vue'
import { Breakpoints } from '../core/breakpoints-tailwind'

register('mobile-nav', {
  onLoad() {
    this.vue = new Vue ({
      el: this.container,
      delimiters: ['${', '}'],
      data: {
        headerController: headerController
      }
    })

    Breakpoints.on('md+', {
      enter: () => headerController.closeNav()
    })
  },

  destroy() {
    releaseScroll();
    this.vue.destroy()
    Breakpoints.off('breakpointChange')
  }
})