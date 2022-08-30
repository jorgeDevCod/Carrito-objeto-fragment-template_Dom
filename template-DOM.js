const lista = document.querySelector(".lista");
const fragment = new DocumentFragment();

//Capturamos el elemento con identificador
const templateId = document.querySelector("#templateId")

const arrayPaises = ["Peru", "Bolivia", "Colombia"]

//Template tiene dentro la propiedad content y fragment, se usa para ingresar al contenido
//cloneNode es una propiedad de fragmen, que clona nuestro elemento contenido
const clone = templateId.content.cloneNode(true);

//Se agrega contenido al clone
clone.querySelector(".text-primary").textContent = 
"Agregando teexto desde Template" ;

// Se Inserta el clone en la lista
lista.appendChild(clone);


//Opcion rapida trabajando con arrays sin generar reflow
arrayPaises.forEach((paises) =>{

    const clone = templateId.content.cloneNode(true);
    clone.querySelector(".text-primary").textContent = paises;

    //Agrega el clone en el fragment(que no esta en el dom, evitando el reflow)
    fragment.appendChild(clone);

})
//Agregar el contenido al dom(No generar reflow)
lista.appendChild(fragment);