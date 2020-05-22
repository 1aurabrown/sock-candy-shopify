import { register } from '@shopify/theme-sections'
import { Breakpoints } from '../core/breakpoints-tailwind'
import { freezeScroll, releaseScroll } from '../core/freeze-scroll'
import direction from '../core/scroll-direction'
import threshold from '../core/scroll-threshold'
import Vue from 'vue'

register('header', {
  onLoad() {
    direction({
      up: () => this.vue.direction = 'up',
      down: () => this.vue.direction = 'down'
    })

    threshold({
      pxOffset: () => {
        return this.vue.$el.scrollHeight
      },
      above: () => this.vue.threshold = 'above',
      below: () => this.vue.threshold = 'below'
    })

    Breakpoints.on('md+', {
      enter: () => {
        this.vue.mobileNavVisible = false
      }
    })

    this.vue = new Vue ({
      el: this.container,
      delimiters: ['${', '}'],
      data: {
        mobileNavVisible: false,
        direction: 'up',
        threshold: 'above',
      },
      watch: {
        mobileNavVisible: (val) => {
          if (val===true) {
            freezeScroll()
          } else  {
            releaseScroll()
          }
        }
      },
      computed: {
        headerVisible: function() {
          return this.threshold === 'above' || this.direction === 'up'
        }
      }
    })
  },

  onUnload() {
    releaseScroll();
    Breakpoints.off('breakpointChange')
    this.vue.destroy()
  }
});
