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
    switch (operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return subtract(a, b)
            break;
        case '*':
            return multiply(a,b)
            break;
        case '/':
            return divide(a,b)
            break;
    default:
            break;
    }
}

let displayValue = '';
let firstNumber = 0;
let lastNumber = 0;
let storeOperator = '';
let result = 0;
let existResult = false;
const numbers = document.querySelectorAll('.numbers');
const currentDisplay = document.querySelector('.current-display');
const operators = document.querySelectorAll('.operators');
const historyDisplay = document.querySelector('.history-display');
const operateButton = document.querySelector('.operate');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (historyDisplay.textContent.charAt(historyDisplay.textContent.length-1) == '=') {
            historyDisplay.textContent = '';
        }
        displayValue = displayValue + number.textContent;
        currentDisplay.textContent = displayValue;  
   
    });
});
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (existResult) {
            storeOperator = operator.textContent;
            firstNumber = Number(result);
            historyDisplay.textContent = firstNumber + ' ' + operator.textContent;
            existResult = false;
        } else {
            storeOperator = operator.textContent;
            firstNumber = Number(displayValue);
            displayValue = displayValue + ' ' + operator.textContent;
            historyDisplay.textContent = displayValue;  
            displayValue = ''; 
        }
        
    });
});
operateButton.addEventListener('click', () => {
    if (historyDisplay.textContent != '') {
        lastNumber = Number(displayValue);
        result = operate(storeOperator, firstNumber, lastNumber);
        historyDisplay.textContent = historyDisplay.textContent + ' ' + lastNumber + ' =';
        if (result != undefined) {
            currentDisplay.textContent = result;
        } else {
            currentDisplay.textContent = 'OOPS';
        }
        existResult = true;
        displayValue = ''; 
    }
});

