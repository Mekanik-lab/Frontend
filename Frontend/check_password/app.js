//variables
const input = document.querySelector('#input');
const btn = document.querySelector('.btn');
const firstItem = document.querySelector('#first_item');
const secondItem = document.querySelector('#second_item');
const thirdItem = document.querySelector('#third_item');
const fourthItem = document.querySelector('#fourth_item');
const icon = document.querySelector('.img');

function checkPasswordConditions(password) {
    const minLength = password.length >= 8;
    firstItem.classList.toggle('valid', minLength);
    firstItem.classList.toggle('invalid', !minLength);

    const hasUpperCase = /[A-Z]/.test(password);
    secondItem.classList.toggle('valid', hasUpperCase);
    secondItem.classList.toggle('invalid', !hasUpperCase);

    const hasLowerCase = /[a-z]/.test(password);
    thirdItem.classList.toggle('valid', hasLowerCase);
    thirdItem.classList.toggle('invalid', !hasLowerCase);

    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    fourthItem.classList.toggle('valid', hasSpecialChar);
    fourthItem.classList.toggle('invalid', !hasSpecialChar);
}

function togglePasswordVisibility() {
    if(input.type === "password")
    {
        input.type = "text";
        icon.src = "./images/hide.png"
    }
    else {
        input.type = "password";
        icon.src = "./images/show.png";
    }
}

input.addEventListener('input', function() {
    const inputValue = input.value;
    checkPasswordConditions(inputValue);
});

btn.addEventListener('click', togglePasswordVisibility);