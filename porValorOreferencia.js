//Por valor, seguira siendo el primer valor creado
let a = "hola";
let b = a;

a = "chao"
console.log(b);

//Por referencia en arrays, el primer valor y segundo valor se unen
let c = ["hola"];
let d = c;

c.push("chao");

console.log(d);

//Por referencia de objetos, es igual que con los arrays(pero no necesita push)
let e = {nombre : "hola"};
let f = e;

e.nombre = "chao";

console.log(f);