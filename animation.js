import "./main.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";


gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.heading', { types: 'chars'});

gsap.set(".heading", { autoAlpha: 1 });
gsap.set(text.chars, { yPercent: 100});

const initialAnimation = gsap.to(text.chars, {
  yPercent: 0,
  ease: "sine.out",
  stagger: {
    from: "center",
    amount: 0.5,
    ease: "poser1.out",
  },
  onComplete: activateScrollAnimation,
});

function activateScrollAnimation() {
  gsap.to(text.chars, {
    yPercent: -100,
    ease: "sine.out",
    stagger: {
      from: "center",
      amount: 1,
    },
    scrollTrigger: {
      trigger: ".heading",
      start: "top top",
      scrub: 1,
      end: () => `+=${document.querySelector('.heading').offsetHeight + 0.25}`,
    }
  });
}