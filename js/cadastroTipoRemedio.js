// <---------- CÓDIGO VALIDAÇÃO INPUT DIA HORA REMÉDIO ------------>
const btnAvancarTipoRemedio = document.querySelectorAll('.btn-tipo-remedio');
const inputRefeicao = document.getElementById("refeicao");
const inputQuantidade = document.getElementById("qnt-remedio");
const inputTipo = document.getElementById("tipo-remedio");
const htmlModal = document.getElementsByClassName("modal");
const quantidade = localStorage.getItem("qnt-remedio");
const tipo = localStorage.getItem("tipo-remedio");
const refeicao = localStorage.getItem("refeicao");


//Verifica se não há dados no localstorage para que venha preenchido
function validacaoLocalStorage(){
    tipo ? inputTipo.value = tipo.toString() : "";
    quantidade ? inputQuantidade.value = quantidade.toString() : "";
    refeicao ? inputRefeicao.value = refeicao.toString() : "";
}

validacaoLocalStorage();

//Por ter o botão avançar e o de progresso, foi necessario usar um for para pegar todos os elementos
btnAvancarTipoRemedio.forEach(item => {
    item.addEventListener('click', (e) => {
       //Evitar comportamento padrão de submit do formulário
      e.preventDefault();
     //Verifica se o imput quantidade e tipo é diferente de vazio e redireciona para prox. página
      if (inputQuantidade.value != "" && inputTipo.value != "") {
        //modal precisa desaparecer e a página deve apenas redirecionar
        htmlModal.innerHTML = ""
        localStorage.setItem("refeicao", inputRefeicao.value);
        localStorage.setItem("qnt-remedio", inputQuantidade.value);
        localStorage.setItem("tipo-remedio", inputTipo.value);
  
        window.location.href = "index.html";
      }
    //Caso os campos estejam vazio adiciona a classe de erro no input que falta preencher
      else {
        inputQuantidade.value ? inputTipo.classList.add('input-error') : inputQuantidade.classList.add('input-error');
      }
      //Remove a classe de erro ao digitar no input quantidade
      inputQuantidade.addEventListener("click", () =>{
        inputQuantidade.classList.remove('input-error');
      })
     //Remove a classe de erro ao digitar no input tipo
      inputTipo.addEventListener("click", () =>{
        inputTipo.classList.remove('input-error');
      })
    })
  })

  // <---------- MODAL ------------>

//Funçao com toggle responsavel por fazer o modal aparecer

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
