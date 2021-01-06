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
  const statsTopOffset = $(".statsSection").offset().top;
  let countUpFinished = false;

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

    if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
      // Count up
      $(".counter").each(function () {
        const element = $(this); // choose each element
        const endVal = parseInt(element.text()); // catch the text as number
        element.countup(endVal);
      });
      countUpFinished = true; // to avoid that it counts already then change to zero. so execute it once
    }
  });

  // Image handling
  $("[data-fancybox]").fancybox();

  // Filter handling
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });

  $("#filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false,
      },
    });
    return false; // don't do anything
  });
});
