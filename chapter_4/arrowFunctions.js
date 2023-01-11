// regular function (expression)

// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// }


// arrow function

// First way to declare
/* 
const calcArea = (radius) => {
    return 3.14 * radius**2;
} */

// You can declare like this if you have one parameter and one expression to return.
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5)
console.log(`Area is: ${area}`);

// pratice
const greet = () => 'hello, world!'
const result = greet();
console.log(result)

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2))

/**
 * Arrow functions don't have their own bindings to 'this', 'arguments' or 'super', and should not be used as methods.
 * Arrow functions don't have access to the new.target keyword.
 * Arrow functions aren't suitable for 'call', 'apply' and 'bind' methods, which generally rely on establishing a scope.
 * Arrow functions cannot be used as constructors.
 * Arrow functions cannot use 'yield', within its body.
 */