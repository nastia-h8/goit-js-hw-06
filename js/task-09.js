function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const button = document.querySelector('.change-color');
const textOutput = document.querySelector('.color');

button.addEventListener('click', (event) => {
  body.style.backgroundColor = getRandomHexColor();
  textOutput.textContent = `${body.style.backgroundColor}`
})