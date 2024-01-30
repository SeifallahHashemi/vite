/* JS */
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
/* Styles */
import "./main.scss"
window.onload = function () {
    addAnimation()
}
class Circle {
    constructor(el) {
        this.el = el;
        this.size = el.getBoundingClientRect().width;
        this.x = randomNumber(0, window.innerWidth - this.size);
        this.y = randomNumber(0, window.innerHeight - this.size);
        this.vx = randomNumber(2, 2.5) * Math.random() > 0.5 ? -1 : 1;
        this.vy = randomNumber(2, 2.5) * Math.random() > 0.5 ? -1 : 1;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;

        if(this.x >= window.innerWidth - this.size) {
            this.vx *= -1;
            this.x = window.innerWidth - this.size;
        }
        if(this.y >= window.innerHeight - this.size) {
            this.vy *= -1;
            this.y = window.innerHeight - this.size;
        }
        if(this.x <= 0) {
            this.vx *= -1;
            this.x = 0;
        }
        if(this.y <= 0) {
            this.vy *= -1;
            this.y = 0;
        }
    }
    move() {
        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
function addAnimation() {
    const circlesElement = document.querySelectorAll('.circle');
    const circles = Array.from(circlesElement).map((circle) => new Circle(circle))

    function update() {
        circles.forEach(circle => {
            circle.update()
            circle.move()
        })
        requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
}