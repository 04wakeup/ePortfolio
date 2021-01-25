// on page loading
$(window).on("load", function () {
  $(".loader .inner").fadeOut(400, function () {
    $(".loader").fadeOut(650); // more naturally disappear
  });

  // Filter handling, by putting here it prevents images are duplicated
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });
});

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

  // Image handling : not necessary
  // $("[data-fancybox]").fancybox();

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

  // Part 7. Copyright
  const currentYear = new Date().getFullYear();
  const copyRight = $("#currentYear")[0];
  copyRight.innerHTML = " " + currentYear;

  //  Part 1.5 Navigation stick
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    const body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px"); // remove jumping top area
      // y axis increase when it goes down
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

  // slowly go to target
  $("#navigation li a").click(function (e) {
    e.preventDefault();

    const targetElement = $(this).attr("href");
    const targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });
});
