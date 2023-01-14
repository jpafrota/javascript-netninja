const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {

    const html = `
    <li class="list-group-item text-light d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;

}

addForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();  // resets all input fields inside form.
    }

    

});