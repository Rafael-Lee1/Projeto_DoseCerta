const { client } = require('./API_envio_sms');

function minhaFuncao() {
    console.log("Função chamada no horário especificado!");

    const fromNumber = '+18649913539';
    const toNumber = "+5519991924484;";
    const messageBody = 'Teste';

    client.messages
        .create({
            body: messageBody,
            from: fromNumber,
            to: toNumber
        })
        .then(message => console.log(message.sid))
        .catch(error => console.error(error));
}
exports.minhaFuncao = minhaFuncao;
