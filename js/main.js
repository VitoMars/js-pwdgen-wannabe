/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

var nome = prompt("Inserisci nome: ");
var cognome = prompt("Inserisci cognome: ");
var colore = prompt("Inserisci il tuo colore preferito: ");

document.getElementById("password").innerHTML = nome + cognome + colore + "21";