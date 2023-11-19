import "./main.scss";

const text = document.querySelector('input');
const form = document.querySelector('form');
const res = document.querySelector('.result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const filterString = text.value.replace("#", "");
  const redColor = filterString.substring(0, 2);
  const greenColor = filterString.substring(2, 4);
  const blueColor = filterString.substring(4, 6);

  const result = () => `rgb(${parseInt(redColor, 16)}, ${parseInt(greenColor, 16)}, ${parseInt(blueColor, 16)})`;
  console.log(result());

  document.body.style.backgroundColor = result();
  res.textContent = result();
})