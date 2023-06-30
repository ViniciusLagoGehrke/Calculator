const sum = require('../operations/sum');

describe('Sum operation', () => {
  test('Sum of 1 and 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Sum of 2.0 and 3.0 to equal 5', () => {
    expect(sum(2.0, 3.0)).toBe(5);
  });

  test('Sum of 2.5 and 2.5 to equal 5', () => {
    expect(sum(2.5, 2.5)).toBe(5);
  });

  test('Sum of -7 and 4 should return -3', () => {
    expect(sum(-7, 4)).toBe(-3);
  });
  
  test('Sum of 0 and 0 should return 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  
  test('Sum of 13 and 0 should return 0', () => {
    expect(sum(13, 0)).toBe(13);
  });

  test('Sum of 0 and 42 should return 0', () => {
    expect(sum(0, 42)).toBe(42);
  });
  
  test('Sum of 10 and -5 should return 5', () => {
    expect(sum(10, -5)).toBe(5);
  });
  
  test('Sum of 100 and 100 should return 200', () => {
    expect(sum(100, 100)).toBe(200);
  });
  
  test('Sum of -10 and -10 should return -20', () => {
    expect(sum(-10, -10)).toBe(-20);
  });
  
  test('Sum of 999 and 1 should return 1000', () => {
    expect(sum(999, 1)).toBe(1000);
  });
  
  test('Sum of 1 and 999 should return 1000', () => {
    expect(sum(1, 999)).toBe(1000);
  });
  
  test('Sum of 123456789 and 987654321 should return 1111111110', () => {
    expect(sum(123456789, 987654321)).toBe(1111111110);
  });
  
  test('Sum of -987654321 and -123456789 should return -1111111110', () => {
    expect(sum(-987654321, -123456789)).toBe(-1111111110);
  });
});
