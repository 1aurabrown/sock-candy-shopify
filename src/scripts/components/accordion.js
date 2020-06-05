import 'dom-slider'

export default class Accordion {
  constructor({ container, selectors }) {
    this.container = container
    this.selectors = selectors
    this.headingClicked = this.headingClicked.bind(this)
    this.itemContainers = this.container.querySelectorAll(this.selectors.itemContainer)
    this.headings = this.container.querySelectorAll(this.selectors.itemHeading)
    this.contents = this.container.querySelectorAll(this.selectors.itemContent)
    this.headings.forEach((heading) => {
      heading.addEventListener('click', this.headingClicked)
    })

  }

  slideDown(item) {
    const content = item.querySelector(this.selectors.itemContent)
    const arrow = item.querySelector(this.selectors.arrow)

    arrow.classList.add('down')
    arrow.classList.remove('right')
    domSlider.slideDown({ element: content})
  }

  slideUp(item) {
    const content = item.querySelector(this.selectors.itemContent)
    const arrow = item.querySelector(this.selectors.arrow)

    arrow.classList.add('right')
    arrow.classList.remove('down')
    domSlider.slideUp({ element: content})
  }

  slideDirection(element) {
    const computedStyle = window.getComputedStyle(element)
    const isDisplayNoneByDefault = computedStyle.getPropertyValue('display') === 'none'
    const slideDirection = (isDisplayNoneByDefault || element.classList.contains('DOM-slider-hidden') ? 'down' : 'up')
    return slideDirection
  }

  headingClicked(e) {
    const currentContainer = e.currentTarget.parentNode
    const currentContent = currentContainer.querySelector(this.selectors.itemContent)

    Array.from(this.itemContainers).forEach(container => {
      const content = container.querySelector(this.selectors.itemContent)
      if (content === currentContent) return
      if (this.slideDirection(content) === 'down') return
      this.slideUp(container)
    })


    if (this.slideDirection(currentContent) === 'up') {
      this.slideUp(currentContainer)
    } else if (this.slideDirection(currentContent) === 'down') {
      this.slideDown(currentContainer)
    }
  }

  destroy() {
    this.headings.forEach(heading => {
      heading.removeEventListener('click', this.headingClicked)
    })
  }
}
