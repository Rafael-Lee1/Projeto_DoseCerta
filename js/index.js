//Pegará os elementos gravados no local storage e criará a div com detalhes do remédio
document.addEventListener("DOMContentLoaded", function () {
  //Pega todos os elementos salvos do cadastro
  let idRemedio = "";
  const nomeRemedio = localStorage.getItem("nome-remedio");
  const diaRemedio = localStorage.getItem("dia-remedio");
  const horaRemedio = localStorage.getItem("dia-hora-remedio");
  const quantidade = localStorage.getItem("qnt-remedio");
  const tipoRemedio = localStorage.getItem("tipo-remedio");
  const refeicaoRemedio = localStorage.getItem("refeicao");

  //Se houver id significa que é uma edição, não um novo remédio. Para novo é criado um id randomico
  function validaIdExistenteLocalStorage(){
    localStorage.hasOwnProperty("id") ? idRemedio = parseInt(localStorage.getItem("id"), 10)
    : idRemedio = Math.floor(Math.random() * 1000);
  }

  //Chamada da função
  validaIdExistenteLocalStorage();

  //Cria um array de remédios para salvar cada remédio em um objeto
  let arrayRemedios = [];
  //Verifica se há remédios salvos no localStorage
  if (localStorage.hasOwnProperty("remedios")) {
    arrayRemedios = JSON.parse(localStorage.getItem("remedios"));
  }
  //Caso haja o nome do remédio no localstorage, cria um novo objeto 
  if(nomeRemedio){
    const objetoRemedio = {
      id: idRemedio,
      nome: nomeRemedio,
      dia: [diaRemedio],
      hora: [horaRemedio],
      qnt: quantidade,
      tipo: tipoRemedio,
      refeicao: refeicaoRemedio
    }

    //Se for uma edição precisamos pegar o index do id no array salvo no local storage
    const recuperaPosicaoIdExistente = arrayRemedios.findIndex(remedio => remedio.id == idRemedio);
    //Se encontrar, sobrescreve o que tem nessa posição
    if (recuperaPosicaoIdExistente !== -1){
      arrayRemedios[recuperaPosicaoIdExistente] = objetoRemedio;
    }
    //Se não, apenas adiciona um novo objeto em uma nova posição do array
    else{
      arrayRemedios.push(objetoRemedio);    
    }
    //Adiciona o array no localStorage
    localStorage.setItem("remedios", JSON.stringify(arrayRemedios))
  }
  //Faz as criação dos elementos na index de acordo com o array do localStorage
  if (localStorage.hasOwnProperty("remedios")) {
    JSON.parse(localStorage.getItem("remedios")).forEach(remedio => {
      const botaoHTML = `
          <div class="div-detalhe-remedio" id="${remedio.id}">
            <div>
                <img  class="img-calendario" src="../imagens/calendariosol.png" alt="Imagem Calendário com sol"/>
                <p class="p-horario">${remedio.hora}</p>
            </div>
            <div>
                <h3 class="h2-nome-remedio">${remedio.nome}</h3>
                <p class="p-detalhe-remedio">${remedio.qnt} ${remedio.tipo} - ${remedio.dia}</p>
                <p class="p-detalhe-refeicao">${remedio.refeicao}</p>
            </div>
            <div class="div-button-remedio">
                <button class="button-editar" type="submit" onclick="editarRemedio(this)"></button>
                <p>Editar</p>
            </div>
            <div class="div-button-remedio">
                <button class="button-lixeira" type="submit" data-ref="1" onclick="excluirRemedio(this)"></button>
                <p>Excluir</p>
            </div>
        </div>`;

    const sectionRemedios = document.querySelector(".section-remedios");
    sectionRemedios.innerHTML += botaoHTML;

    })
  }
    
    //Remove do localStorage após a inclusão
    localStorage.removeItem("id");
    localStorage.removeItem("nome-remedio");
    localStorage.removeItem("dia-remedio");
    localStorage.removeItem("dia-hora-remedio");
    localStorage.removeItem("qnt-remedio");
    localStorage.removeItem("tipo-remedio");
    localStorage.removeItem("refeicao");

    //Caso seja a primeira vez vai adicionar o texto sem remédio no index
    verificarIndexVazio();

  })

//Opções do modal, aparece ou desaparece conforme essa função
const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
//Toggle que adiciona o modal
const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };

  [openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });


//Pegar dia atual e exibe na index
function pegaHorarioAtual(){
  //Instancia novo objeto do tipo data
  let data = new Date();
  //Array dos dias semana para que cada posição tenha o valor de um dia
  const diasDaSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"
  ];
  //Array dos meses para que cada posição tenha o valor de um dia
  const nomesDosMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  //A partir do meu objeto, pego dia e mês
  let mes = data.getMonth();
  let dia = data.getDay();
  //Atualizo o parágrafo que contém o texto
  const dataAtual = document.querySelector('.p-data-atual');
  let texto = `Dia ${data.getDate()}, ${diasDaSemana[dia]} de ${nomesDosMeses[mes]} de ${data.getFullYear()}`
  dataAtual.innerHTML += texto

   
}
//Executa o horário atual sempre que entrar na página
pegaHorarioAtual()

//Função de editar remédio
function editarRemedio(button) {

  arrayRemedios = JSON.parse(localStorage.getItem("remedios"));
  //Pegamos o id da div de remédio
  id = button.parentElement.parentNode.id
  //Percorremos o array do localstorage e se for igual ao elemento que será editado, atribuimos os valores no localstorage
  arrayRemedios.forEach(item => {
    if (item.id == id){
      const nome = item.nome;
      const hora = item.hora;
      const dia = item.dia;
      const refeicao = item.refeicao;
      const qnt = item.qnt;
      const tipo = item.tipo;

      localStorage.setItem("id", id)
      localStorage.setItem("nome-remedio", nome)
      localStorage.setItem("dia-hora-remedio", hora);
      localStorage.setItem("dia-remedio", dia);
      localStorage.setItem("refeicao", refeicao);
      localStorage.setItem("qnt-remedio", qnt);
      localStorage.setItem("tipo-remedio", tipo);
      
    }
  })
  
  //Redireciona para cadastro remédio;
   cadastroRemedioIdoso();
}

//Remove toda div do card de remédio
function excluirRemedio(button) {
  button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
  //Precisa verificar se ainda existem remédios na página
  verificarIndexVazio()
}

//Verifica se há div de remédio e caso não haja, adiciona div de boas vindas ao index
function verificarIndexVazio(){
  const sectionRemedio = document.querySelector(".section-remedios")
  const sectionMeusMedicamento = document.querySelector(".section-meus-medicamentos")
  //Verifica se div central não tem elementos filhos
  if (sectionRemedio.childElementCount == 0){
    const divBoasVindas = ` 
    <section class="section-main">
    <img  class="img-cirurgiao" src="../imagens/cirurgiao.png" alt="Imagem Médico"/>
    <div>
    <h2 class="boas-vindas">Adicione seus remédios para que possamos lembrá-lo de tomar na hora certa!</h2>
    </div>
    </section>`
    //Adiciona o texto caso não haja remédios
    sectionRemedio.innerHTML += divBoasVindas;
    //Remove data atual
    sectionMeusMedicamento.innerHTML = "";
  } 
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