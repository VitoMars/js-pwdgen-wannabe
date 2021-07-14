/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

var nome = prompt("Inserisci il tuo nome: ");
var cognome = prompt("Inserisci il tuo cognome: ");
var nascita = prompt("Inserisci il luogo di nascita: ");
var sesso = prompt("Inserisci il tuo sesso: ");

document.getElementById("nome").innerHTML = nome;
document.getElementById("cognome").innerHTML = cognome;
document.getElementById("nascita").innerHTML = nascita;
document.getElementById("sesso").innerHTML = sesso;