/** Ejecuta operaciones asincrónicas de forma secuencial.
 * @param {Array<Function>} funciones - Array de funciones que devuelven promesas.
 * @returns {Promise} - Promesa que se resuelve cuando todas las operaciones han sido ejecutadas o se rechaza si alguna falla.
 */

const realizaOperacionesAsincronas = (funciones) => {
    // Utilizamos reduce para encadenar las funciones de forma secuencial
    return funciones.reduce((promesaAnterior, funcionActual) => {
        // La función actual se ejecuta después de que la promesa anterior se resuelve
        return promesaAnterior.then(funcionActual);
    }, Promise.resolve()); // La primera promesa se resuelve inmediatamente para iniciar la cadena
};

// Ejemplo de uso:
const operaciones = [
    () => sumarLento(5),
    () => sumarRapido(6),
    // Puedes agregar más funciones que devuelvan promesas
];

realizaOperacionesAsincronas(operaciones)
    .then(respuesta => {
        console.log(respuesta); // Se imprime si todas las promesas se resolvieron correctamente
    })
    .catch(error => {
        console.error('Error:', error); // Se imprime si alguna promesa fue rechazada
    });
