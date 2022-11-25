$(document).ready(function () {
  const slider = ".slideshow-desktop";
  const sliderMobile = ".slideshow-mobile";

  $(slider).slick({
    infinite: false,
    speed: 300,
    slidesToScroll: 3,
    slidesToShow: 3,
    rows: 2,

    responsive: [
      {
        breakpoint: 1214,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
