// Defines the variables operation and result
let operation = document.querySelector('.operation');
let result = document.querySelector('.result');

// Defines the buttons
const buttons = document.querySelectorAll('.key');
const efetuate = document.querySelector('.efetuate');
const clearAll = document.querySelector('.clearAll');
const clear = document.querySelector('.clear')

// Writing the operation through buttons
buttons.forEach((button) => {
    button.addEventListener('click',(event) => {
        operation.value = operation.value + button.value;
    })
});

// Cleaning all
clearAll.addEventListener('click', (event) => {
    operation.value = '';
    result.innerHTML = '';
})

// Cleaning last character
clear.addEventListener('click', (event) => {
    operation.value = operation.value.substring(0, operation.value.length - 1);
})

// Efetuate the operation through click on "="
efetuate.addEventListener('click', (event) => {
    // Spliting numbers from operators
    const target = operation.value;
    const numberExp = /[+-]/g;
    const values = target.split(numberExp);
    const operatorExp = /[+-]/g;
    const operators = target.match(operatorExp);
    // First value
    let partialResult = parseFloat(values[0]);
    // Adding or Subtracting values
    for(i=0; i < operators.length; i++){ 
        if(operators[i] == '+'){
            partialResult = partialResult + parseFloat(values[i+1]);
        }else{
            partialResult = partialResult - parseFloat(values[i+1]);
        }
    }
    // Writing result on html
    result.innerHTML = partialResult;
})