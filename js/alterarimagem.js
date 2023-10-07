// Função para verificar a hora cadastrada pelo usuário e atualizar a imagem
function verificarHoraCadastrada() {
    // Obtém a hora cadastrada pelo usuário (você precisa definir como obter essa hora)
    var horaCadastrada = 14; // Substitua 14 pela hora cadastrada pelo usuário

    // Verifica se a hora cadastrada está dentro das 6h às 18h (das 6h00 às 18h59)
    var imagemAtual = "calendariolua.png"; // Imagem da lua como padrão
    if (horaCadastrada >= 6 && horaCadastrada < 18) {
        imagemAtual = "calendariosol.png"; // Muda para a imagem do sol
    }

    // Atualiza a imagem com base na hora cadastrada
    var imagemRemedio = document.querySelector('.img-calendario');
    if (imagemRemedio) {
        imagemRemedio.src = "../imagens/" + imagemAtual;
        imagemRemedio.alt = "Imagem Calendário com " + (imagemAtual === "calendariosol.png" ? "sol" : "lua");
    }
}

// Chama a função verificarHoraCadastrada quando a página carrega (ou quando o usuário cadastra o horário)
window.onload = verificarHoraCadastrada;
