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
                <p class="p-detalhe-remedio">${refeicao} refeição</p>
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
});

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
