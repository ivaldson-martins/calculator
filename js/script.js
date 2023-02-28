function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    if (a*b == 0) {
        return undefined;
    }
    return a / b;
}
function operate(operator, a, b) {
    return operator(a,b);
}

let displayValue = '';
let firstNumber = 0;
let lastNumber = 0;
const numbers = document.querySelectorAll('.numbers');
const currentDisplay = document.querySelector('.current-display');
const operators = document.querySelectorAll('.operators');
const historyDisplay = document.querySelector('.history-display');
const operateButton = document.querySelector('.operate');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        displayValue = displayValue + number.textContent;
        currentDisplay.textContent = displayValue;  
   
    });
});
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        firstNumber = Number(displayValue);
        displayValue = displayValue + ' ' + operator.textContent;
        historyDisplay.textContent = displayValue;  
        displayValue = '';
    });
});
operateButton.addEventListener('click', () => {
    if (historyDisplay.textContent != '') {
        lastNumber = Number(displayValue);

    }
});
lastNumber = operate(add, 2, 2);
console.log(lastNumber);