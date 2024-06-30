/* Functions and Scope */
/* Understand how to declare functions, function expressions, arrow functions, and learn about scope. */

/* Write a function to calculate the factorial of a number. */

const factorial = (n) => {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(`${factorial(10)}`);

/* Explore the difference between var, let, and const in terms of scope. */

const x = 1; // const variable will makes the variable unchangeable and makes a constant value throughout the program
var y = 2; // var variable used for block scope
let z = 3; // let variable used for global scope access with changeable value
