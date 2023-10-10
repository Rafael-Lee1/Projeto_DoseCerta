const bntContinuar = document.querySelector('.btn-continuar');
const emailInput = document.getElementById('email');

bntContinuar.addEventListener('click', function(e) {
    e.preventDefault();
    validateEmail();
});

function validateEmail() {
    const emailValue = emailInput.value;
    if (emailValue === '') {
        alteraTextoModal('O campo E-mail deve ser válido (deve conter @ e .com)');
        emailInput.classList.add('input-error');
    } else if (!isValidEmail(emailValue)) {
        alteraTextoModal('O campo E-mail deve ser válido (deve conter @ e .com)');
        emailInput.classList.add('input-error');
    } else {
        window.location.href = "login.html"
    }
    //Quando o idoso clicar no campo e-mail, classe de erro some
    emailInput.addEventListener("keyup", () => {
        emailInput.classList.remove('input-error');
    })
}
//Valida por regex se e-mail é válido com @ e .com
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function alteraTextoModal(campo){
    const bodyModal = document.querySelector(".texto-body")
    bodyModal.innerHTML = `Ops! ${campo}`
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