const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('pwd');

togglePassword.addEventListener('click', function () {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    // Change the eye icon based on the password visibility
    this.classList.toggle('fa-eye-slash');
});
