//no se puede declarar dos veces una misma constante
// const nombre = "jorge";

const perro = {
    nombre : "peluchin",
    // alias : "firulais",
    duerme : true,
    edad : 10,
    come: ["Croquetas", "Huesos","Carnes"]
}

const nombrePerro = perro.nombre;

//destructurando objeto
const {nombre: aliasPerro, duerme, edad} = perro
console.log(aliasPerro, edad);

//Si no existe el valor, se agrega uno por defecto
const {alias: aliasPerro2 = "sin nombre", come} = perro
console.log(aliasPerro2,"come " +  come);

