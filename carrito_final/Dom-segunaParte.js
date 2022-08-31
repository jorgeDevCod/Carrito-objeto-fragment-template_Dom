const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");

//No es recomendable, generaria mucho codigo y buble js, es decir
//genera clicks propagados y caputas no hechas.
/*padre.addEventListener("click", () => {
    console.log("clickeaste el contenedor padre");
}, true)

hijo.addEventListener("click", () => {
    console.log("clickeaste el contenedor hijo");
}, hijo)

nieto.addEventListener("click", () => {
    console.log("clickeaste el contenedor nieto");
}, nieto );
*/


//Forma recomendable 
/*const cajitas = document.querySelectorAll(".border");

cajitas.forEach(caja =>{
    caja.addEventListener("click", (e) =>{
        e.stopPropagation();//evita la propagacion de clicks
        console.log("haz dado click aqui");
    })
})*/


// preventDefault, detiene los eventos por defectos
/*const formulario = document.querySelector("form")

formulario.addEventListener("submit", (e) =>{
    console.log("haz cliqueado el boton");
    e.preventDefault();
})*/


//Delegacion de eventos con el addEventListener
const container = document.querySelector(".container")
container.addEventListener("click", (e) => {
    // console.loge(e.target);

    if (e.target.id === "padre") {
        console.log("Diste click al padre");
    }

    if (e.target.matches(".border-secondary")) {
        console.log("Diste click al hijo");
    }

    if (e.target.dataset.div === "divNieto") {
        console.log("Diste click al nieto");
    }
})