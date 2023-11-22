// 1-calcul.js
function calculateNumber(type, a, b) {
    // Ensure that a and b are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
  
    // Round the numbers
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
  
    // Perform calculations based on the type
    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        // Check if roundedB is 0 to avoid division by zero
        if (roundedB === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
      default:
        throw new Error('Invalid type. Supported types are SUM, SUBTRACT, and DIVIDE.');
    }
  }
  
  module.exports = calculateNumber;
  