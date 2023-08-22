let result = document.getElementById("result");
let currentInput = "";

function appendToResult(value) {
    currentInput += value;
    result.value = currentInput;
}

function clearResult() {
    currentInput = "";
    result.value = "";
}

function operate(operator) {
    appendToResult(operator);
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        result.value = currentInput;
    } catch (error) {
        result.value = "Error";
    }
}
