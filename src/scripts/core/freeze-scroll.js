module.exports = {
  freezeScroll: function() {
    console.log('freeze')
    const scrollY = window.scrollY
    document.scrollingElement.style.position = 'fixed';
    document.scrollingElement.style.top = `-${scrollY}px`;
  },

  releaseScroll: function() {
    console.log('release')
    const scrollY = document.scrollingElement.style.top;
    document.scrollingElement.style.position = '';
    document.scrollingElement.style.top = '';
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
}