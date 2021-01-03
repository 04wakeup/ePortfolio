$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Fullstack Developer", "Web Developer", "Software Engineer"],
    typeSpeed: 90,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
});

// Part 3: Skills Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  items: 4,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    938: {
      items: 4,
    },
  },
});

// PieChart
$(".chart").easyPieChart({
  easing: "easeInOut",
  barColor: "#fff",
  trackColor: false,
  scaleColor: false,
  lineWidth: 4,
  size: 152,
  onStep: function (from, to, percent) {
    $(this.el).find(".percent").text(Math.round(percent));
  },
});
