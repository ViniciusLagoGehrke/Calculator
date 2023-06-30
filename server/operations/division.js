function divide(a, b) {
  if (b === null || b === undefined) return 1;
  
  if (b === 0) throw new Error('Cannot divide by 0')
  
  if (isNaN(a) || isNaN(a)) throw new Error('Parameter is not a number!')
  
  if (typeof a === 'string' || typeof b === 'string') throw new Error('Parameter is not a number!')

  return a / b;
}
module.exports = divide;