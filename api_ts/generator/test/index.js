const fs = require('fs');

// Ruta de los archivos
const file = 'file.js';
const file_clone = 'file_clone.js';

// Función para clonar archivos sin comentarios
function cloneFileWithoutComments(originalFile, cloneFile) {
    fs.readFile(originalFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo original:', err);
            return;
        }

        // Aplicar ediciones necesarias
        let newData = data.replace(/(\/\/[\s\S]*?$\r\n)/gm,'');
// newData = newData.replace(/(\r\n)/gm, '');
        // Escribir el contenido modificado en el archivo copia
        fs.writeFile(cloneFile, newData, 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo copia:', err);
                return;
            }
            console.log('Se han aplicado las ediciones y se ha creado el archivo copia.');
        });
    });
}

// Uso de la función
cloneFileWithoutComments(file, file_clone);
