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

let displayValue = '0';
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
const clearButton = document.querySelector('.clear');
function clear() {
    displayValue = '0';
    firstNumber = 0;
    lastNumber = 0;
    storeOperator = '';
    result = 0;
    existResult = false;
    historyDisplay.textContent = '';
    currentDisplay.textContent = '0';
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (historyDisplay.textContent.charAt(historyDisplay.textContent.length-1) == '=') {
            historyDisplay.textContent = '';
        }
        if (existResult) {
            clear();
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
        } else if (storeOperator != '' && displayValue != ''){
            lastNumber = Number(displayValue);
            result = operate(storeOperator, firstNumber, lastNumber);
            console.log(result, storeOperator);
            if (result != undefined) {
                storeOperator = operator.textContent;
                result = Math.round(result * 10000000000) / 10000000000;
                historyDisplay.textContent = result + ' ' + storeOperator;
                currentDisplay.textContent = result;
            } else {
                alert(`I'm sorry Sir, I'm afraid I can't do that`);
            clear();
            }
            firstNumber = Number(result);
            displayValue = '';
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
    if (historyDisplay.textContent != '' && displayValue != '') {
        lastNumber = Number(displayValue);
        result = operate(storeOperator, firstNumber, lastNumber);
        if (result != undefined) {
            result = Math.round(result * 10000000000) / 10000000000;
            historyDisplay.textContent = historyDisplay.textContent + ' ' + lastNumber + ' =';
            currentDisplay.textContent = result;
        } else {
            alert(`I'm sorry Sir, I'm afraid I can't do that`);
            clear();
        }
        existResult = true;
        displayValue = ''; 
    }
});
clearButton.addEventListener('click', clear);
