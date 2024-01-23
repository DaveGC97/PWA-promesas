const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 800);
    });
};

//Donde la primer promesa es sumarLento y la segunda promesa es sumarRapido
//Si una de los dos promesas se ejecutan al mismo tiempo y una falla, mostrará la que se resolvió
//Si la que falla se ejecuta primero, entonces mostrará el puro fallo

const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(numero + 1);
        }, 300);
    });
};

Promise.race([sumarLento(5), sumarRapido(6)])
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log);
