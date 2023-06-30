const multiply = require('../operations/multiply');

describe('Multiplication operation', () => {
  test('Multiplication of 2 and 3 should return 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  
  test('Multiplication of -7 and 4 should return -28', () => {
    expect(multiply(-7, 4)).toBe(-28);
  });
    
  test('Multiplication of 10 and -5 should return -50', () => {
    expect(multiply(10, -5)).toBe(-50);
  });

  test('Multiplication of 42 and 0 should return 0', () => {
    expect(multiply(42, 0)).toBe(0);
  });

  test('Multiplication of 0 and 5 should return 0', () => {
    expect(multiply(0, 5)).toBe(0);
  });
  
  test('Multiplication of 100 and 100 should return 10000', () => {
    expect(multiply(100, 100)).toBe(10000);
  });
  
  test('Multiplication of -10 and -10 should return 100', () => {
    expect(multiply(-10, -10)).toBe(100);
  });
  
  test('Multiplication of 999 and 1 should return 999', () => {
    expect(multiply(999, 1)).toBe(999);
  });
  
  test('Multiplication of 1 and 999 should return 999', () => {
    expect(multiply(1, 999)).toBe(999);
  });  
});
