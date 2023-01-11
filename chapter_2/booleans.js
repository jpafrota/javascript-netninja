// booleans & comparisons
console.log(true, false, 'true', 'false');

// methods can return booleans
let email = 'luigi@thenetninja.co.uk'
let names = ['mario', 'luigi', 'toad'];

let result = email.includes('@')
console.log(result)

result = email.includes('!')
console.log(result)

result = names.includes('mario')
console.log(result)
result = names.includes('bowser')
console.log(result)

let age = 25



console.log(`Age \= 25? ${age == 25}`)
console.log(`Age !\= 25? ${age != 25}`)
console.log(`Age \= 30? ${age == 30}`)


let firstName = 'shaun';
console.log(firstName == 'shaun')
console.log(firstName == 'Shaun')

// compares the order of the alphabet in the letters
// in order. so 'shaun' > 'crystal' is true ! because 's' is greater than 'c'
console.log(firstName > 'crystal')

// Not only it is greater in the alphabet, but it is also greater than any capital letter
// due to the ASCII table.
console.log(firstName > 'Shaun')
console.log(firstName > 'Crystal')

