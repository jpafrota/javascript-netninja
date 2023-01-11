const content = document.querySelector('p');

console.log(content.classList); // returns all classes of the given object.

content.classList.add('error');  // add a new class
content.classList.add('test'); 
content.classList.add('logs'); 
console.log(content.classList);

content.classList.remove('logs'); 
console.log(content.classList); 

content.className = 'success'; // 'set' (overrides) the class name with the given string

// ---------------------------------------------------

const paras = document.querySelectorAll('p');
console.log(paras);

paras.forEach(para => {

    // in this case, we use textContent instead of innerText
    // innerText attribute consider ONLY >visible< text
    // if a style with 'display: none;' was applied, it would not apply.
    if (para.textContent.includes('error')) {
        para.className = 'error';
    } else if (para.textContent.includes('success')) {
        para.className = 'success';
    }
});

// also check out classList.toggle() method.