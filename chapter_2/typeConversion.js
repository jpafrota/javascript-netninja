// type conversion (casting)

let score = '100';

console.log(score + 1)
console.log(Number(score) + 1)

console.log(typeof score)
console.log(typeof Number(score))

let result = String(50);
console.log(result, typeof result)

result = Boolean(1);
console.log(result, typeof result)

// Strings of any length are all 'true'
result = Boolean('0');
console.log(result, typeof result)

// Empty strings return false
result = Boolean('')
console.log(result, typeof result)


