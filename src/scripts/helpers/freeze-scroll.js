module.exports = {
  freezeScroll: function() {
    console.log('freeze')
    const scrollY = window.scrollY
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
  },

  releaseScroll: function() {
    console.log('release')
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
}