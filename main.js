/* JS */
/* Styles */
import "./main.scss"
import SplitType from "split-type";
import gsap, {} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "-260px top",
        end: "300px center",
        scrub: 1,
        // markers: true,
    }
})
tl.to(".lampcontainer", { scale: 0.6}, 0);