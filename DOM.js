//Probando el DOM
// console.log(document);
// console.log(document.title);

// Imprimiendo valor com getElementById().textContent( solo Id)
console.log(document.getElementById("tituloH1").textContent);
//Recomendable para inyectar en el DOM
console.log(document.getElementById("tituloH1").innerHTML);
//Imprime con selectores como: etiketas, clases, ID
console.log(document.querySelector("H1"));
// (querySelector selecciona el primer elemento encontrado)
console.log(document.querySelector(".text-danger"));
// (querySelectorAll selecciona todos los elementos)
console.log(document.querySelectorAll(".text-danger"));
// (querySelectorAll selecciona elemento bajo recursividad)
console.log(document.querySelectorAll(".container .text-info"));
console.log(document.querySelectorAll(".h5 .text-danger"));