$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  const typed = new Typed(".typed", {
    strings: ["Fullstack Developer", "Web Developer", "Software Engineer", "Database Administrator"],
    typeSpeed: 90,
    loop: true,
    startDelay: 1000,
    showCursor: false,
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

  // get the offset from top
  const skillsTopOffset = $(".skillsSection").offset().top;
  $(window).scroll(function () {
    // just before the position of charts
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
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
    }
  });
});
