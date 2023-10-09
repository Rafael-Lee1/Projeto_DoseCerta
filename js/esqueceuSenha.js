document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm();
    });

    emailInput.addEventListener('blur', function() {
        validateEmail();
    });

    function validateForm() {

        const isValidEmail = validateEmail(emailInput);

        if(isValidEmail){
            form.submit();
        }
        /*const emailValue = emailInput.value.trim();

        if (emailValue === '') {
            alert('O campo E-mail deve estar preenchido');
            emailInput.classList.add('input-error');
        } else if (!isValidEmail(emailValue)) {
            alert('O campo E-mail deve ser válido (deve conter @ e .com)');
            emailInput.classList.add('input-error');
        } else {
            emailInput.classList.remove('input-error');
        }

        if (!emailInput.classList.contains('input-error')) {
            form.submit(); 
            
        }*/
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

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});