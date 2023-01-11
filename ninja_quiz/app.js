const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
   
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    correctAnswers.forEach((answer, index) => {
        
        if (answer === userAnswers[index]) {
            score += 25;
        };

    });

    let result = document.querySelector('.result');

    result.classList.remove('d-none');
    
    scrollTo(0, 0);

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else { 
            output++;
        }
    }, 10);

    // console.log(score);

});

// setTimeout(() => {
//     // do something
// }, 3000);

// let i = 0; 
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if (i === 5) {
//         clearInterval(timer)
//     }
// }, 1000);