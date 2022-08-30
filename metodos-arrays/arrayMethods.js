//Map - no muta el aray original, porque devuelve uno nuevo
const frutas = ["🍌", "🍎", "🍓"];

const newArray = frutas.map((fruta) => fruta);
frutas.push("🍉")
console.log(newArray)


//Agregar por referencia - diferencia se agrega por default el elemento a fruta,
//provocando cambios en el array original

// const copiArray = frutas

// frutas.push("🍉")
// console.log(copiArray)


//Map en objetos
const users = [
    { name : "john", age:34},
    { name : "Amy",  age:20},
    { name : "Lian", age:10},    
];
const names = users.map((users) => users.age)
console.log(names)



//filter
const user = [
    { Uid:1, name : "john", age:34},
    { Uid:2, name : "Amy",  age:20},
    { Uid:3, name : "Lian", age:10},    
];
const mayores = user.filter((item) => item.age > 30)
console.log(mayores)



//filter pra eliminar
const user2 = [
    { Uid:1, name : "john", age:34},
    { Uid:2, name : "Amy",  age:20},
    { Uid:3, name : "Lian", age:10},    
];
const userDelete = user2.filter((supr) => supr.Uid !== 3)
console.log(userDelete)



//find
const amy = user2.find((recover) => recover.Uid === 2)
console.log(amy);



//find con destructurin
const {age, name} = user2.find((view) => view.Uid === 1)
console.log(`${name}, tiene ${age} años`);


//Comprobar existensia con some
const exists = user2.some((exist) => exist.Uid == 2)
console.log(exists);



//findIndex, Si no existe devuelve -1
const indice = user2.findIndex((existIndex) => existIndex.Uid == 3)
console.log(user2[indice]);



//slice
const arr = ["cat","dog","tiger","zebra"];
//             0    [1       2]     3
const arrayNew = arr.slice(0,3+1)
//Trae el indice inicial 0 = cat, que es incluido y
//final 3 = zebra, no incluido; genera hasta el indice anterior al ultimo.
console.log(arrayNew);



//Concat 
const array1 = ["a","b","c","d"];
const array2 = ["e","f","g","h"];

const array3 = array1.concat(array2);
console.log(array3);



//Spread operator (...)
const array4 = [...array2, " - ", ...array1];
console.log(array4);



//reduce
const numeros = [1,2,3,4,5];

const sumarTodos = numeros.reduce((acc, ValorActual) => acc + ValorActual);
console.log(sumarTodos);



//Unir Arrays con reduce y concat
const Arraynumeros = [
    [1,2],
    [3,4],
    [5,6],
];

const soloNumeros = Arraynumeros.reduce(
    (acc, union) => acc.concat(union)
    );
console.log(soloNumeros);



//Unir Arrays con spread operator y concat
const UnionArrays = [].concat(...Arraynumeros)
console.log(UnionArrays);



//Split 
const cadenaMeses = "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec"

const arrayMeses = cadenaMeses.split(",")
console.log(arrayMeses);


//Join, pasando un caracter separador
const newText = arrayMeses.join(" -")
console.log(newText);


//Join, sin un caracter separador
const spaceText = arrayMeses.join()
console.log(spaceText);