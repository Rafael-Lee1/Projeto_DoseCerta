document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    const nomeInput = document.querySelector("#fullname");
    const emailInput = document.querySelector("#e-mail");
    const telefoneInput = document.querySelector("#number");
    const senhaInput = document.querySelector('#password');


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateForm();
    });

    nomeInput.addEventListener('blur', function () {
        validateInput(nomeInput, 'O campo nome deve ser preenchido!');
    });

    emailInput.addEventListener('blur', function () {
        validateEmail(emailInput);
    });

    telefoneInput.addEventListener('blur', function () {
        validateTelefone(telefoneInput);
    });

    senhaInput.addEventListener('blur', function () {
        validateInput(senhaInput, 'O campo senha deve ser preenchido!');
    });

    //validador formulario
    function validateForm() {
        
        const isValidNome = validateInput(nomeInput, 'O campo nome deve ser preenchido!');
        const isValidEmailField = validateEmail(emailInput);
        const isValidTelefone = validateTelefone(telefoneInput);
        const isValidSenha = validateInput(senhaInput, 'O campo senha deve ser preenchido!');

        if(isValidNome && isValidEmailField && isValidTelefone && isValidSenha) {
            form.submit();
        }

    }

    //validador input
    function validateInput(input, errorMenssage) {

        const inputValue = input.value.trim();

        if(inputValue === '') {
            showErrorMessage(input, errorMenssage);
            return false;
        } else {
            hideErrorMessage(input);
            return true;
        } 
    }

    //validador Email
    function validateEmail(input){

        const emailValue = input.value.trim();

        if(emailValue === "" || !isValidEmail(emailValue)){
            showErrorMessage(input, "Por favor, o campo email deve conter (@ e .com)");
            return false;
        } else {
            hideErrorMessage(input);
            return true;
        }
    }

    //validador Telefone
    function validateTelefone(input){

        const telefoneValue = input.value.replace(/\D/g, '');

        if(telefoneValue.length !== 11) {
            showErrorMessage(input, 'O campo telefone tem quer 11 números!');
            return false;
        } else {
            hideErrorMessage(input);
            return true;
        }
    }

    //validador do Email usando o Regex
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    //add menssagem error
    function showErrorMessage(input, message) {
        alert(message);
        input.classList.add('input-error');
    }

    //remove  menssagem error
    function hideErrorMessage(input) {
        input.classList.remove('input-error');
    }


    //add evento telefone
    telefoneInput.addEventListener('input', function() {

        let value = telefoneInput.value.replace(/\D/g, '');

        if(value.length > 10) {
            value = value.substring(0, 11);
        }
        
        if(value.length > 2) {
            value = `(${value.substring(0,2)}) ${value.substring(2)}`;
        }

        if(value.length > 8) {
            value = `${value.substring(0,8)}-${value.substring(8)}`;
        }

        telefoneInput.value = value;    
    });

});