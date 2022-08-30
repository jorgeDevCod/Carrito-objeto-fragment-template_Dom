const lista = document.querySelector(".lista");

const arrayPaises = ["Peru", "Bolivia", "Colombia"]

const fragment = new DocumentFragment();

{/* <li class="list">
    <b>pais</b> 
    <span class="text-primary">Aqui va el pais</span>
 </li> */}

//Opcion larga de crear contenido desde el DOM
 arrayPaises.forEach((paises) =>{
    const li = document.createElement("li")
    li.className = "list"

    const b = document.createElement("b")
    b.textContent = "pais: ";

    const span = document.createElement("span")
    span.className = "text-primary"
    span.textContent = paises

    li.appendChild(b)
    li.appendChild(span)

    //Evita reflow en el DOM
    fragment.appendChild(li);
 })
 lista.appendChild(fragment);


 //Opcion corta de crear contenido desde el DOM

 //Evita reflow en el innerHTML
 let template= "";
 
 arrayPaises.forEach((paises) =>{

    template += `
    <li class="list">
        <b>Pais: </b> 
        <span class="text-primary">
        ${paises}</span>
    </li>
    `;
 })

 lista.innerHTML= template;






