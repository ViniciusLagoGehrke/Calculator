const subtract = require('../operations/subtraction');

describe('Subtraction operation', () => {
  test('Subtraction of 5 and 3 should return 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });
  
  test('Subtraction of -7 and 4 should return -11', () => {
    expect(subtract(-7, 4)).toBe(-11);
  });

  test('Subtraction of -13 and -24 should return 11', () => {
    expect(subtract(-13, -24)).toBe(11);
  });
  
  test('Subtraction of -42 and 0 should return -42', () => {
    expect(subtract(-42, 0)).toBe(-42);
  });

  test('Subtraction of 0 and -42 should return 42', () => {
    expect(subtract(0, -42)).toBe(42);
  });

  test('Subtraction of 0 and 0 should return 0', () => {
    expect(subtract(0, 0)).toBe(0);
  });
  
  test('Subtraction of 10 and -5 should return 15', () => {
    expect(subtract(10, -5)).toBe(15);
  });
  
  test('Subtraction of 100 and 100 should return 0', () => {
    expect(subtract(100, 100)).toBe(0);
  });
  
  test('Subtraction of -10 and -10 should return 0', () => {
    expect(subtract(-10, -10)).toBe(0);
  });
  
  test('Subtraction of 999 and 1 should return 998', () => {
    expect(subtract(999, 1)).toBe(998);
  });
  
  test('Subtraction of 1 and 999 should return -998', () => {
    expect(subtract(1, 999)).toBe(-998);
  });
  
  test('Subtraction of 123456789 and 987654321 should return -864197532', () => {
    expect(subtract(123456789, 987654321)).toBe(-864197532);
  });
  
  test('Subtraction of -987654321 and -123456789 should return -864197532', () => {
    expect(subtract(-987654321, -123456789)).toBe(-864197532);
  });
  
});
