AOS.init({
  disable: function() {
    var maxWidth = 600;
    return window.innerWidth < maxWidth;
  }
}); 