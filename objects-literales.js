
//objetos literales
const gato = {
    nombre : "Silvestre",
    duerme : true,
    edad : 10,
    enemigos: ["agua", "perros"]
}
console.log(gato.edad)
console.log(gato["enemigos"][0])
console.log(gato.enemigos[1])

//Propiedades crud
gato.color = "Gris";
gato.nombre = "Tom";
gato.edad = 6;
delete gato.duerme;
gato.duerme = false

console.log(gato);

//Propiedad para verificar existencia del objeto
// console.log(gato.hasOwnProperty("edad"))

if (gato.hasOwnProperty("nombre")) {
    gato.nombre = "Minino";
}
console.log(gato)

