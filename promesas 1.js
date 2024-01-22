let promesaExitosa = new Promise((resolve, rejet) => {
    setTimeout(()=>{
        resolve("Promesa exitosa")
    }, 3000)
})

//Manejo de promesas
//Then: se ejecuta cuando la promesa se resuleve exitosamente
//Catch: se ejecuta cuando la promesa es rechazada

promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) =>{
    console.error(error);
})