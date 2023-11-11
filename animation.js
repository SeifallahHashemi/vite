import "./main.scss";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray("img");
const text = gsap.utils.toArray(".st0");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".imgContainer",
    start: "top bottom",
    end: "bottom center",
    scrub: 4,
  },
});

images.forEach((image) => {
  gsap.to(image, {
    yPercent: -100 * image.dataset.speed,
    ease: "none",
    scrollTrigger: {
      scrub: image.dataset.speed,
    },
  });
});

tl.to(text, {
  strokeDashoffset: 0,
}).to(text, {
  strokeDashoffset: 470,
});

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
