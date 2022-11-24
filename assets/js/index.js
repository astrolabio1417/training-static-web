$(document).ready(function () {
  $("#nav-open").on("click", (e) => {
    e.preventDefault();
    $("body").css("overflow", "hidden");

    gsap.set([".navbar-modal"], {
      opacity: 0,
    });

    gsap.to([".navbar-modal"], {
      display: "flex",
      duration: 0.5,
      opacity: 1,
    });
  });

  $("#nav-close").on("click", (e) => {
    e.preventDefault();
    $("body").css("overflow", "scroll");
    gsap.to(".navbar-modal", {
      display: "none",
      duration: 0.3,
      opacity: 0,
    });
  });
});
