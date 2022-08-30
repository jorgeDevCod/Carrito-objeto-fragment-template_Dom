    const perro = {
        nombre : "peluchin",
        duerme : true,
        edad : 10,
        come: ["Croquetas", "Huesos","Carnes"]
    }
     for (const propiedad in perro) {
         console.log(perro[propiedad]);
    }

    console.log(Object.values(perro));
    Object.values(perro).forEach((item) => console.log( item));