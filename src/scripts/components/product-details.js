import 'dom-slider'

const selectors = {
  itemContainer: '.pdp-details__item',
  itemHeading: '.pdp-details__heading',
  itemContent: '.pdp-details__content'
}

export default class ProductImages {
  constructor({container}) {
    this.container = container
    this.headingClicked = this.headingClicked.bind(this)
    this.headings = this.container.querySelectorAll(selectors.itemHeading)
    this.contents = this.container.querySelectorAll(selectors.itemContent)
    this.headings.forEach((heading) => {
      heading.addEventListener('click', this.headingClicked)
    })

  }

  headingClicked(e) {
    const heading = e.currentTarget
    const thisContent = heading.parentNode.querySelector(selectors.itemContent)
    const otherContent = Array.from(this.contents).forEach(content => {
      if (content === thisContent) return
      domSlider.slideUp({ element: content })
    })

    domSlider.slideToggle({ element: thisContent})

  }

  destroy() {
    this.headings.forEach(heading => {
      heading.removeEventListener('click', this.headingClicked)
    })
  }
}
