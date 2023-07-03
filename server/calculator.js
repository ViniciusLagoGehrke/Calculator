const sum = require('./operations/sum');
const subtract = require('./operations/subtraction');
const multiply = require('./operations/multiply');
const divide = require('./operations/division');

const OPERATIONS = {
  SUM: 'SUM',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE'
}

const ERROR = {
  Invalid_Parameter: 'Parameter is not a number!',
  Invalid_Operator: 'Invalid operator!',
}

function calculator(number1, number2, operator) {
  if (number1 === null || number2 === null || number1 === undefined || number2 === undefined) {
    console.error(ERROR.Invalid_Parameter)
    throw new Error(ERROR.Invalid_Parameter);
  }

  if (isNaN(number1) || isNaN(number2)) {
    console.error(ERROR.Invalid_Parameter)
    throw new Error(ERROR.Invalid_Parameter);
  }
  
  if (typeof number1 === 'string' || typeof number2 === 'string') {
    console.error(ERROR.Invalid_Parameter)
    throw new Error(ERROR.Invalid_Parameter);
  }

  if(OPERATIONS[operator] === undefined) {
    console.error(ERROR.Invalid_Operator)
    throw new Error(ERROR.Invalid_Operator);
  }

  switch (operator) {
    case OPERATIONS.SUM:
      return sum(number1, number2)

    case OPERATIONS.SUBTRACT:
      return subtract(number1, number2)

    case OPERATIONS.MULTIPLY:
      return multiply(number1, number2)

    case OPERATIONS.DIVIDE:
      return divide(number1, number2)
  }
}

module.exports = {
  calculator
}