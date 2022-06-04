var temp = 4;
if (temp > 3) {
  $(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      autoplay: true,
      items: 4,
      margin: 10,
      loop: true,
      nav: false,
      dots: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
    });
  });
} else {
}
