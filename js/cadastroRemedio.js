
  function adicionarNomeRemedio() {
    const remedio = document.getElementById("nome-remedio").value;

    localStorage.setItem("nome-remedio", remedio);
    window.location.href = "cadastroDiaHoraRemedio.html";
  }

  function adicionarDiaHoraRemedio() {
    const dia = document.getElementById("dia-remedio").value;
    const hora = document.getElementById("dia-hora-remedio").value;

    localStorage.setItem("dia-hora-remedio", hora);
    localStorage.setItem("dia-remedio", dia);
    window.location.href = "cadastroTipoRemedio.html";

  }

  function adicionarTipoRemedio() {
    const refeicao = document.getElementById("refeicao").value;
    const quantidade = document.getElementById("qnt-remedio").value;
    const tipo = document.getElementById("tipo-remedio").value;

    localStorage.setItem("refeicao", refeicao);
    localStorage.setItem("qnt-remedio", quantidade);
    localStorage.setItem("tipo-remedio", tipo);

    window.location.href = "index.html";

  }

  function obterParametroURL(nomeParametro) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nomeParametro);
  }
  // Preencher os campos do formulário com as informações do botão selecionado
  document.addEventListener("DOMContentLoaded", function() {
    var nomeRemedio = obterParametroURL("remedio");
    if (nomeRemedio) {
        document.getElementById("nome-remedio").value = nomeRemedio;
        // Aqui você pode buscar as informações do botão pelo nome do remédio e preencher o campo "diaHora"
    }
  });