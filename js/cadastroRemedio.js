// <----- Seleciona os elementos HTML pelo ID e armazena na variável ----->
const inputNomeRemedio = document.getElementById("nome-remedio");
const inputDiaHoraRemedio = document.querySelector(".dia-hora-remedio");
const inputDiaRemedio = document.querySelector(".dia-remedio");
const inputQtdRemedio = document.getElementById("qnt-remedio");
const inputTipoRemedio = document.getElementById("tipo-remedio");
const inputRefeicao = document.getElementById("refeicao");
const btnSalvarRemedio = document.getElementById("btn-salvar-remedio");
const btnVoltar = document.getElementById("btn-voltar");
const btnAdicionarDiaHorario = document.querySelector(".adicionar-dia-horario");
const divDiaHora = document.querySelector(".input-dia-hora")

// Função para verificar se algum campo está vazio
function verificarCamposVazios() {
  const campos = [
    { input: inputNomeRemedio, nome: "nome-remedio" },
    { input: inputDiaHoraRemedio, nome: "dia-hora-remedio" },
    { input: inputDiaRemedio, nome: "dia-remedio" },
    { input: inputQtdRemedio, nome: "qnt-remedio" },
    { input: inputTipoRemedio, nome: "tipo-remedio" },
    { input: inputRefeicao, nome: "refeicao" }
  ];

  for (const campo of campos) {
    if (campo.input.value === "" && campo.nome != "refeicao") {
      return campo.input.classList.add('input-error'); // Adiciona a classe 'input-error' ao campo vazio
    } else {
        localStorage.setItem(campo.nome, campo.input.value)
    }
  }
  window.location.href="index.html" // Redireciona para pagina inicial (index)
}

// Adicione um ouvinte de evento para o botão "Salvar Remédio"
btnSalvarRemedio.addEventListener("click", function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado se houver campos vazios
  verificarCamposVazios();
});

// Adicione um ouvinte de evento de input para cada campo para detectar quando o usuário preenche o campo
inputNomeRemedio.addEventListener("keyup", function() {
    this.classList.remove('input-error');
});
  

inputDiaHoraRemedio.addEventListener("click", function() {
    this.classList.remove('input-error');
});

inputDiaRemedio.addEventListener("click", function() {
    this.classList.remove('input-error');
});
  

inputQtdRemedio.addEventListener("click", function() {
    this.classList.remove('input-error');
});
  

inputTipoRemedio.addEventListener("click", function() {
    this.classList.remove('input-error');
});

btnAdicionarDiaHorario.addEventListener("click", (e) => {
    e.preventDefault();
    const inputDiaHora = `
    <p class="sepator">-----------------------------</p>
    <label class="labels-formulario" for="dia-hora-remedio">HORÁRIO E DIA DO REMÉDIO:<abbr title="Campo obrigatório">*</abbr></label>
    <div class="div-dia-hora-remedio">
        <input type="time" class="dia-hora-remedio" id="dia-hora-remedio">
        <Select id="dia-remedio" class="dia-remedio">
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
        <button class="grey">-</button>`
    divDiaHora.innerHTML += inputDiaHora
});