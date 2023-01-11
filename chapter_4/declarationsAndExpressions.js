greet();
// speak(); ---> throws error!

/**
 * Function Declaration
 * > Has Hoisting
 * > This is better to be avoided, because it is a globally declared function,
 * which means it can access all variables globally.
 */
function greet() {
    console.log('hello, world!');
}

// Function Expression
// Does NOT have Hoisting
// When declaring functions this way, they cannot be changed, bc it's stored in a constant.
const speak = function () {
    console.log('Good day, guys!');
}; // needs semicolon

/**
 * Note: function expressions are anonymous, but they CAN have a name, in order to refer to itself.
 */
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
console.log(factorial(5));

// Function expressions are useful when passing a function as an argument to another function, such as map, filter, reduce, etc.

greet();
speak();