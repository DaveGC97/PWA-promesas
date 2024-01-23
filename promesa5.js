const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 800);
    });
};

const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 300);
    });
};

Promise.all([sumarLento(5), sumarRapido(6)])
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log);
