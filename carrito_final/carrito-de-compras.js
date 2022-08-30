const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = new DocumentFragment();
const btnes = document.querySelectorAll(".card .btn")

const carritosObjeto = [];

const agregarAllCarrito = (e) =>{

    const producto = {
        titulo : e.target.dataset.fruta,
        id : e.target.dataset.fruta,
        cantidad : 1
    }

    const indice = carritosObjeto.findIndex(
        (item) => item.id === producto.id
    );

      console.log(indice);  

      if (indice === -1) {
        carritosObjeto.push(producto);
      }else{
        carritosObjeto[indice].cantidad ++
      }

      console.log(carritosObjeto); 

    pintarCarrito(carritosObjeto)
};

    const pintarCarrito = (array) => {
   
        carrito.textContent = "";

        array.forEach((item) =>{

            const clone = template.content.firstElementChild.cloneNode(true);

            clone.querySelector(".lead").textContent = item.titulo
            clone.querySelector(".badge").textContent = item.cantidad

            fragment.appendChild(clone)
        })

        carrito.appendChild(fragment)


}

btnes.forEach((btn) => btn.addEventListener("click",agregarAllCarrito));



