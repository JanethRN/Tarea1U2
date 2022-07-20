/*validaciones*/
$(document).ready(function() {
  $("#basic-form").validate();
});
/*creamos dos variables para el captchat y la segunda para definir que va a ser en 2d*/ 
let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
/*tipo de duente de letr y tamaño*/ 
ctx.font = "30px Roboto";
/*color de letra de captchat*/
ctx.fillStyle = "#be99cf";

/*caja de tecto*/

let userText = document.querySelector('#textBox');
/*seleccionamos el boton de subir*/
let submitButton = document.querySelector('#submitButton');
let output = document.querySelector('#output');
/*seleccionamos el boton de refrescar*/
let refreshButton = document.querySelector('#refreshButton');

// Creamos variable con los caracteres para nuestro captcha
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//creamos otra variable con un arreglo vacio
let emptyArr = [];
//generamos aleatoriamente 7 caracteres usando la variable alphaNums para mostrar en el captcha
for (let i = 1; i <= 7; i++) {
 emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''),captchaText.width/4, captchaText.height/2);

// Evento  listener para enviar al momento de presiona enter enviado un mensaje de correcto o incorrecto
//una vez haya validado el captchat
userText.addEventListener('keyup', function(e) {
 if (e.keyCode === 13) {
 if (userText.value === c) {
 output.classList.add("correctCaptcha");
 output.innerHTML = "Correct!";
 } else {
 output.classList.add("incorrectCaptcha");
 output.innerHTML = "Incorrect, please try again";
 }
 }
});
// Evento listener para subir al presionar el boton Submit enviado un mensaje de correcto o incorrecto
//una vez haya validado el captchat
submitButton.addEventListener('click', function() {
 if (userText.value === c) {
 output.classList.add("correctCaptcha");
 output.innerHTML = "Correct!";
 } else {
 output.classList.add("incorrectCaptcha");
 output.innerHTML = "Incorrect, please try again";
 }
});
// Evento listener al moemnto de dar clic en el boton "Refresh"  se creará un nuevo captchat aleatorio
refreshButton.addEventListener('click', function() {
 userText.value = "";
 let refreshArr = [];
 for (let j = 1; j <= 7; j++) {
 refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
 }
 ctx.clearRect(0, 0, captchaText.width, captchaText.height);
 c = refreshArr.join('');
 ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2);
 output.innerHTML = "";
});
