// API de Notificações do navegador para enviar notificações da sua página para os usuários. 
//Esta API permite que você exiba mensagens de notificação personalizadas diretamente no 
//navegador do usuário, mesmo quando a página da web não está ativa.

// Verifica se o navegador suporta a API de Notificações
// if ("Notification" in window) {
//     // Solicita permissão para exibir notificações
//     Notification.requestPermission().then(function (permission) {
//       if (permission === "granted") {
//         // Cria e exibe uma notificação
//         var notification = new Notification("Título da Notificação", {
//           body: "Texto da notificação aqui",
//           icon: "icone.png" // URL do ícone da notificação
//         });
  
//         // Define um evento de clique para a notificação
//         notification.onclick = function () {
//           // Redireciona ou executa alguma ação quando a notificação é clicada
//           window.location.href = "https://www.exemplo.com";
//         };
//       }
//     });
//   }
// function requestNotificationPermission() {
//     console.log("Botão de solicitação de permissão clicado.");
// }
  
// function requestNotificationPermission() {
//     if ("Notification" in window) {
//         Notification.requestPermission().then(function (permission) {
//             if (permission === "granted") {
//                 var notification = new Notification("Título da Notificação", {
//                     body: "Texto da notificação aqui",
//                     icon: "imagens/icone.png"
//                 });

//                 notification.onclick = function () {
//                     window.location.href = "https://www.exemplo.com";
//                 };

//                 // Definir um cookie com SameSite="Lax" ou "Strict"
//                 document.cookie = "meuCookie=meuValor; SameSite=Strict";
//             }
//         });
//     }
// }




// var havePermission = window.webkitNotifications.checkPermission();
// if (havePermission == 0) { // 0 is PERMISSION_ALLOWED
//     var notification = window.webkitNotifications.createNotification(
//         'https://i.stack.imgur.com/dmHl0.png', 
//         'Chrome notification!', 
//         'Here is the notification text'
//     );
//     notification.onclick = function () {
//         window.open("https://stackoverflow.com/a/13328397/1269037");
//         notification.close();
//     }
//     notification.show();
// } else {
//     window.webkitNotifications.requestPermission();
// }
