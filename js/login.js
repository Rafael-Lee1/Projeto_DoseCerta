const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const btnEntrar = document.querySelector('.btn-entrar');

//Caso clique no botão entrar, chamamos a função que valida os campos
btnEntrar.addEventListener('click', function (e) {
        e.preventDefault();
        validateForm();
    });


function validateForm() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (emailValue === '') {
        alteraTextoModal('O campo E-mail deve ser válido (deve conter @ e .com)');
        emailInput.classList.add('input-error');
    } 
    else if (!isValidEmail(emailValue)) {
        alteraTextoModal('O campo E-mail deve ser válido (deve conter @ e .com)');
        emailInput.classList.add('input-error');
    }
    else if (passwordValue === '') {
        alteraTextoModal('O campo senha deve conter 6 caracteres');
        passwordInput.classList.add('input-error');
   } 
   else if (passwordValue.length != 6) {
       alteraTextoModal('O campo senha deve conter 6 caracteres');
       passwordInput.classList.add('input-error');
   } 
   else {
        window.location.href = "index.html";
    } 
    //Remove classe de estilo de erro do input se for clicado
    emailInput.addEventListener("keyup", () => {
        emailInput.classList.remove('input-error');
    })

    passwordInput.addEventListener("keyup" ,() => {
        passwordInput.classList.remove('input-error');
    })
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function alteraTextoModal(campo){
    const bodyModal = document.querySelector(".texto-body")
    bodyModal.innerHTML = `Ops!${campo}`
  }
    const openModalButton = document.querySelector(".open-modal");
    const closeModalButton = document.querySelector(".close-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
  
        
    const toggleModal = () => {
        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
    };
  
    [openModalButton, closeModalButton, fade].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    });