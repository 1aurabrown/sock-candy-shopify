import EventEmitter from 'events';
import { freezeScroll, releaseScroll } from '../core/freeze-scroll'
import Breakpoints from '../core/breakpoints-tailwind'

class HeaderController {
  constructor() {
    this.emitter = new EventEmitter();
    this.mobileNavVisible = false

    Breakpoints.on('md+', {
      enter: () => this.hideNav()
    })
  }

  showNav() {
    this.mobileNavVisible = true
    freezeScroll()
  }

  hideNav() {
    this.mobileNavVisible = false
    releaseScroll()
  }
}

const headerController = new HeaderController
export default headerController;
