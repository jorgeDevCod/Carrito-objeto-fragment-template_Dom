/* ***Operadores Aritmeticos***** 

let numerouno = parseInt(prompt("Ingresa numero 1"));
let numerodos = parseInt(prompt("Ingresa numero 2"));
let resultado = (numerouno + numerodos )/2 ;
 console.log(resultado);
*/


/* *** Operadores Relacionales ***
let resultado0 = 10 < 20
let resultado1 = 20 < 10
let resultado2 = 10 == 10;
 console.log(resultado0 + ", " + resultado1 + ", " + resultado2);
*/


/* *** Operadores Logicos ***
let resultadoY = true  && false; //false
let resultadoO = false  || true; //true
console.log(resultadoY);
"<br>"
console.log(resultadoO);
*/


/* *** if else *** 
let stringUsuario = prompt("Escriba 'Javascript'");

if (stringUsuario ==='Javascript'){
    console.log('correcto');
}
else{
    console.log('incorrecto');
}



/* *** Practicas con if else *** 
let numUsuario = parseInt(prompt("Ingresa un numero del 1 al 10"));

if (numUsuario <= 10){
    console.log('Perfecto!');
}
else{
    console.log('incorrecto');
}



/* *** template string y switch*** 
let opcionUsuario = prompt(`
Elige una opcion:
1: Libros
2: Peliculas
3: Juegos
`);
console.log(opcionUsuario + " - ");

switch (opcionUsuario) {
    case '1':
        console.log('Padre rico, Padre pobre');

        break;
    case '2':
        console.log('Lobo de Wall Street');

        break;
    case '3':
        console.log('Mario Bros');
        break;
    default:
        console.log('Opcion no valida');
        break;
}
*/


/* *** Bucle while *** 
let numero = 1;

while (numero <= 10) {
    console.log(numero);
    numero ++ ;
}

console.log('fin de numero: ' + numero);
*/


/* *** Practica Bucle while con Math.random *** 
let numeroMaquina = Math.floor(Math.random() * (10-1)) +1;
console.log(numeroMaquina);

let vidas = 3;
let numeroUsuario = parseInt(prompt('Adivina el numero del 1 al 10'));

while (numeroMaquina !== numeroUsuario  && vidas > 1) {
    
    let mensaje = numeroMaquina > numeroUsuario 
    ? "El numeroMaquina es mayor, " : "El numeroMaquina es menor, "
    
    console.log('Te equibocaste😵‍💫'+ mensaje + 'numero de vidas: ' + (vidas-1));
    numeroUsuario = parseInt(prompt('numero del 1 al 10'));
    vidas--;
}

if (numeroMaquina === numeroUsuario) {
    console.log('Ganaste😁👌')
}
else{
    console.log('Perdiste😵‍💫😵')
}
*/


/* *** Arrays *** 

let frutas = ['platanos', 'fresas', 'uva']
// console.log(frutas);
// console.log(frutas.length);

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);
// console.log(frutas[4]);


//    *** for ***
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
 

//    *** for of ***
// for (let  fruta of frutas) {
//     console.log(fruta);
// }


// *** for of practica ***
let nombreUsuario = 'Jorge'
for (let  letra of nombreUsuario) {
      console.log(letra);
}
*/


/* *** function y def: hoisting *** 
// definicion: es un barrido en js que lee las delaraciones 
// guarda en memoria y luego ejecuta el interior.
function saludar() {
    console.log('Bienvenido!');
}
saludar();
*/


/* *** function (return) *** 
function saludar(nombreUsuario) {
    return('Bienvenido!' + nombreUsuario);
}

console.log(saludar('Jorge'));
*/


/* *** function (return) practica*** 
function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2)
}
// console.log(sumar(3,5));

   let numUno = prompt("Ingrese primer numero")
   let numDos= prompt("Ingrese segundo numero")
   console.log(sumar(numUno, numDos));
   */