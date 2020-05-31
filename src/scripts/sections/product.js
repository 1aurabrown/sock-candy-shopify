import {register} from '@shopify/theme-sections'
import ProductImages from '../components/product-images';
import ProductDetails from '../components/product-details';

register('product', {
  onLoad() {
    this.productImages = new ProductImages({
      container: this.container.querySelector('.pdp-images')
    })
    this.details = new ProductDetails({
      container: this.container.querySelector('.pdp-details')
    })
  },

  onUnload() {
    this.productImages.destroy()
    this.details.destroy()
  }
});


