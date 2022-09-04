const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
const fragment = new DocumentFragment();



document.addEventListener("click",(e) => {
  //console.log(e.target.matches(".card .btn-outline-primary"));

  if (e.target.matches(".card .btn-outline-primary")) {
  
    agregarAllCarrito(e);
  }

  if (e.target.matches("#carrito .list-group-item .btn-success")) {
   
    btnAgregar(e)
  }
  if (e.target.matches("#carrito .list-group-item .btn-danger")) {
   
    btnEliminar(e)
  }
  

});

let carritosObjeto = [];


const agregarAllCarrito = (e) =>{

    const producto = {
        titulo : e.target.dataset.fruta,
        id : e.target.dataset.fruta,
        cantidad : 1,
        precio : parseInt(e.target.dataset.precio),
    }

    // console.log(producto);

    const indice = carritosObjeto.findIndex(
        (item) => item.id === producto.id
    );

      // console.log(indice);  

      if (indice === -1) {
        carritosObjeto.push(producto);
      }else{
        carritosObjeto[indice].cantidad ++;
        // carritosObjeto[indice].precio = 
        // carritosObjeto[indice].cantidad * producto.precio;

     }

    console.log(carritosObjeto); 

    pintarCarrito()
};


const pintarCarrito = () => {
   
        carrito.textContent = "";

        carritosObjeto.forEach((item) =>{

            const clone = template.content.cloneNode(true);
            clone.querySelector(".text-white .lead").textContent = item.titulo;
            clone.querySelector(".badge").textContent = item.cantidad;
            clone.querySelector("div .lead span").textContent = item.precio * item.cantidad;

            clone.querySelector(".btn-danger").dataset.id = item.id;
            clone.querySelector(".btn-success").dataset.id = item.id;
           

            fragment.appendChild(clone)
        })

        carrito.appendChild(fragment)

        pintarFooter()
}


const btnAgregar = (e) => {
  console.log("cliqueaste", e.target.dataset.id);
  carritosObjeto = carritosObjeto.map(item =>{
    if (item.id === e.target.dataset.id) {
      item.cantidad++
    }
    return item
  })

  pintarCarrito()
}


const btnEliminar = (e) => {
  console.log("cliqueaste", e.target.dataset.id);

  carritosObjeto = carritosObjeto.filter((item) =>{
    if (item.id === e.target.dataset.id) {
      if ( item.cantidad > 0) {
        item.cantidad--;
        if ( item.cantidad === 0) return
          return item;
      }
    } else{
        return item;
    }
  })

  pintarCarrito()
}


const pintarFooter = (e) => {
  console.log("pintar footer");
  footer.textContent = "";

  const total = carritosObjeto.reduce(
     (acc, current) => acc + current.cantidad * current.precio,
      0
     )

  const clone = templateFooter.content.cloneNode(true);
  clone.querySelector(" span").textContent = total;
     
  footer.appendChild(clone);

  
}
