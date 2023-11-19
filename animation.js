import "./main.scss";


// Trailing Images
const hero = document.querySelector('.hero'),
heroTitle = document.querySelector('.hero-title > .ofh > h1');

const settings = {
  isEnabled: false,
  count: 1,
  time: 50,
}
const images = [
  './images/hero_ (1).jpeg',
  './images/hero_ (1).jpg',
  './images/hero_ (1).png',
  './images/hero_ (2).jpeg',
  './images/hero_ (2).jpg',
  './images/hero_ (2).png',
  './images/hero_ (3).jpeg',
  './images/hero_ (3).jpg',
  './images/hero_ (4).jpeg',
  './images/hero_ (4).jpg',
  './images/hero_ (5).jpg',
  './images/hero_ (6).jpg',
]

const loadImages = () => {
  for (let i = 0; i < images.length; i++) {
    let link = document.createElement('link');
    link.rel = 'preload'
    link.as = 'image';
    link.href = images[i],
    document.head.appendChild(link)
  }
}
const calcIndex = (length) => {
  settings.count++;
  if (settings.count == length) settings.count = 0
  return settings.count
}
const animateImage = (event) => {
  const image = document.createElement('img')
  const imageSize = 20
  const countIndex = calcIndex(images.length)

  image.classList.add('hero_media')
  image.setAttribute('src', images[countIndex])
  image.style.width = `${imageSize}rem`
  image.style.height = `${imageSize}rem`
  image.style.top = event.pageY - (imageSize * 10) / 2 + 'px';
  image.style.left = event.pageX - (imageSize * 10) / 2 + 'px';

  hero.appendChild(image);

  const randomDeg = Math.floor(Math.random() * 15);
  window.setTimeout(() => {
    image.style.transform = `scale(1)`
    image.style.transform = `rotate(${randomDeg}deg)`
  }, 50)

  window.setTimeout(() => {
    image.style.opacity = 0
    image.style.filter = `blur(10px)`
    image.style.transform = `scale(0.25)`
  }, 1500)

  window.setTimeout(() => {
    hero.removeChild(image)
  }, 2500)
}

window.addEventListener('mousemove', (event) => {
  if (!settings.isEnabled) {
    settings.isEnabled = true;
    setTimeout(() => {
      settings.isEnabled = false
    }, settings.time)
    animateImage(event)
  }
})

window.onload = () => {
  loadImages()
}