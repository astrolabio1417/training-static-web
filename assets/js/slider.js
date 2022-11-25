$(document).ready(function () {
  const slider = ".slideshow-desktop";
  const sliderMobile = ".slideshow-mobile";

  $(slider).slick({
    infinite: false,
    speed: 300,
    slidesToScroll: 3,
    slidesToShow: 3,
    rows: 2,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: false,
          rows: 1,
        },
      },
    ],
  });

  $(sliderMobile).slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    rows: 1,
    variableWidth: true,
    centerMode: true,
    centerPadding: "40px",
  });
});
