// The Document Object Model
/**
 * The DOM is and object created by the browser when and HTML code loads inside it.
 * It posesses a variety of methods and properties which allows us to manipulate the html page as we see fit.
 * 
 */

// Ex of property of the DOM
console.log(document.location);

// Querying objects
const paragraph = document.querySelector('p');

// Returns a NodeList object, which contains forEach function.
const paras = document.querySelectorAll('p');
console.log(paras)
paras.forEach(parag => {
    console.log(parag)
})

// There's a difference between NodeList and HTMLCollection. See later.
const title = document.getElementById('page-title');
console.log(title);

// NOTE: this type of query does not have forEach method built-in.
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]['innerHTML'])

// Get elements by tag name (returns HTML Collection)
let moreParas = document.getElementsByTagName('p');
console.log(paras);