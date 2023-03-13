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
let arrayOperators = ['/','*','-','+'];
const numbers = document.querySelectorAll('.numbers');
const currentDisplay = document.querySelector('.current-display');
const operators = document.querySelectorAll('.operators');
const historyDisplay = document.querySelector('.history-display');
const operateButton = document.querySelector('.operate');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const dotButton = document.querySelector('.dot');
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
function inputOperate(value) {
    if (existResult) {
        storeOperator = value;
        firstNumber = Number(result);
        historyDisplay.textContent = firstNumber + ' ' + value;
        existResult = false;
    } else if (storeOperator != '' && displayValue != '') {
        lastNumber = Number(displayValue);
        result = operate(storeOperator, firstNumber, lastNumber);
        console.log(result, storeOperator);
        if (result != undefined) {
            storeOperator = value;
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
        if (displayValue == '') {
            storeOperator = value;
            historyDisplay.textContent = firstNumber + ' ' + value;
        } else {
            console.log(storeOperator, displayValue);
            storeOperator = value;
            firstNumber = Number(displayValue);
            historyDisplay.textContent = displayValue + ' ' + value;
            displayValue = '';
        }
    }
    
}
function uploadDisplay(value) {
    if (existResult) {
        clear();
    }
    displayValue = Number(displayValue + value);
    currentDisplay.textContent = displayValue;
    displayValue = displayValue.toString();
}
numbers.forEach(number => {
    number.addEventListener('click', () => {
        uploadDisplay(number.textContent);
    });
});
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        inputOperate(operator.textContent);
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
            alert(`I'm sorry Human, I'm afraid I can't do that`);
            clear();
        }
        existResult = true;
        displayValue = ''; 
    }
});
deleteButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0, displayValue.length-1)
    displayValue = Number(displayValue);
    currentDisplay.textContent = displayValue;
    displayValue = displayValue.toString();

});
dotButton.addEventListener('click', () => {
    if (displayValue.includes('.')) {
        prompt('a')
    } else {
        displayValue = displayValue + dotButton.textContent;
        currentDisplay.textContent = displayValue;
        displayValue = displayValue.toString();
    }
});
clearButton.addEventListener('click', clear);

window.addEventListener('keydown', (event) => {
    let a = Number(event.key)
    if (Number.isInteger(a)) {
        uploadDisplay(event.key); 
    } else if (arrayOperators.includes(event.key)) {
        inputOperate(event.key);
    }
});
