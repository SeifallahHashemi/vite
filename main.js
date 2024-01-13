/* JS */
/* Styles */
import "./main.scss"

const scrollerWrapper = document.querySelectorAll('.scroller');
scrollerWrapper.forEach(scroller => {
    
    const scrollers = Array.from(scroller.children);
    scrollers.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        scroller.appendChild(duplicatedItem);
    })
})