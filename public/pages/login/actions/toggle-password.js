const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
    if ( passwordInput.type === 'password' ){
        passwordInput.type = 'text';
        togglePasswordButton.innerHTML = '&#x1F441';
        togglePasswordButton.setAttribute('aria-label', 'Hide password.');
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.innerHTML = '&#x1F441';
        togglePasswordButton.setAttribute('aria-label', 'Show password as plain text. ' +  'Warning: this will display your password on the screen.');
    }
}