/** Envuelve una promesa con un límite de tiempo.
 * @param {Promise} promesa - Promesa original a la que se le aplicará el límite de tiempo.
 * @param {number} tiempoLimite - Tiempo máximo de espera en milisegundos.
 * @returns {Promise} - Promesa con límite de tiempo.
 */

const promesaConTimeout = (promesa, tiempoLimite) => {
    return new Promise((resolve, reject) => {
        // Configurar el temporizador para el tiempo límite
        const timeoutId = setTimeout(() => {
            reject(`Tiempo de espera agotado (${tiempoLimite} milisegundos)`);
        }, tiempoLimite);

        // Ejecutar la promesa original
        promesa
            .then((resultado) => {
                // Limpiar el temporizador si la promesa se resuelve antes del tiempo límite
                clearTimeout(timeoutId);
                resolve(resultado);
            })
            .catch((error) => {
                // Limpiar el temporizador en caso de error
                clearTimeout(timeoutId);
                reject(error);
            });
    });
};

// Uso de la función promesaConTimeout
const tiempoLimite = 2000; // 2 segundos
const promesaOriginal = ejecutarConTimeout(tiempoLimite - 1000); // Resuelve en 1 segundo

promesaConTimeout(promesaOriginal, tiempoLimite)
    .then((resultado) => {
        console.log(resultado); // Se imprime si la promesa se resuelve dentro del tiempo límite
    })
    .catch((error) => {
        console.error("Error:", error); // Se imprime si la promesa se rechaza o si se agota el tiempo de espera
    });
