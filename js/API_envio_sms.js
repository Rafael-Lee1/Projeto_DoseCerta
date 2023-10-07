const { minhaFuncao } = require('./minhaFuncao');

const accountSid = 'AC0f186cddcf4b18d01125b4204179c32a';
const authToken = 'e9ee53ea857f454745926b95975b29b7';
const client = require('twilio')(accountSid, authToken);
exports.client = client;

function chamarFuncaoEmHorarioEspecifico(horarioEspecifico, funcao) {
    const agora = new Date();
    const horarioAlvo = new Date(agora);
    horarioAlvo.setHours(horarioEspecifico.horas, horarioEspecifico.minutos, 0, 0);

    if (horarioAlvo <= agora) {
        horarioAlvo.setDate(horarioAlvo.getDate() + 1); // Adicionar 1 dia se o horário alvo já passou hoje
    }

    const tempoRestante = horarioAlvo - agora;

    setTimeout(funcao, tempoRestante);
}

// Exemplo de como usar a função
const horarioEspecifico = {
    horas: 22, // Hora desejada (0-23)
    minutos: 11 // Minuto desejado (0-59)
};

chamarFuncaoEmHorarioEspecifico(horarioEspecifico, minhaFuncao);
