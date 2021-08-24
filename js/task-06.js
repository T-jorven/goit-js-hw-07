const currentInput = document.getElementById("validation-input");
const dataLength = currentInput.getAttribute("data-length");


currentInput.addEventListener('change', validationOfInput);

function validationOfInput(event) {
    let inputLength = event.currentTarget.value.length;

    if (inputLength == dataLength) {
        console.log(true);
        currentInput.classList.add("valid");
        currentInput.classList.remove("invalid");
    } else {
        currentInput.classList.add("invalid");
        currentInput.classList.remove("valid");
    }
}