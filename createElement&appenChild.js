const lista = document.querySelector("#lista");
// const fragment = document.createDocumentFragment()
//Agrega estructuras al DOM(fragment esta fuera del DOM-no provoca reflow)
const fragment = new DocumentFragment()


//createElement => Crea elementos/etiketas, desde una referencia
const li = document.createElement("li");
li.textContent ="Elemento creado desde JS"

//appenChild => añade contenido al final de un elemento/etiketa
lista.appendChild(li);
console.log(li)


//tecnica funcional para ejemplos createElement & append
arrayPaises.forEach((paises) => {//recorre el array y agrega el valor, lo junta y lo muestra
    const li = document.createElement("li");//se crea el li
    li.textContent = paises //se añade valor al li
    lista.appendChild(li); // se junta con appenchild en lista y lo muestra
});


//tecnica corta (no recomendable para el reflow)
arrayPaises.forEach((paises) => {//recorre el array y agrega el valor, lo junta y lo muestra
    //innerHTML => reescribe los valores dentro de un elemento
    lista.innerHTML +=`<li>${paises}</li>` //reescribe valores
});


//tecnica recomendable para createElement & appendChild
arrayPaises.forEach((paises) => {//recorre el array y agrega el valor, lo junta y lo muestra
    const li = document.createElement("li");//se crea el li
    li.textContent = paises //se añade valor al li
    fragment.appendChild(li); // se añade el li dentro del fragment
});

lista.appendChild(li) //añade a lista los valores y lo muestra