import 'dom-slider'
import {register} from '@shopify/theme-sections'

const selectors = {
  itemContainer: '.faq-item',
  itemHeading: '.faq-item__heading',
  itemContent: '.faq-item__content'
}

register('page-faq', {
  onLoad() {
    this.headingClicked = this.headingClicked.bind(this)
    this.headings = this.container.querySelectorAll(selectors.itemHeading)
    this.contents = this.container.querySelectorAll(selectors.itemContent)
    this.headings.forEach((heading) => {
      heading.addEventListener('click', this.headingClicked)
    })

  },

  headingClicked(e) {
    const heading = e.currentTarget
    const thisContent = heading.parentNode.querySelector(selectors.itemContent)
    Array.from(this.contents).forEach(content => {
      if (content === thisContent) return
      domSlider.slideUp({ element: content })
    })

    domSlider.slideToggle({ element: thisContent})

  },

  onOnload() {
    this.headings.forEach(heading => {
      heading.removeEventListener('click', this.headingClicked)
    })
  }
});


