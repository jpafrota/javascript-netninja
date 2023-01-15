const request = new XMLHttpRequest();

const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {

            // console.log(request)
        
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                console.log('could not fetch data');
                reject('Error getting resource.')
            }
        
        });
        
        request.open('GET', resource);
        request.send();
    });
    
}

getTodos('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        console.log('promise resolved: ', data);
        return getTodos('https://jsonplaceholder.typicode.com/todos/2');
    })
    .then((data) => {
        console.log('promise 2 resolved: ', data);
    })
    .catch((err) => {
        console.log('promise rejected: ', err);
    })