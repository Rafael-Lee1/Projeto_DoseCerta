const form = document.querySelector("form");
const nomeInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#e-mail");
const telefoneInput = document.querySelector("#number");
const senhaInput = document.querySelector('#password');
const btnCriar = document.querySelector(".btn-criar")

//Vai validar os campos quando clicar no botão criar
btnCriar.addEventListener('click', function (e) {
        e.preventDefault();
        validateForm();
    });

//validador formulario
function validateForm() {

    const inputValueNome = nomeInput.value;
    const inputValueEmail = emailInput.value;
    const inputValueTelefone = telefoneInput.value;
    const inputValueSenha = senhaInput.value;


    if(inputValueNome === '') {
        showErrorMessage(nomeInput, 'O campo nome deve ser preenchido!');
        hideErrorMessage(nomeInput);
    }
    else if(inputValueEmail === "" || !isValidEmail(inputValueEmail)){
        showErrorMessage(emailInput, "Por favor, o campo email deve conter (@ e .com)");
        hideErrorMessage(emailInput)
    }
    else if(inputValueTelefone.length !== 11){
        showErrorMessage(telefoneInput, 'O campo telefone tem quer 11 números!');
        hideErrorMessage(telefoneInput)
    }
    else if(inputValueSenha.length != 6){
        showErrorMessage(senhaInput, 'O campo senha deve conter 6 caracteres!');
        hideErrorMessage(senhaInput)
    }
    else {
        window.location.href = "login.html";
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
    input.addEventListener("keyup", () => {
        input.classList.remove('input-error');
    })
}