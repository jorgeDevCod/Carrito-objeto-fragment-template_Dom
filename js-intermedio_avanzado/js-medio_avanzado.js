const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

//Funcion de los callback
const findPostById = (id, callback) => {
    const post = posts.find(item => item.id === id)

    if (post) {
        callback(null, post)
    }else{
        //si hay error
        callback("No se encontro el post con Id "+ id)
    }

    callback(post)
};
//Hell callback, version antigua - no recomendable
// findPostById(1,(err, post)=>{
//     if (err) return console.log(err);
//     console.log(post);
        
//     findPostById(2,(err, post) =>{
//         if (err) return console.log(err);
//         console.log(post);

//         findPostById(3,(err, post) =>{
//             if (err) return console.log(err);
//             console.log(post);

//             findPostById(4,(err, post) =>{
//                 if (err) return console.log(err);
//                 console.log(post);
//             })
//         })
//     })
// })


//funcion com Promesas
const findPostById2 = (id) =>
    new Promise((resolve, reject) =>{
        const post = posts.find((item) => item.id === id)
        if (post) {
            resolve(post);
        }else{
            reject("No se encontro el id " + id);
        }
    });

//Hell promesas - recomendable pero no tan usado
// findPostById2(1)
//     .then((post) => {
//         console.log(post)
//         return findPostById2(2)
//     })
//     .then((post) => {
//         console.log(post)
//         return findPostById2(3)
//     })
//     .then((post) => {
//         console.log(post)
//         return findPostById2(4)
//     })
//     .catch((e) =>  console.log(e))


//funcion com Promesas, simulando una recarga de datos
const findPostById3 = (id) =>
    new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const post = posts.find((item) => item.id === id)
            post ? resolve(post) : reject("No existe el ID: " + id) 
        },2000)
    });


//  Hell promesas - con recarga de tiempo
// findPostById3(4)
//     .then((post) => {
//         console.log(post)
//     })
//     .catch((e) =>  console.log(e))
// console.log("fin codigo promesas con recarga")



//funcion async - independiente de await: ambos funcionan solo con promesas
// const buscar = async (id) => {//async - define funcion asincrona
//     try { //await- espera una promesa

//         const post = await findPostById3(id)
//         console.log(post);
        
//     } catch (error) {
//         console.log(error);
//     }
//     finally{
//         console.log("finally: Se ejecuta al final siempre");
//     }
// }

// buscar(4);

//funcion async, awair, promises.all - Ejecuta varios elementos a la ves
const buscar = async() => {
    try {
    //sera mostrado en los primero 2seg
        const resPost = await Promise.all([findPostById3(1),
        findPostById3(2), findPostById3(3)]);
        console.log(resPost);


    // Mostrado en los sgtes 2 seg, al primero => deben existir todos los parametros, sino. Solo mostrara el error
        const resPosts = await Promise.all([findPostById3(1),
            findPostById3(4), findPostById3(3)]);
            console.log(resPosts);
        
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log("finally: Se ejecuta al final siempre");
    }
}

buscar();
