/* JS */
/* Styles */
import "./main.scss"
import SplitType from "split-type";
import gsap from "gsap";

const myText = new SplitType('#my-text')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})