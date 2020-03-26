const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') { //trim reduce the white space both side of string
            showError(input, ` ${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}

// get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    // if (username.value === '') {
    //     showError(username, 'user name is required');
    // } else {
    //     showSuccess(username);
    // }

    // if (email.value === '') {
    //     showError(email, 'email is required');
    // } else if (!isEmailValid(email.value)) {
    //     showError(email, 'email is not valid');
    // }
    // else {
    //     showSuccess(email);
    // }

    // if (password.value === '') {
    //     showError(password, 'password is required');
    // } else {
    //     showSuccess(password);
    // }

    // if (password2.value === '') {
    //     showError(password2, 'confirm password is required');
    // } else {
    //     showSuccess(password2);
    // }
});