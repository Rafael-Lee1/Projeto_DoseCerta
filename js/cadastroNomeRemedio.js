// <---------- CÓDIGO VALIDAÇÃO INPUT NOME REMÉDIO ------------>

const btnAvancarNomeRemedio = document.querySelectorAll('.btn-avancar-nome-remedio');
const inputRemedio = document.getElementById("nome-remedio");
const htmlModal = document.getElementsByClassName("modal");
const remedio = localStorage.getItem("nome-remedio");
const btnVoltar = document.querySelector(".btn-voltar");

//Verifica se há dados no local storage para o caso do Idoso clicar em voltar
function validacaoLocalStorage(){
  remedio ? inputRemedio.value = remedio.toString() : "";
}
validacaoLocalStorage();

//Por ter o botão avançar e o de progresso, foi necessario usar um for para pegar todos os elementos
btnAvancarNomeRemedio.forEach(item => {
  item.addEventListener('click', (e) => {
    //Evitar comportamento padrão de submit do formulário
    e.preventDefault();
    //Verifica se está vazio
    if (inputRemedio.value != "") {
      //Adiciona no local storage e redireciona
      htmlModal.innerHTML = ""
      localStorage.setItem("nome-remedio", inputRemedio.value);
      window.location.href = "cadastroDiaHoraRemedio.html";
    }
    else {
        //Adiciona classe de erro no input caso esteja inválido
        inputRemedio.classList.add('input-error');
    }
    //Remove erro ao digitar no input
    inputRemedio.addEventListener("keyup", () => {
        inputRemedio.classList.remove('input-error');
    })
  })
})

// <---------- CÓDIGO FILTRO NOME REMÉDIO ------------>
const resultadosRemedios = document.getElementById('resultados-busca-remedio');

//Ao input do campo nome remédio
inputRemedio.addEventListener('input', () =>{
    const resultadosRemedios = document.getElementById('resultados-busca-remedio');
    const remedioBuscado = inputRemedio.value.toUpperCase();
    const nomesUnicos = new Set()
    //Limpa ul que trás opções toda vez que uma nova letra é digitada
    resultadosRemedios.innerHTML = ''
    //Chama a API com o nome do remédio solicitado
    fetch(`https://bula.vercel.app/pesquisar?nome=${remedioBuscado}`)
      .then(response => response.json())
      .then(data => {
        //Os dados retornados estão dentro de content e usamos um forEach para interar sobre eles
        data.content.forEach(nomeRemedio => {
            //Adiciona nome do remédio no Set para que seja único
            nomesUnicos.add(nomeRemedio.nomeProduto.toUpperCase())
            //Percorremos os dados não repetidos do set
            nomesUnicos.forEach(nomeUnico => {
                //Delimitamos as opções em 4 e verificamos se o elemento buscado está no elemento percorrido
                if(resultadosRemedios.childElementCount < 4 && nomeUnico.includes(remedioBuscado)){
                    //Criar um elemento li com os resultados possiveis
                    const opcao = document.createElement('li');
                    opcao.textContent = nomeUnico;
                    resultadosRemedios.appendChild(opcao);
                    nomesUnicos = ''
                }
              })
          })  
    })
  });

// <---------- CÓDIGO QUE INSERE VALOR DO FILTRO NO INPUT ------------>

// Adicione um ouvinte para quando clicar nos elementos li, preencher o input do nome de remédio
resultadosRemedios.addEventListener('click', (event) => {
    //Se o evento clicado é uma li, adiciona o valor no input e remove as opções listadas
    if (event.target.tagName === 'LI') {
        inputRemedio.value = event.target.textContent;
        resultadosRemedios.style.display = 'none';
  }
});

//Remove tudo do local storage caso volte para index
btnVoltar.addEventListener("click", () => {
    localStorage.removeItem("nome-remedio");
    localStorage.removeItem("dia-remedio");
    localStorage.removeItem("dia-hora-remedio");
    localStorage.removeItem("qnt-remedio");
    localStorage.removeItem("tipo-remedio");
    localStorage.removeItem("refeicao");
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
