module.exports = {
  freezeScroll: function() {
    const scrollY = window.scrollY
    document.scrollingElement.style.position = 'fixed';
    document.scrollingElement.style.top = `-${scrollY}px`;
  },

  releaseScroll: function() {
    const scrollY = document.scrollingElement.style.top;
    document.scrollingElement.style.position = '';
    document.scrollingElement.style.top = '';
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
}