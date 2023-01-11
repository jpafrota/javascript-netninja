/**
 * Often, while programming, we might not know which and how many tags are in some kind of section, 
 * especially when taking into consideration that JS generates dynamic content throughout time.
 * 
 * To prevent picking up the wrong objects, using 'parent', 'child' and 'sibling' notation makes it
 * easier to select elements, even though we do not know exactly what tags they are made of.
 */

const article = document.querySelector('article');

console.log(article.children);
console.log(Array.from(article.children)); // transforms the HTMLCollection into an Array. returns a new value.

let articleArray = Array.from(article.children);

articleArray.forEach(child => {
    child.classList.add('article-element');
});

const title = document.querySelector('h2')
console.log(title.parentElement)
console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)
console.log(title.nextSibling); // this returns the next node that can be text, comment or element. above is preferred

// More node relations chaining
console.log(title.nextElementSibling.parentElement.children);