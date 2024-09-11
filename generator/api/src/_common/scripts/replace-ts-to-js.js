const fs = require('fs');
const path = require('path');

const directory = 'dist'; // Cambia esto al directorio donde están tus archivos

// Función para buscar y reemplazar en un archivo
function replaceInFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');

    // Reemplaza todas las ocurrencias de `.ts")` por `.js")`
    const result = data.replace(/\.ts"\)/g, '.js")');

    // Guarda el archivo solo si hubo un cambio
    if (result !== data) {
        fs.writeFileSync(filePath, result, 'utf8');
        console.log(`Reemplazado en: ${filePath}`);
    }
}

// Función para recorrer los directorios de manera recursiva
function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);

        // Si es un directorio, lo procesa de manera recursiva
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        }
        // Si es un archivo .ts, realiza el reemplazo
        else if (path.extname(fullPath) === '.ts' || path.extname(fullPath) === '.js') {
            replaceInFile(fullPath);
        }
    });
}

// Comienza el proceso en el directorio especificado
processDirectory(directory);

console.log('Reemplazo completado.');
