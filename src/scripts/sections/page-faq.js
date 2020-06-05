import 'dom-slider'
import {register} from '@shopify/theme-sections'
import Accordion from '../components/accordion';

register('page-faq', {
  onLoad() {
    this.accordion = new Accordion({
      container: this.container,
      selectors: {
        itemContainer: '.faq-item',
        itemHeading: '.faq-item__heading',
        itemContent: '.faq-item__content',
        arrow: 'svg.arrow'
      }
    })
  },

  onOnload() {
    this.accordion.destroy()
  }
});


