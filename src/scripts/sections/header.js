import {register} from '@shopify/theme-sections'
import breakpoints from '../core/breakpoints'
import {freezeScroll, releaseScroll} from '../core/freeze-scroll'
import Vue from 'vue'

const classes = {
  navVisible: 'mobile-nav-visible',
  in: 'mobile-nav-transition-in',
  out: 'mobile-nav-transition-out',
}

const selectors = {
  hamburger: '.site-header__hamburger',
  closeNavButton: '.site-header__close-nav',
  mobileNav: '.site-header__mobile-nav'
}

register('header', {
  onLoad() {
    breakpoints.on('breakpointChange', (from, to) => {
      console.log(`firing an event ${from} to ${to} only once`);
    })

    this.vue = new Vue ({
      el: this.container,
      delimiters: ['${', '}'],
      data: {
        mobileNavVisible: false
      },
      watch: {
        mobileNavVisible: function(val) {
          if (val===true) {
            freezeScroll()
          } else  {
            releaseScroll()
          }
        }
      }
    })
  },

  onUnload() {
    releaseScroll();
    breakpoints.off('breakpointChange')
    this.vue.destroy()
  }
});
