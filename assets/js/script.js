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
});
