// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should add two rounded numbers when type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 5.5, 3.3), 9);
  });

  it('should subtract b from a when type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 8.8, 2.2), 7);
  });

  it('should divide a by b when type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
  });

  it('should return Error when attempting to divide by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 7, 0), 'Error');
  });

  // Edge case: invalid type
  it('should throw an error for an invalid type', () => {
    assert.throws(() => calculateNumber('INVALID_TYPE', 2, 3), Error);
  });
});
