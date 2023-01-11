const button = document.querySelector('button');
const ul = document.querySelector('ul');

// the 'click' parameter is a javascript built-in event. check mdn docs for more info on event names.
button.addEventListener('click', () => {
    console.log('you clicked me!');
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    console.log('added new task');
    ul.appendChild(li);
    // ul.prepend(li); // this adds the element to the beginning of the parent element.
})

const tasks = document.querySelectorAll('li');
 

// NOT EFFICIENT APPROACH. Check below
/* tasks.forEach((task) => {
    task.addEventListener('click', (e) => {
        console.log(`completed task ${task.innerText}`);
        console.log('event in LI');
        e.stopPropagation(); // stops propagation to parent element.
        // console.log(e); // this is the 'event' element that just occurred.
        // console.log(e.target); // this is the 'task' element
        
        task.style.textDecoration = 'line-through';
        // task.remove()
    })
})
*/

/**
 * It is not efficient to add event listeners to every single li tag. This slows down the code and can easily
 * generate a lot of pain while maintaining code and updating elements. Instead, we can use Event Delegation
 * alongside with e.target property to fire the event only on specific tags, using the parent node.
*/

ul.addEventListener('click', e => {
    console.log('event in UL');
    console.log(e.target);
    console.log(e.target.tagName);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});