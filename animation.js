import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const heading = document.querySelector('h1');
const headingSplit = new SplitType(heading);
const images = gsap.utils.toArray('img');
const letters = heading.querySelectorAll('.char');
console.log(headingSplit);

letters.forEach((letter, index) => {
    const YPercent = randomNumber(70, 1100)
    
    gsap.fromTo(letter, {
        yPercent: -YPercent,
        opacity: 0,
    }, {
        yPercent: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: heading,
            start: "top bottom",
            end: "bottom center",
            scrub: true,
        }
    })
})

images.forEach(img => {
    const speed = img.dataset.speed;

    gsap.to(img, {
        yPercent: -speed * 50,
        ease: 'none',
        scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            scrub: true,
        }
    })
})

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)