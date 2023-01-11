const link = document.querySelector('a');

// this retrieves the value of the given attribute
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');

const msg = document.querySelector('body > p.error');
console.log(msg.innerHTML);
console.log(msg.getAttribute('class'));

/**
 * Not the best way: 
 * msg.setAttribute('class', 'success');
 * msg.setAttribute('style', 'color: green;');
 * msg.innerHTML = "Success!!";
*/


// Best way to manipulate CSS properties is using the 'style' attribute: 
const title = document.querySelector('h1');
title.style.color = 'orange';
console.log(title.style.color);

title.style.margin = '50px';
title.style.fontSize = '60px';
title.style.color = 'crimson';