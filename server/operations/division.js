function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by 0')

  return a / b;
}
module.exports = divide;