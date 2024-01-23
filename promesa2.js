let promesaConError = new Promise((resolve, reject) =>{
    //simula un error durante la operación
    reject("Algo salio mal..")
});

//Manejar la promesa con error
promesaConError.then((mensaje) =>{
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});