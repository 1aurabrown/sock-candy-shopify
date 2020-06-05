import {register} from '@shopify/theme-sections'
import ProductImages from '../components/product-images';
import Accordion from '../components/accordion';

register('product', {
  onLoad() {
    this.productImages = new ProductImages({
      container: this.container.querySelector('.pdp-images')
    })

    this.details = new Accordion({
      container: this.container.querySelector('.pdp-details'),
      selectors: {
        itemContainer: '.pdp-details__item',
        itemHeading: '.pdp-details__heading',
        itemContent: '.pdp-details__content',
        arrow: 'svg.arrow'
      }
    })
  },

  onUnload() {
    this.productImages.destroy()
    this.details.destroy()
  }
});


