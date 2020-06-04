import { register } from '@shopify/theme-sections'
import headerController from '../core/header-controller'
import Vue from 'vue'

register('mobile-nav', {
  onLoad() {
    this.vue = new Vue ({
      el: this.container,
      delimiters: ['${', '}'],
      data: {
        headerController: headerController
      }
    })
  },

  destroy() {
    this.vue.destroy()
  }
})