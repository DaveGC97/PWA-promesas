/** Devuelve una promesa que se resuelve con un mensaje después de esperar 1 segundo por cada número del 1 al n.
 * @param {number} n - Número de veces a esperar.
 * @returns {Promise} - Promesa que se resuelve con el mensaje "¡He esperado N veces!".
 */

const esperarNVeces = (n) => {
    return new Promise((resolve, reject) => {
        // Función recursiva para esperar secuencialmente
        const esperar = (i) => {
            setTimeout(() => {
                // Comprobar si hemos esperado n veces
                if (i === n) {
                    resolve(`¡He esperado ${n} veces!`); // Resolvemos la promesa con el mensaje final
                } else {
                    esperar(i + 1); // Llamada recursiva para la siguiente espera
                }
            }, i * 1000); // Esperar i segundos (1 segundo por cada número)
        };

        esperar(1); // Iniciar la secuencia de espera desde 1
    });
};

// Ejemplo de uso:
const n = 3;

esperarNVeces(n)
    .then(mensaje => {
        console.log(mensaje); // Se imprime cuando la promesa se resuelve después de las esperas secuenciales
    })
    .catch(error => {
        console.error('Error:', error); // Esto se ejecutaría solo si hay un error en la promesa, pero en este caso es poco probable
    });
