const gato = {
    nombre : "Silvestre",
    duerme : true,
    edad : 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos : ["Tom","Jerry"],
        favoritos : {
            comida : {
                frio : "salmon",
                caliente : "pollo"
            },
            siestas : {
                dia : "11 de la mañana",
                noche : "4 de la tarde"
            },
            juguetes : {
                suaves : ["pescado", "raton"],
                duros : [["ilo", "eslanbre"],["pelota", "rebotador"]]
            }
        }
    }
};

console.log(gato.otros.favoritos.comida.caliente)
console.log(gato.otros.favoritos.juguetes.duros[1][0])
console.log(gato.otros.favoritos.siestas.noche)
//(?) =>valida si se agrego, si no esta agregado? sera undefined
console.log(gato.otros.favoritos.siesta?.dia)


//destructuring objects
const ElegirjugueteGato = gato.otros.favoritos.juguetes.duros[1][0];
console.log(ElegirjugueteGato)

const {otros : {amigos : amigosGato} } = gato;
console.log(amigosGato)

//Destructurando valor de objeto y agregandole alias con :...
const {amigos: amigosArray} = gato.otros;
//valor amigos destructurado
const [amigoUno, amigoDos] = amigosArray 
console.log(amigoUno)