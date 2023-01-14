const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    const hours = `0${now.getHours()}`.slice(-2);
    const mins = `0${now.getMinutes()}`.slice(-2);
    const seconds = `0${now.getSeconds()}`.slice(-2);

    clock.innerHTML = `
    <span>${hours}</span> : 
    <span>${mins}</span> : 
    <span>${seconds}</span>
    `

};

setInterval(tick, 1000);