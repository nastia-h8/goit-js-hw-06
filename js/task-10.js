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
  for (let i = 0; i < amount; i += 1) {
    const newBoxes = document.createElement('div')
    
    newBoxes.style.width = 30 + i * 10 + 'px';
    newBoxes.style.height = 30 + i * 10 + 'px';
    newBoxes.style.backgroundColor = getRandomHexColor();
    
    boxes.append(newBoxes)
  }
  console.log('працює')
}

function destroyBoxes() {
  boxes.remove()
}


createBtn.addEventListener('click', handleSubmit)
createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)


  




