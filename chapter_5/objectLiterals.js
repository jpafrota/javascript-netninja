// Object literals

let user = {
    name: 'jorge',
    age: '23',
    email: 'jorgepabloafrota@gmail.com',
    location: 'Manaus',
    blogs: ['My journal', 'Shower thoughts']
};

console.log(user);
console.log(user.name);

user.age = 35;

console.log(user.age);
console.log(user['email'])

// you can use dot or square brackets notation to access object attributes
// square brackets notation is useful when using variables:

key = 'location';
console.log(user[key]);
