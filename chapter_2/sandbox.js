// let, const and var

console.log(1);
console.log(2);

let age = 25;
let year = 2019;

const points = 100;

age = 30;

console.log(age, year);
console.log(age + year);
console.log(points);

var score = 72;
console.log(score);

// strings

let firstName = 'Brandon';
let lastName = 'Sanderson';
let email = 'mario@thenetninja.co.uk'


// string concatenation
let fullName = firstName + ' ' + lastName; 

console.log(fullName);

// getting characters

console.log(fullName[0]);
console.log(fullName[2]);
 

// string lengths
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

// ---- common string methods
let res = email.lastIndexOf('n');
console.log(res)

res = email.slice(4, 10)
console.log(res)

res = email.substring(4, 10)
console.log(res)

res = email.split('@')
console.log(res)

res = email.replace('m','w')
console.log(res);

res = email.replaceAll('n','w')
console.log(res);