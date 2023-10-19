# Descrição do Projeto
O Dose Certa permitirá que os usuários cadastrem suas informações pessoais, prescrições médicas e respectivas doses e horários de administração dos medicamentos. A plataforma fornecerá um calendário interativo e um sistema de notificações para lembrar os usuários sobre os horários das doses, garantindo que o tratamento seja seguido corretamente.


<p align="center">
  <img width="460" height="300" src="https://github.com/Rafael-Lee1/Icons/blob/8598b3bdb16d9892f54262da58672b4b43729950/Pitch%20(3).gif">
</p>

<h1 align="center"> Dose Certa </h1>

<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>

![GitHub Org's stars](https://img.shields.io/gitlab/contributors/Rafael-Lee1)


# Descrição

O projeto consiste no desenvolvimento de um aplicativo web chamado Dose Certa, que tem como objetivo auxiliar os usuários a gerenciar suas prescrições médicas, fornecendo lembretes de doses e facilitando o acompanhamento do tratamento. O aplicativo será intuitivo, acessível e fácil de usar, tornando-o adequado para pessoas de todas as idades.

O Dose Certa permitirá que os usuários cadastrem suas informações pessoais, prescrições médicas e horários de administração dos medicamentos. A plataforma fornecerá um calendário interativo e um sistema de notificações para lembrar os usuários sobre os horários das doses, auxiliando no tratamento.

- `Tela Login`: Tela para realizar o login na aplicação
    - `Fluxo 1 (Entrar na conta)`: O usuário deverá preencher os campos e-mail e senha (campos obrigatórios) e depois clicar em "Entar na conta". Caso esteja cadastrado, será direcionado para página principal da aplicação, caso não, receberá um aviso em tela com possível motivo de invalidação. Haverá validações para se certificar que os campos não estão vazios e que o usuário está cadastrado em nosso banco de dados.
    - `Fluxo 2 (Esqueceu senha)`: O usuário clicará no link "Esqueceu a senha?" e será direcionado para respectiva página.
    - `Fluxo 3 (Criar conta)`: O usuário clicará no botão "Criar conta" e será direcionado para respectiva página.
- `Tela Cadastro`: Tela para realizar o cadastro na aplicação
    - `Fluxo 1 (Criar conta)`: O usuário deverá preencher todos campos dessa página(campos obrigatórios) e depois clicar em "Criar conta". Caso todas as informações preenchidas estejam corretas, será criada a conta e o usuário será direcionado para página de login novamente. Caso não, receberá um aviso em tela com possível motivo de invalidação. Haverá validações para se certificar que os campos não estão vazios e que são campos com formatos válidos (Ex.:E-mail).Os dados serão salvos no banco
    - `Fluxo 2 (Voltar)`: O usuário clicará no botão voltar e será direcionado para página de login novamente.
- `Tela Esqueceu Senha`:  Tela para recuperação de senha
    - `Fluxo 1 (Esqueceu senha)`: O usuário deverá preencher o campo e-mail dessa página(campo obrigatório) e depois clicar em "Continua". Caso o e-mail for o correto, será enviado um e-mail de redefinição de senha. Caso não, receberá um aviso em tela com possível motivo de invalidação. Haverá validações para se certificar que os campos não estão vazios e que são campos com formatos válidos (Ex.:E-mail).
    - `Fluxo 2 (Voltar)`: O usuário clicará no botão voltar e será direcionado para página de login novamente.
- `Tela Index/Remédio`:  Tela de boas-vindas com todos ou nenhum remédio cadastrado, sendo a principal da aplicação.
    - `Fluxo 1 (Adicionar Remédio)`: O usuário clicará no botão "Adicionar remédio" e receberá um aviso questionando quem irá realizar o cadastro podendo ser o próprio idoso ou um tutor:
      - **Idoso:** Será direcionado para um formulário que possui etapas e poucas informações em tela;
      - **Tutor:** Será direcionado para um formulário único, com todos os campos na primeira página;
    - `Fluxo 2 (Excluir remédio)`: O usuário clicará no botão em formato de lixeira e será solicitado a confirmação da ação via popup, se confirmar o item clicado será excluído da lista de remédios da index e do banco de dados, se cancelar nenhuma ação será feita.
    - `Fluxo 3 (Editar remédio)`: O usuário clicará no botão com formato de lápis e receberá um aviso questionando quem irá realizar o cadastro podendo ser o próprio idoso ou um tutor:
      - **Idoso:** Será direcionado para um formulário que possui etapas e poucas informações em tela, os campos serão preenchidos com os dados do remédio que havia sido cadastrado anteriormente;
      - **Tutor:** Será direcionado para um formulário único, com todos os campos na primeira página, os campos serão preenchidos com os dados do remédio que havia sido cadastrado anteriormente;
- `Tela Cadastro Remédio Idoso`: Tela que possui os campos a serem preenchidos para cadastro do remédio.
    - `Fluxo 1 (Cadastro Remédio Para Idoso)`: Após ser redirecionado pela página index, o usuário terá um formulário de cadastro de remédio, com uma barra de progresso dividido em três etapas:
      - **Etapa Nome Remédio:** O usuário deverá digitar o nome do remédio que quer cadastrar e poderá utilizar um  filtro para auxiliar no preenchimento do campo que buscará nomes de remédios similares ao que foi digitado. Haverá um botão "Avançar" que ao ser clicado validará a informação do input nome remédio, que é obrigatório e portanto não pode ser vazio (o mesmo acontece se clicado na barra de progresso para próxima etapa). Haverá um botão "Voltar", que ao ser clicado permite que o usuário retorne ao Index.
      - **Etapa Dia e Hora:** O usuário deverá digitar/selecionar o horário e o dia que o remédio deverá ser tormado, os campos não podem ser vazios e haverá uma validação ao clicar no botão "Avançar" (o mesmo acontece se clicado na barra de progresso para próxima etapa). Haverá um botão "Voltar", que ao ser clicado permite que o usuário retorne a etapa nome do remédio;
        - Botão "Adicionar horário": Ao ser clicado, será adicionado dois novos campos (data e hora) para serem preenchidos com mais horários, além disso haverá também um botão "Remover horário", caso o Idoso tenha clicado por engano ou não queira mais adicionar remédio;
      - **Etapa Tipo, Quandidade e Refeição** O usuário deverá digitar/selecionar a quantidade e o tipo do remédio a ser tormado, os campos não podem ser vazios e haverá uma validação ao clicar no botão "Salvar remédio" . Haverá um campo de seleção para que o Idoso preencha se toma antes ou depois da refeição, este não é obrigatório.Haverá um botão "Voltar", que ao ser clicado permite que o usuário retorne para etapa de dia e horário;
      - Botão Salvar Remédio: Se as informações estiverem preenchidas, direciona o Idoso para página Index com o novo remédio aparecendo na lista de remédios;
- `Tela Cadastro Remédio Tutor`: Tela que possui os campos a serem preenchidos para cadastro do remédio.
    - `Fluxo 1 (Cadastro Remédio Para Tutor)`: Após ser redirecionado pela página index, o usuário terá um formulário de cadastro de remédio, com todos os seguintes campos:
      - Nome do remédio: Haverá um filtro para auxilio no preenchimento que buscará os nomes que correspondem ao digitado no input. Campo obrigatório e que será válido ao clicar em "Salvar remédio";
      - Hora e dia do remédio: Ambos os campos deverão ser preenchidos/selecionados. Haverá um botão com o sinal de "+" ao lado direito dos campos, que ao ser clicado aparecerá mais dois inputs(data e hora) que poderão ser preenchidos, esses campos virão com um botão com o sinal de "-" que ao ser clicado removerá os campos que haviam sido adicionados. Os campos são obrigatórios e serão validados ao clicar em "Salvar remédio";
      - Quantidade e tipo do remédio: Ambos os campos deverão ser preenchidos/selecionados. Os campos são obrigatórios e serão validados ao clicar em "Salvar remédio";
      - Refeição: O campo deverá ser preenchido/selecionado caso o paciente queira, portanto não é obrigatório; 
      - Botão Salvar Remédio: Se as informações estiverem preenchidas, direciona o Idoso para página Index com o novo remédio aparecendo na lista de remédios;
      - Botão Voltar: Direciona o usuário para Index, sem atualizações na lista de remédio;

Acesse o endereço eletrônico <a href="https://dosecerta.up.railway.app/?">aqui</a> e saiba mais sobre as funcionalidades do projeto.

Descubra o Dose Certa e facilite o controle dos seus medicamentos diários. Organize suas doses de forma simples e eficiente, e tenha lembretes personalizados para nunca mais esquecer de tomar seus remédios. Cuide da sua saúde com praticidade e segurança, tornando cada dia mais saudável e tranquilo.

# 📁 Acesso ao projeto

**Você pode acessar os arquivos do projeto clicando <a href="https://github.com/Rafael-Lee1/MeuMedicamento_Web.git">aqui</a>.</p>
**Você pode acessar o projeto clicando <a href="https://dosecerta.up.railway.app/?">aqui</a>.</p>

# 🛠️ Tecnologias utilizadas

<div style="display: inline_block"><br>
<img align="center" alt="Rafa-Js" height="30" width="40" src="https://github.com/Rafael-Lee1/Icons/blob/f85d05ce344243c7a5f13ebe444b251000c1793a/icons8-javascript.gif">
<img align="center" alt="Rafa-Sql" height="30" width="40" src="https://github.com/Rafael-Lee1/Icons/blob/43010fe49656f545bcb0d8d2a8d3b714d76ae36e/SQL.gif">
<img align="center" alt="Rafa-Node" height="30" width="40" src="https://github.com/Rafael-Lee1/Icons/blob/90626b13b5acba7b6b2d97f4e38d9b1e4c22da66/nodejs.png">
<img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
<img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> <p>
<br>


<b>Requirements:</b>

<pre class="notranslate"><code>
-HTML
-JavaScript
-Node.js
-CSS
-MySql
</code>
</pre>


# Autores

| ![Image 1](https://avatars.githubusercontent.com/u/115593138?s=400&u=c345c56a9a6c0718f52a868dc3f39fd8bdbc944d&v=4) | ![Image 2](https://avatars.githubusercontent.com/u/81046850?v=4) | ![Image 3](https://avatars.githubusercontent.com/u/108960277?v=4) | ![Image 4](https://avatars.githubusercontent.com/u/106563124?v=4) |
| :---: | :---: | :---: | :---: |
| [Rafael Santos](https://github.com/Rafael-Lee1) | [Luana Gruber](https://github.com/luana-gruber) | [Robson Dionisio](https://github.com/robsondionisio) | [Wander M P Nóbrega](https://github.com/WMatheus2022) |












