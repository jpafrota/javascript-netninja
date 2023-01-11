let userOne = {name: 'Shaun', score: 100};
let userTwo = userOne;

userOne.score = 40;

console.log(userOne);
console.log(userTwo);

// updates the userTwo variable with a pointer to the new object
userTwo = {name: 'Shaun', score: 200}
console.log(userOne);
console.log(userTwo);