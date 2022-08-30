const nombre = "jorge";

const perro = {
    nombre : "peluchin",
    duerme : true,
    edad : 10,
    come: ["Croquetas", "Huesos","Carnes"],
    get nombreMayuscula(){
        return this.nombre.toUpperCase();
    },
    set agregarComida(nuevoAlimento){
        this.come.push(nuevoAlimento)
    }
}

console.log(perro.nombreMayuscula);
//Agregando con set
perro.agregarComida = "leche"
console.log(perro.come);

