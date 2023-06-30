const sum = require('../operations/sum');

describe('Sum operation', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 2.0 + 3.0 to equal 5', () => {
    expect(sum(2.0, 3.0)).toBe(5);
  });

  test('adds 2.5 + 2.5 to equal 5', () => {
    expect(sum(2.5, 2.5)).toBe(5);
  });
});
