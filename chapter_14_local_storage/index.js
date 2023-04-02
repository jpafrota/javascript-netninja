// Store data in localStorage
// * all data stored in localStorage is a String of data
localStorage.setItem('name', 'George');
localStorage.setItem('age', '14');


// Get data from localStorage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');


// Update data from localStorage
localStorage.setItem('name', 'Francis');
localStorage.setItem('age', '43');


// Delete item from localStorage
localStorage.removeItem('name');
localStorage.removeItem('age');


// Clear all items in localStorage
localStorage.clear();


// Store and get data as JSON
const data = [
    {name: 'George', age: '12'},
    {name: 'Gulliver', age: '14'},
    {name: 'Francis', age: '16'}
];

localStorage.setItem('data', JSON.stringify(data)); 
const stored = localStorage.getItem('data');
console.log(JSON.parse(stored));