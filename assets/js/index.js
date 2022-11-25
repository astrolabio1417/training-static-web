$(document).ready(function () {
  $("#nav-open").on("click", (e) => {
    e.preventDefault();
    // $("body").css("overflow", "hidden");

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
    // $("body").css("overflow", "scroll");
    gsap.to(".navbar-modal", {
      display: "none",
      duration: 0.3,
      opacity: 0,
    });
  });

  gsap.registerPlugin(ScrollTrigger);
  navbarAnimation();
  heroImgAnimation();
  carousellAnimation();
  section1Animation();
  section1_1Animation();
  section2Animation();
  section3Animation();
  section4Animation();
  section5Animation();
  section6Animation();
  section7Animation();
  footerAnimation();
});

const animation = {
  y: 35,
  opacity: 0,
  duration: 1,
  ease: "power2.inout",
  stagger: 0.2,
  lazy: false,
};

function navbarAnimation() {
  return gsap.to(".nav-container", {
    scrollTrigger: {
      trigger: ".section-1",
      start: "top bottom",
      scrub: true,
    },
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: "2.5em",
  });
}

function section1Animation() {
  return gsap
    .timeline({
      ease: "power2.inout",
      scrollTrigger: {
        trigger: ".section-1",
        start: "top bottom",
      },
    })
    .from([".heading-1", ".nav-container", ".hero-img"], {
      ...animation,
      stagger: 0.05,
      duration: 0.5,
    })
    .from(
      ".section-1 .message > *",
      {
        ...animation,
        stagger: 0.3,
      },
      "-=0.2"
    );
}

function section1_1Animation() {
  return gsap
    .timeline({
      ease: "power2.inout",
      scrollTrigger: {
        trigger: ".section-2",
        start: "top bottom",
      },
    })
    .from(".section-1-1 > div > *", {
      ...animation,
      stagger: 0.05,
      duration: 0.5,
    });
}

function heroImgAnimation() {
  return gsap.to(".hero-img", {
    scrollTrigger: {
      trigger: ".section-2",
      start: "top bottom",
      scrub: true,
    },
    y: 250,
  });
}

function section2Animation() {
  return gsap
    .timeline({
      ease: "power2.inout",
      scrollTrigger: {
        trigger: ".section-2",
        start: "top bottom",
      },
    })
    .from(".treatments > *", animation);
}

function carousellAnimation() {
  const d = gsap.from(".slideshow-desktop .slidshow-item", {
    ...animation,
    scrollTrigger: {
      trigger: ".slideshow-desktop",
      start: "top bottom",
    },
    stagger: 0.3,
  });

  const m = gsap.from(".slideshow-mobile .slidshow-item", {
    ...animation,
    scrollTrigger: {
      trigger: ".slideshow-mobile",
      start: "top bottom",
    },
    stagger: 0.3,
  });

  return [d, m];
}

function section3Animation() {
  return gsap
    .timeline({
      ease: "power2.inout",
      scrollTrigger: {
        trigger: ".section-3",
        start: "40px bottom",
      },
    })
    .from([".section-3 .packages > *"], animation);
}

function section4Animation() {
  return gsap
    .timeline({
      ease: "power2.inout",
      scrollTrigger: {
        trigger: ".section-4",
        start: "40px bottom",
      },
    })
    .from(
      [
        ".section-4 .understand-your-body > *",
        ".section-4 .banner-container > .banner-left",
        ".prevention > *",
        ".assess-list-item",
      ],
      animation
    );
}

function section5Animation() {
  return gsap
    .timeline({
      ease: "power2.inout",
      scrollTrigger: {
        trigger: ".section-5",
        start: "40px bottom",
      },
    })
    .from([".section-5 > p"], animation);
}

function section6Animation() {
  return gsap
    .timeline({
      ease: "power2.inout",
      scrollTrigger: {
        trigger: ".section-6",
        start: "40px bottom",
      },
    })
    .from([".difference > *", ".section-6 .right"], animation);
}

function section7Animation() {
  return gsap
    .timeline({
      ease: "power2.inout",
      scrollTrigger: {
        trigger: ".section-7",
        start: "40px bottom",
      },
    })
    .from(".assessment", animation);
}

function footerAnimation() {
  return gsap
    .timeline({
      ease: "power2.inout",
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
      },
    })
    .from([".footer .left > div > *", ".footer .right"], animation);
}
