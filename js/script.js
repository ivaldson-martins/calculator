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
const numbers = document.querySelectorAll('.numbers');
const currentDisplay = document.querySelector('.current-display');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        displayValue = displayValue + number.textContent;
        currentDisplay.textContent = displayValue;  
        console.log(displayValue);    
    });
});


console.log(currentDisplay);