// Função para verificar a hora e atualizar a imagem
function verificarHora() {
    // Obtém a hora atual
    var data = new Date();
    var hora = data.getHours();

    // Obtém a lista de remédios cadastrados com seus horários de administração
    var remedios = [
        { nome: "Insulina", horario: 10 },
        { nome: "Nimesulina", horario: 14 },
        { nome: "Omeprazol", horario: 19 }
        // Adicione mais remédios e horários conforme necessário
    ];

    // Verifica se a hora atual corresponde a algum horário de administração
    var imagemAtual = "calendariosol.png"; // Imagem padrão (sol)
    for (var i = 0; i < remedios.length; i++) {
        if (hora === remedios[i].horario) {
            imagemAtual = "calendariolua.png"; // Muda para a imagem da lua
            break; // Sai do loop assim que encontrar um horário correspondente
        }
    }

    // Atualiza todas as imagens com a imagem atual
    var imagens = document.querySelectorAll('.img-calendario');
    for (var j = 0; j < imagens.length; j++) {
        imagens[j].src = "../imagens/" + imagemAtual;
        imagens[j].alt = "Imagem Calendário com " + (imagemAtual === "calendariosol.png" ? "sol" : "lua");
    }
}

// Chama a função verificarHora quando a página carrega
window.onload = verificarHora;

// Chama a função verificarHora a cada minuto (60000 milissegundos)
setInterval(verificarHora, 60000);
