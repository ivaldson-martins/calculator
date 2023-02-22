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