const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = new DocumentFragment();
const btnes = document.querySelectorAll(".card .btn")

const carritosObjeto = {}

const agregarAllCarrito = (e) =>{

    const producto = {
        titulo : e.target.dataset.fruta,
        id : e.target.dataset.fruta,
        cantidad : 1
    }

    if (carritosObjeto.hasOwnProperty(producto.titulo)) {
        producto.cantidad = carritosObjeto[producto.titulo].cantidad +1;
    }


    carritosObjeto[producto.titulo] = producto
    pintarCarrito()
};

    const pintarCarrito = () => {
   
        carrito.textContent = "";

        Object.values(carritosObjeto).forEach(item =>{

            const clone = template.content.firstElementChild.cloneNode(true);

            clone.querySelector(".lead").textContent = item.titulo
            clone.querySelector(".badge").textContent = item.cantidad

            fragment.appendChild(clone)
        })

        carrito.appendChild(fragment)


}

btnes.forEach((btn) => btn.addEventListener("click",agregarAllCarrito));



