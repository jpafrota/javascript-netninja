// Callbacks & Foreach

/**
 * Callback functions are functions that return values to another functions
 * The function we pass as parameter is a callback function
 * The function that takes in the function (our callback) is a higher-order function.
 * 
 * Callbacks and higher-order functions shine on async contexts, which should be covered in the next
 * chapter of this course.
 */

const myFunc = (instruction) => {
    let value = 50;
    console.log(instruction(value));
};

myFunc(function (value) {
    return value * 2;
});


// The foreach is an array method that executes a callback function passed as argument.

array = [1,2,3]

// obs: the three parameters are default, previously defined in JS language. 
// check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const multiplyBy2 = (item, index, arr) => { 
    arr[index] = item * 2;
};

array.forEach(multiplyBy2);

console.log(array);
