let btnAvancarNomeRemedio = document.querySelectorAll('.btn-avancar-nome-remedio');
let btnAvancarDiaHoraRemedio = document.querySelectorAll('.btn-avancar-dia-hora-remedio');
let btnAvancarTipoRemedio = document.querySelectorAll('.btn-tipo-remedio');

//Por ter mais de um botão na página, foi necessario usar um for para pegar todos os elementos
btnAvancarNomeRemedio.forEach(item => {
  item.addEventListener('click', (e) => {
    //Evitar comportamento padrão de submit do formulário
    e.preventDefault();
    const remedio = document.getElementById("nome-remedio")
    if (remedio.value != "") {
      localStorage.setItem("nome-remedio", remedio);
      window.location.href = "cadastroDiaHoraRemedio.html";
    }
    else {
      alert("O campo nome do remédio deve ser preenchido");
      remedio.classList.add('input-error');
    }
    remedio.addEventListener("keyup", () =>{
      remedio.classList.remove('input-error');
    })
  })
})

//Cadastro dia/hora remédio
btnAvancarDiaHoraRemedio.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const dia = document.getElementById("dia-remedio");
    const hora = document.getElementById("dia-hora-remedio");

    if (dia.value != "" && hora.value != "") {
      localStorage.setItem("dia-hora-remedio", hora);
      localStorage.setItem("dia-remedio", dia);
      window.location.href = "cadastroTipoRemedio.html";
    }
    else {
      alert("Os campos dia e hora do remédio devem ser preenchidos");
      hora.value ? dia.classList.add('input-error') : hora.classList.add('input-error');
    }

    hora.addEventListener("click", () =>{
      hora.classList.remove('input-error');
    })

    dia.addEventListener("click", () =>{
      dia.classList.remove('input-error');
    })
  })
})

//Cadastro quantida e tipo remédio
btnAvancarTipoRemedio.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const refeicao = document.getElementById("refeicao");
    const quantidade = document.getElementById("qnt-remedio");
    const tipo = document.getElementById("tipo-remedio");

    if (quantidade.value != "" && tipo.value != "") {
      localStorage.setItem("refeicao", refeicao);
      localStorage.setItem("qnt-remedio", quantidade);
      localStorage.setItem("tipo-remedio", tipo);

      alert("Remédio Cadastrado com sucesso");
      window.location.href = "index.html";
    }
    else {
      alert("Os campos quantidade e tipo do remédio devem ser preenchidos");
      quantidade.value ? tipo.classList.add('input-error') : quantidade.classList.add('input-error');
    }
    quantidade.addEventListener("click", () =>{
      quantidade.classList.remove('input-error');
    })

    tipo.addEventListener("click", () =>{
      tipo.classList.remove('input-error');
    })
  })
})

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