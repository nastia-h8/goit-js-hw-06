function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input');

function handleSubmit() {
  const inputData = input.value;
  console.log(inputData)
}

function createBoxes() {
  for (let i = 1; i <= 10; i += 1){
    const newBoxes = document.createElement('div')
    
    newBoxes.classList.add("box");
    
    newBoxes.style.width = '30px';
    newBoxes.style.height = '30px';
    newBoxes.style.backgroundColor = getRandomHexColor();
    
    boxes.append(newBoxes)
  }
  console.log('працює')
}

function destroyBoxes() {
  for (let i = 1; i <= 10; i += 1){
  const boxesToDelete = document.querySelector('#boxes .box');
  boxesToDelete.remove();
  }
  console.log('теж працює') 
}


createBtn.addEventListener('click', handleSubmit)
createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)


  




