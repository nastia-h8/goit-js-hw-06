const textInput = document.querySelector("#validation-input");
const validDataLength = parseInt(textInput.getAttribute("data-length"))


textInput.addEventListener('blur', (event) => {
    if (textInput.value.length === validDataLength) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
})
