// getElementById().textContent( imprime con el id sin #)
const h1 = document.getElementById("tituloH1");
console.log(h1.textContent);
//textContent, establece o devuelve contenido del nodo especificado
h1.textContent = "Nuevo texto creado con js, manipulando el DOM";
h1.style.textAlign = "center";


//addEventListener con evento click para modificar el DOM
const boton = document.querySelector(".container .btn");
const boton2 = document.querySelector(".container .btn.btn-danger");


boton.addEventListener("click", () => {
    console.log("has dado click aqui " );
    h1.textContent = "Nuevo texto creado con evento addEventListener";
    h1.style.color = "red";
    boton.style.background = "black";
    boton.textContent = "Editar todo";
})
boton2.addEventListener("click", () => {
    console.log("has dado click aqui 2" );
    h1.textContent = "Imprimiendo en el DOM";
    h1.style.color = "#0b5ed7";
    boton.style.background = "#0d6efd";
})
