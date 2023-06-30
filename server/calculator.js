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

function calculator(a, b, operator) {
  switch (operator) {
    case OPERATIONS.SUM:
      return sum(a, b)

    case OPERATIONS.SUBTRACT:
      return subtract(a, b)

    case OPERATIONS.MULTIPLY:
      return multiply(a, b)

    case OPERATIONS.DIVIDE:
      return divide(a, b)
  }
}

module.exports = {
  calculator,
  OPERATIONS
}