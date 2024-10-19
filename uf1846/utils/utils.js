const fs = require('fs');

/**
 * Logs a generic message to a file named in the format "YYYY-MM-DD.txt".
 * If the file doesn't exist, it will be created. If it exists, the log will be appended.
 *
 * @param {string} message - The message to be logged.
 */

function logRequest(message) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const fileName = `${year}-${month}-${day}.txt`;
    const logMessage = `${message}\n`;

    // Escribir en el archivo (agregando al final del archivo, o creándolo si no existe)
    fs.appendFile(fileName, logMessage, (err) => {
        if (err) {
            console.error('Error al registrar el mensaje', err);
        } else {
            console.log(`Mensaje registrado en el archivo ${fileName}`);
        }
    });
}

module.exports = {
    logRequest
}
