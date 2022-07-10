const nameInput = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');


nameInput.addEventListener('input', (event) => {
    if (nameInput.value === '') {
        spanText.textContent = 'Anonymous';
    } else {
        spanText.textContent = event.currentTarget.value;
    }
})