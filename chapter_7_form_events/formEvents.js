const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// The default action for a HTML page when button is submitted, is that the page gets refreshed.
form.addEventListener('submit', e => {
    e.preventDefault();

    // Validation
    const username = form.username.value;

    if (usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'that username is valid!';
    } else {
        // feedback help info
        feedback.textContent = 'username must contain letters only & be between 6 * 12 characters';
    }

    // console.log("Submitted!", username.value);
    // console.log(form.username.value);
});

// live feedback
form.username.addEventListener('keyup', e => {
    console.log(e.target.value, form.username.value);
    console.log(e);

    if (usernamePattern.test(e.target.value)) {
        // feedback good info
        form.username.setAttribute('class', 'success');
    } else {
        // feedback help info
        form.username.setAttribute('class', 'error');
    }

});
