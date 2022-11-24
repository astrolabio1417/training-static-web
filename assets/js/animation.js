gsap.registerPlugin(ScrollTrigger);
const heroImg = ".hero-img";

gsap.to(".nav-container", {
  scrollTrigger: {
    trigger: ".section-1",
    start: "top end",
    scrub: true,
  },
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  height: "2.5em",
});

const tagsToAnimate = [
  ".nav-container a",
  ".section-1 span, .message, .darrow, .hero-img",
  ".section-1-1 .message",
  ".treatments .heading-2, .message-2",
  ".slideshow .slidshow-item",
];

const animation = {
  y: 0,
  opacity: 1,
  duration: 0.7,
  ease: "power2.inout",
  stagger: 0.01,
};

gsap.set(tagsToAnimate, {
  opacity: 0,
  y: 20,
});

ScrollTrigger.batch(tagsToAnimate, {
  onEnter: (batch) => {
    console.log(batch);
    gsap.to(batch, animation);
  },
  start: "top center",
});
