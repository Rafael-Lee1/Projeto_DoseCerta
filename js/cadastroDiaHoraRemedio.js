// <---------- CÓDIGO VALIDAÇÃO INPUT DIA HORA REMÉDIO ------------>
const btnAvancarDiaHoraRemedio = document.querySelectorAll('.btn-avancar-dia-hora-remedio');
const inputDia = document.getElementById("dia-remedio");
const inputHora = document.getElementById("dia-hora-remedio");
const htmlModal = document.getElementsByClassName("modal");
const dia = localStorage.getItem("dia-remedio");
const hora = localStorage.getItem("dia-hora-remedio");

//Verifica se não há dados no localstorage para que venha preenchido
function validacaoLocalStorage(){
    dia ? inputDia.value = dia.toString() : ""
    hora ? inputHora.value = hora.toString() : ""
}

validacaoLocalStorage()
//Por ter o botão avançar e o de progresso, foi necessario usar um for para pegar todos os elementos
btnAvancarDiaHoraRemedio.forEach(item => {
  item.addEventListener('click', (e) => {
    //Evitar comportamento padrão de submit do formulário
    e.preventDefault();
    //Verifica se o imput de dia ou hora é diferente de vazio e redireciona para prox. página
    if (inputDia.value != "" && inputHora.value != "") {
      //modal precisa desaparecer e a página deve apenas redirecionar
      htmlModal.innerHTML = ""
      localStorage.setItem("dia-hora-remedio", inputHora.value);
      localStorage.setItem("dia-remedio", inputDia.value);
      window.location.href = "cadastroTipoRemedio.html";
    }
    //Caso os campos estejam vazio adiciona a classe de erro no input que falta preencher
    else {
      if(inputHora.value){
        inputDia.classList.add('input-error')
        alteraTextoModal("dia do remédio")
      } else{
        inputHora.classList.add('input-error');
        alteraTextoModal("hora do remédio")
      } 
    }
    //Remove a classe de erro ao digitar no input hora
    inputHora.addEventListener("click", () =>{
      inputHora.classList.remove('input-error');
    })
    //Remove a classe de erro ao digitar no input dia
    inputDia.addEventListener("click", () =>{
      inputDia.classList.remove('input-error');
    })
  })
})

// <---------- CÓDIGO ADIÇÃO NOVO INPUT DIA HORA REMÉDIO ------------>

const btnAdicionarHorario = document.getElementById("button-adicionar-dia")
const divRemedio = document.querySelector(".div-adicao-horario")
//Ao clicar no botão de adicionar remédio

btnAdicionarHorario.addEventListener("click", async (e) => {
     //Evita comportamento padrão de submit do botão
      e.preventDefault();
      //Crio os novos campos
      const inputDiaHoraRemedio = `
      <p class="separator">----------------------------</p>
      <label for="dia-hora-remedio">HORÁRIO E DIA DO REMÉDIO:</label>
      <div class="detalhe-adicao-horario">
      <input type="time" class="dia-hora-remedio" name="dia-hora-remedio">
      <Select class="dia-remedio" name="dia-remedio">
          <option value="">Escolha o dia</option>
          <option value="todos">Todos os dias</option>
          <option value="final">Final de semana</option>
          <option value="segsex">Segunda a sexta</option>
          <option value="seg">Segunda</option>
          <option value="ter">Terça</option>
          <option value="qua">Quarta</option>
          <option value="qui">Quinta</option>
          <option value="sex">Sexta</option>
      </Select>
      </div>
      <button class="button-remover-horario">Remover Horário</button>`
 //Adiciono os novos campos dentro da div de remedio
  divRemedio.innerHTML += inputDiaHoraRemedio
  validacaoLocalStorage();
  const btnRemoverHorario = document.querySelectorAll(".button-remover-horario")
  //Ao clicar no remover horário
  btnRemoverHorario.forEach(item => {
    console.log(item)
    item.addEventListener("click", (e) => {
      //Evito padrão de submit do botão  
      e.preventDefault();

      //Removo todos os elementos anteriores
      for( let i= 0 ; i <= 5; i++){
          item.previousSibling.remove()
      }
      //Removo o botão de remover
      item.remove(item)
     })
  })
})


// <---------- MODAL ------------>

//Funçao com toggle responsavel por fazer o modal aparecer

function alteraTextoModal(campo){
  const bodyModal = document.querySelector(".texto-body")
  bodyModal.innerHTML = `Ops! O campo ${campo} deve ser preenchido`
}
  const openModalButton = document.querySelectorAll(".open-modal");
  const closeModalButton = document.querySelector(".close-modal");
  const modal = document.querySelector("#modal");
  const fade = document.querySelector("#fade");

      
  function toggleModal(){
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
  };

  [closeModalButton, fade].forEach((el) => {
      el.addEventListener("click", () => toggleModal());

  });