const lista = document.querySelector("#lista");

const arrayPaises = ["Peru", "Bolivia", "Colombia"]

const fragment = new DocumentFragment()


//Invertir orden con propiedades de fragment
arrayPaises.forEach((paises) => {//recorre el array y agrega el valor, lo junta y lo muestra
    //Crea un nuevo nodo desde un elemento
    const newNode = document.createElement("li");
    newNode.textContent = paises
   //crea referencia del new nodo
    const referenceNode = fragment.firstChild

    fragment.insertBefore(newNode, referenceNode); // se añade el  dentro del fragment
});

lista.appendChild(fragment) //appenChild => añade contenido al final de un elemento/etiketa