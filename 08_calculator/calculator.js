const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => acc * num);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let result = 1; // Initialize a result variable to 1
  for (let i = 1; i <= num; i++) {
    // Loop from 1 to num
    result *= i; // Multiply result by the current number i
  }
  return result; // Return the final result
};

console.log(factorial(5)); // Outputs: 120

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
