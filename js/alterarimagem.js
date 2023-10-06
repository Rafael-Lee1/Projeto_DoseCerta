// Função para verificar a hora e atualizar a imagem
function verificarHora() {
    // Obtém a hora atual
    var data = new Date();
    var hora = data.getHours();

    // Seleciona todos os elementos com a classe 'img-calendario'
    var imagens = document.querySelectorAll('.img-calendario');

    // Loop através de todas as imagens
    for (var i = 0; i < imagens.length; i++) {
        // Se a hora for entre 18 (6 da tarde) e 6 da manhã, muda para a imagem da lua
        if (hora >= 18 || hora < 6) {
            imagens[i].src = "../imagens/calendariolua.png";
            imagens[i].alt = "Imagem Calendário com lua";
        } else { // Caso contrário, muda para a imagem do sol
            imagens[i].src = "../imagens/calendariosol.png";
            imagens[i].alt = "Imagem Calendário com sol";
        }
    }
}

// Chama a função verificarHora quando a página carrega
window.onload = verificarHora;

// Chama a função verificarHora a cada minuto (60000 milissegundos)
setInterval(verificarHora, 60000);
