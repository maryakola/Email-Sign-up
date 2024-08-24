const signUpContainer = document.querySelector('.sign-up');
const successContainer = document.querySelector('.success');
const submitBtn = document.querySelector('.submit-btn');
const emailInput = document.querySelector('.email');
const invalidEmail = document.querySelector('.error-message');
const dismissBtn = document.querySelector('.dismiss-btn');

// Event Listener on Buttons
submitBtn.addEventListener('click', submitForm);
dismissBtn.addEventListener('click', dismiss);

// Validate Email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function submitForm() {
    const emailValue = emailInput.value; // Get the current value of the email input

    // Check if email is valid
    if (validateEmail(emailValue)) {
        successContainer.classList.remove('hide');
        signUpContainer.classList.add('hide');
    } else {
        invalidEmail.classList.remove('hide');
    }
}

function dismiss() {
    successContainer.classList.add('hide');
    signUpContainer.classList.remove('hide');
    invalidEmail.classList.add('hide');

    emailInput.value = ''; // Reset the email input field
}
