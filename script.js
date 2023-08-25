<script>
    document.addEventListener("DOMContentLoaded", function () {
        const remedio = localStorage.getItem("remedio");
        const dia = localStorage.getItem("dia");
        const hora = localStorage.getItem("hora");

        if (remedio && dia && hora) {
            const botaoHTML = `
                <div class="button">
                    <span class="action-button edit-button" onclick="editarBotao(this)">
                        <i class="fas fa-edit"></i>
                    </span>
                    <h1>${remedio}</h1>
                    <p>${dia} - ${hora}</p>
                    <span class="action-button delete-button" onclick="excluirBotao(this)">
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            `;

            const buttonColumn = document.querySelector(".button-column");
            buttonColumn.innerHTML += botaoHTML;

            localStorage.removeItem("remedio");
            localStorage.removeItem("dia");
            localStorage.removeItem("hora");
        }
    });

    function editarBotao(button) {
        // Obtém o texto do botão (nome do remédio) que será passado para a página de edição
        var nomeRemedio = button.parentNode.textContent.trim();

        // Redireciona para a página de edição com o parâmetro do nome do remédio
        window.location.href = "edicao.html?remedio=" + encodeURIComponent(nomeRemedio);
    }

    function excluirBotao(button) {
        console.log("Botão excluído:", button.parentNode.textContent);
        button.parentNode.parentNode.removeChild(button.parentNode);
    }
</script>