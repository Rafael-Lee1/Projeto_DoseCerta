document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateForm();
    });

    emailInput.addEventListener('blur', function () {
        validateEmail();
    });

    passwordInput.addEventListener('blur', function () {
        validatePassword();
    });

    function validateForm() {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value;

        if (emailValue === '') {
            alert('O campo E-mail deve estar preenchido');
            emailInput.classList.add('input-error');
        } else if (!isValidEmail(emailValue)) {
            alert('O campo E-mail deve ser válido (deve conter @ e .com)');
            emailInput.classList.add('input-error');
        } else {
            emailInput.classList.remove('input-error');
        }

        if (passwordValue === '') {
            alert('O campo Senha deve estar preenchido');
            passwordInput.classList.add('input-error');
        } else if (passwordValue.length < 6) {
            alert('A senha deve conter pelo menos 6 caracteres');
            passwordInput.classList.add('input-error');
        } else {
            passwordInput.classList.remove('input-error');
        }

        if (!emailInput.classList.contains('input-error') && !passwordInput.classList.contains('input-error')) {
            form.submit();
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            alert('O campo E-mail deve estar preenchido');
            emailInput.classList.add('input-error');
        } else if (!isValidEmail(emailValue)) {
            alert('O campo E-mail deve ser válido (deve conter @ e .com)');
            emailInput.classList.add('input-error');
        } else {
            emailInput.classList.remove('input-error');
        }
    }

    function validatePassword() {
        const passwordValue = passwordInput.value;
        if (passwordValue === '') {
            alert('O campo Senha deve estar preenchido');
            passwordInput.classList.add('input-error');
        } else if (passwordValue.length < 6) {
            alert('A senha deve conter pelo menos 6 caracteres');
            passwordInput.classList.add('input-error');
        } else {
            passwordInput.classList.remove('input-error');
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
