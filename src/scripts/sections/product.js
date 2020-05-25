import {register} from '@shopify/theme-sections'
import ProductImages from '../components/product-images.js';


register('product', {
  onLoad() {
    this.productImages = new ProductImages({
      container: this.container.querySelector('.pdp-images')
    })
  },

  onUnload() {
    this.productImages.destroy()
  }
});


