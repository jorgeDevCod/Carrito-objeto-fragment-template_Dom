let nombreDos = "Minino"

const gato = {
    nombre : "Silvestre",
    novia: "Angela",
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
    },//Metodos creados
    comer : function() {
        console.log("gato comiendo");
    },
    comerDos (){
        console.log("gato comiendoDos");
    },//Template String
    come(alimentos){
        console.log(`
             ${this.nombre} esta comiendo ${alimentos}
        `);
    },//Template con funcion flecha(no recomendable)
    comeDos :(alimento) =>{
        console.log(`
            ${nombreDos} esta comiendo ${alimento}
        `);
    },
    comeTres :(alimenta) =>{
        console.log(`
            ${gato.novia} alimenta ha ${alimenta}
        `);
    }, //Template/ array con funcion flecha(recomendable)
    ListarEnemigos(){
            this.enemigos.forEach((item) => console.log(item));
    },
};
//propiedad
let amigos = gato.otros.amigos
console.log(amigos.length);

//Metodos Js por default
console.log(amigos.push())

//Metodos creados
gato.comer();
gato.comerDos();

//Metodos con Template String js
gato.come("pez");
gato.comeDos("galletas");
gato.comeTres("gatitos")

//Metodos con template con funcion flecha
gato.ListarEnemigos();