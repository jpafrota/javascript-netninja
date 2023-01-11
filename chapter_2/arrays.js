let ninjas = ['Shaun', 'Ryu', 'Chun-li'];

ninjas[1] = 'Ken'
console.log(ninjas)

let ages = [20, 25, 30, 35]
console.log(ages)
console.log(ages[2])

// you can store multiple data types inside an array.
let random = ['Shaun', 'Crystal', 30, 20];
console.log(random)

console.log(ninjas.length)
console.log(random.length)

// ---- Array methods

let result = ninjas.join(',');
console.log(result);

result = ninjas.indexOf('Chun-li')
console.log(result)

result = ninjas.concat(['Ken', 'Crystal']);
console.log(result)

// NOTE: push is a destructive method. which means that it alters
// the original value of the variable, differently from the last methods we used.
ninjas.push('Zoro')
console.log(ninjas)

ninjas.pop()
console.log(ninjas)

