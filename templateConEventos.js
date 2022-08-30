const lista = document.querySelector(".lista");
const fragment = new DocumentFragment();
//Capturamos el elemento con identificador
const templateId = document.querySelector("#templateId")

const arrayPaises = ["Peru", "Bolivia", "Colombia"]

const clickPaises = (e) => console.log("Haz clickeado aqui", e.target)

//Opcion rapida trabajando con eventos sin generar reflow
arrayPaises.forEach((paises) =>{

    //firstElementChild, propiedad de
    const clone = templateId.content.firstElementChild.cloneNode(true);
    clone.querySelector("span").textContent = paises;

    clone.addEventListener("click", clickPaises);
    //Agrega el clone en el fragment(que no esta en el dom, evitando el reflow)
    fragment.appendChild(clone);

})
//Agregar el contenido al dom(No generar reflow)
lista.appendChild(fragment);