import { register } from '@shopify/theme-sections'
import headerController from '../core/header-controller.js'
import direction from '../core/scroll-direction'
import threshold from '../core/scroll-threshold'

const animationDuration = 500;

const selectors = {
  hamburger: '.site-header__hamburger'
}

register('header', {
  onLoad() {
    this.headerContainer = document.querySelector('#shopify-section-header')
    this.hamburger = this.container.querySelector(selectors.hamburger)
    this.openMobileNav = this.openMobileNav.bind(this)
    this.hamburger.addEventListener('click', this.openMobileNav)

    direction({
      up: () => { this.up() },
      down: () => { this.down() }
    })

    threshold({
      pxOffset: () => { return this.container.scrollHeight },
      below: () => { this.belowHeader() }
    })

    threshold({
      pxOffset: 1,
      above: () => { this.top() },
    })

    this.up()
  },

  top() {

    if (headerController.mobileNavVisible) return

    this.headerContainer.classList.remove(`duration-${animationDuration}`)
    this.headerContainer.classList.remove('sticky')
    this.headerContainer.classList.remove('-translate-y-full')

    setTimeout( () => {
      this.headerContainer.classList.add(`duration-${animationDuration}`)
    }, 1)

    this.offset = 'top'
  },

  belowHeader() {
    if (headerController.mobileNavVisible) return

    this.headerContainer.classList.remove(`duration-${animationDuration}`)
    this.headerContainer.classList.add('-translate-y-full')
    this.headerContainer.classList.add('sticky')

    setTimeout( () => {
      this.headerContainer.classList.add(`duration-${animationDuration}`)
    }, 1)

    this.offset = 'below'
  },

  down() {
    if (headerController.mobileNavVisible) return

    if (this.offset === 'top') return
    this.headerContainer.classList.add('-translate-y-full')
    this.direction = 'down'
  },

  up() {
    if (headerController.mobileNavVisible) return

    if (this.offset === 'top') return
    this.headerContainer.classList.remove('-translate-y-full')
    this.direction = 'up';
  },

  openMobileNav() {
    headerController.showNav()
  },

  onUnload() {
    this.hamburger.removeEventListener('click', this.openMobileNav)
  }
});
