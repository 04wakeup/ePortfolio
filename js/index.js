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
