// initialize AOS
AOS.init({
  duration: 800,
});

// Mobile Menu Icon
$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
    $(".mobileNav").toggleClass("active");
  });

  // owlCarousel
  $(".testimonials_content").owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    smartSpeed: 300,
    slideBy: 1,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        autoplay: false,
      },
      // breakpoint from 480 up
      768: {
        items: 2,
      },
      // breakpoint from 768 up
      991: {
        items: 3,
      },
    },
  });
});
