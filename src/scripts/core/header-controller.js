import EventEmitter from 'events';
import { freezeScroll, releaseScroll } from '../core/freeze-scroll'

class HeaderController {
  constructor() {
    this.emitter = new EventEmitter();
    this.mobileNavVisible = false
  }

  showNav() {
    this.mobileNavVisible = true
    freezeScroll()
    console.log('show')
  }

  hideNav() {
    this.mobileNavVisible = false
    releaseScroll()
    console.log('hide')
  }
}

const headerController = new HeaderController
export default headerController;
