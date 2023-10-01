//Pegará os elementos gravados no local storage e criará a div com detalhes do remédio
document.addEventListener("DOMContentLoaded", function () {
  const nomeRemedio = localStorage.getItem("nome-remedio");
  const dia = localStorage.getItem("dia-remedio");
  const hora = localStorage.getItem("dia-hora-remedio");
  const quantidade = localStorage.getItem("qnt-remedio");
  const tipo = localStorage.getItem("tipo-remedio");
  const refeicao = localStorage.getItem("refeicao");

  if (nomeRemedio && dia && hora) {
    const botaoHTML = `
          <div class="div-detalhe-remedio">
            <div>
                <img  class="img-calendario" src="../imagens/calendariosol.png" alt="Imagem Calendário com sol"/>
                <p class="p-horario">${hora}</p>
            </div>
            <div>
                <h3 class="h2-nome-remedio">${nomeRemedio}</h3>
                <p class="p-detalhe-remedio">${quantidade} ${tipo} ao dia</p>
                <p class="p-detalhe-remedio">${refeicao}</p>
            </div>
            <div class="div-button-remedio">
                <a href="./cadastroNomeRemedio.html"><button class="button-editar" type="submit" onclick="editarBotao(this)"></button></a>
                <p>Editar</p>
            </div>
            <div class="div-button-remedio">
                <button class="button-lixeira" type="submit" data-ref="1" onclick="excluirBotao(this)"></button>
                <p>Excluir</p>
            </div>
        </div>`;

    const sectionRemedios = document.querySelector(".section-remedios");
    sectionRemedios.innerHTML += botaoHTML;

    localStorage.removeItem("nome-remedio");
    localStorage.removeItem("dia-remedio");
    localStorage.removeItem("dia-hora-remedio");
    localStorage.removeItem("qnt-remedio");
    localStorage.removeItem("tipo-remedio");
    localStorage.removeItem("refeicao");

  }

//Verifica se há div de remédio e caso não haja, adiciona div de boas vindas ao index
function verificarIndexVazio(){
  const sectionRemedio = document.querySelector(".section-remedios")
  const sectionMeusMedicamento = document.querySelector(".section-meus-medicamentos")

  if (sectionRemedio.childElementCount == 0){
    const divBoasVindas = ` 
    <section class="section-main">
    <img  class="img-cirurgiao" src="../imagens/cirurgiao.png" alt="Imagem Médico"/>
    <div>
    <h2 class="boas-vindas">Adicione seus remédios para que possamos lembrá-lo de tomar na hora certa!</h2>
    </div>
    </section>`

    sectionRemedio.innerHTML += divBoasVindas;
    sectionMeusMedicamento.innerHTML = "";
  } 
}

//Verifica se a index está vazia sempre que é carregada ou caso o botão excluir seja clicado
verificarIndexVazio()
const botaoExcluir = document.querySelectorAll(".button-lixeira");
botaoExcluir.forEach(item => {
  item.addEventListener('click', () => {verificarIndexVazio()})
})

//Opções do modal, aparece ou desaparece conforme essa função
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
;

});

//pega dia atual e exibe na index
function pegaHorarioAtual(){
  let data = new Date();

  const diasDaSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"
  ];

  const nomesDosMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  let mes = data.getMonth();
  let dia = data.getDay();

  const dataAtual = document.querySelector('.p-data-atual');
  let texto = `Dia ${data.getDate()}, ${diasDaSemana[dia]} de ${nomesDosMeses[mes]} de ${data.getFullYear()}`
  dataAtual.innerHTML += texto

   
}

pegaHorarioAtual()

function editarBotao(button) {
  // Obtém o texto do botão (nome do remédio) que será passado para a página de edição
  var nomeRemedio = button.parentElement.parentElement.parentElement.querySelector(".h2-nome-remedio").innerHTML;
  var horarioRemedio = button.parentElement.parentElement.parentElement.querySelector(".p-horario").innerHTML;

  // Redireciona para a página de edição com o parâmetro do nome do remédio
  window.location.href =
    "cadastroNomeRemedio.html?remedio=" + encodeURIComponent(nomeRemedio) 
    + "&horarioRemedio=" + encodeURIComponent(horarioRemedio);
}

function excluirBotao(button) {
  console.log("Botão excluído:", button.parentNode.textContent);
  button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
}

function voltarPaginaPrincipal() {
  window.location.href = "index.html";
}

function cadastroRemedioIdoso() {
  window.location.href = "cadastroNomeRemedio.html"
};

function cadastroRemedioTutor() {
    window.location.href = "cadastroRemedio.html"
};