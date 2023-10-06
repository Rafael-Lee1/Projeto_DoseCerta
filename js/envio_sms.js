

     // Personalize a mensagem com base no horario do dia
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
        horas: 16, // Hora desejada (0-23)
        minutos: 45, // Minuto desejado (0-59)
      };
      
      function minhaFuncao() {
        
        console.log("Função chamada no horário especificado!");
              const accountSid = 'AC0f186cddcf4b18d01125b4204179c32a';
              const authToken = 'e9ee53ea857f454745926b95975b29b7';
              const fromNumber = '+18649913539';
              const messageBody = 'Teste'
              const toNumber = '+5527999369724'

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
          
      chamarFuncaoEmHorarioEspecifico(horarioEspecifico, minhaFuncao);


     
  