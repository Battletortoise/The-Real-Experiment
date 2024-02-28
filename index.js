// git Workflow Practice file

// mathFunctions.js

/** Raul Garcia
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/** Eric Roth
 * Subtracts one number from another.
 * @param {number} a
 * @param {number} b
 * @returns {number} The result of subtracting b from a.
 */
function subtract(a, b) {
  return a - b;
}

/** Richard Li
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/** Wyatt Grayson
 * Divides one number by another.
 * @param {number} a
 * @param {number} b
 * @returns {number} The result of dividing a by b.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
