// example of forEach usage with HTML

const ul = document.querySelector('.people');

const people = ['jorge', 'maycon', 'vetor', 'sara']

let html = ``;

const createTemplate = (person) => {
    html += `<li style="color: purple">${person}</li>`;
}

people.forEach(createTemplate);

ul.innerHTML = html;