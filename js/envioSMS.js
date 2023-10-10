
//Função que executa a chamada da função que envia a mensagem
function chamaFuncaoDeEnviarMensagem(horario, funcao) {
  //Pega a data atual
  const agora = new Date();
  //Cria uma variável para o horário que queremos executar
  const horarioAlvo = new Date(agora);
  //Seta o horário
  horarioAlvo.setHours(horario.horas, horario.minutos, 0, 0);
      
  // Adicionar 1 dia se o horário alvo já passou hoje
  if (horarioAlvo <= agora) {
    horarioAlvo.setDate(horarioAlvo.getDate() + 1);
  }
      
  const tempoRestante = horarioAlvo - agora;
  //Usa a função setTimeout para agendar a execução no horário que queremos
  setTimeout(funcao, tempoRestante);
  }
      
  //Objeto onde colocamos o horario especifico que queremos
  const horarioEspecifico = {
    horas: 16, // Hora desejada (0-23)
    minutos: 45, // Minuto desejado (0-59)
  };
     

function enviaMensagem() {
  console.log("Função chamada no horário especificado!");
    const accountSid = 'AC0f186cddcf4b18d01125b4204179c32a';
    const authToken = '';
    const fromNumber = '+18649913539';
    const messageBody = 'Teste'
    const toNumber = ''

    //Chama API do twillo com os parâmetros especificos
    fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),
          'Content-Type': 'application/x-www-form-urlencoded'
          },
        body: new URLSearchParams({
          From: fromNumber,
          To: toNumber,
          Body: messageBody
        })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
              resultDiv.textContent = 'Mensagem enviada com sucesso!';
            })
            .catch((error) => {
              console.error(error);
              resultDiv.textContent = 'Erro ao enviar mensagem.';
            });
          };
//Chama função que verifica o horário e chama a função enviaMensagem    
chamaFuncaoDeEnviarMensagem(horarioEspecifico, enviaMensagem);


     
  