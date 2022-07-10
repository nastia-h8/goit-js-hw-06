function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input');


function handleSubmit() {
  const amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const newBoxesArr = [];
  
  for (let i = 1; i <= amount; i += 1) {
    const newBoxes = document.createElement('div');     
    newBoxes.style.width = 30 + i * 10 + 'px';
    newBoxes.style.height = 30 + i * 10 + 'px';
    newBoxes.style.backgroundColor = getRandomHexColor();
    newBoxesArr.push(newBoxes);
  }
    boxes.append(...newBoxesArr);
}

function destroyBoxes() {
  boxes.remove();
  input.value = '';
  location.reload();
}

createBtn.addEventListener('click', handleSubmit);
destroyBtn.addEventListener('click', destroyBoxes);