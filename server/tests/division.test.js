const divide = require('../operations/division');

describe('Multiplication operation', () => {
  test('Division of 6 by 2 should return 3', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test('Division of -8 by 4 should return -2', () => {
    expect(divide(-8, 4)).toBe(-2);
  });

  test('Division of 0 by 5 should return 0', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('Division of 10 by -5 should return -2', () => {
    expect(divide(10, -5)).toBe(-2);
  });

  test('Division of 100 by 100 should return 1', () => {
    expect(divide(100, 100)).toBe(1);
  });

  test('Division of -10 by -10 should return 1', () => {
    expect(divide(-10, -10)).toBe(1);
  });

  test('Division of 999 by 1 should return 999', () => {
    expect(divide(999, 1)).toBe(999);
  });

  test('Division of 1 by 999 should return 0.001001001001001001', () => {
    expect(divide(1, 999)).toBe(0.001001001001001001);
  });

  test('Division of 1 by 0.001001001001001001 should return 999', () => {
    expect(divide(1, 0.001001001001001001)).toBe(999);
  });

  test('Division of 121932631137655469 by 123456789 should return 987654321', () => {
    expect(divide(121932631137655469, 123456789)).toBe(987654321.2026637);
  });

  test('Division of 121932631137655469 by -123456789 should return -987654321', () => {
    expect(divide(121932631137655469, -123456789)).toBe(-987654321.2026637);
  });

  test('Division of 10 by 0 should throw an error', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by 0');
  });

  test('Division of 0 by 0 should throw an error', () => {
    expect(() => divide(0, 0)).toThrow('Cannot divide by 0');
  });

  test('Division of 10 by "2" (string) should throw an error', () => {
    expect(() => divide(10, "2")).toThrow('Parameter is not a number!');
  });

  test('Division of 10 by null should return 1', () => {
    expect(divide(10, null)).toBe(10/10);
  });

  test('Division of 10 by undefined should return 1', () => {
    expect(divide(10, undefined)).toBe(10/10);
  });

});
