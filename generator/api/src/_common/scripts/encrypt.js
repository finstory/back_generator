const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

// Directorio de entrada y salida
const inputDir = 'dist';  // Cambia esto al directorio que contiene tus archivos JS
const outputDir = 'dist'; // Cambia esto al directorio donde quieres guardar los archivos ofuscados
// Crea el directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Función para ofuscar un archivo
function obfuscateFile(filePath, relativePath) {
    const fileName = path.basename(filePath);
    const outputPath = path.join(outputDir, relativePath);

    // Crea los directorios necesarios en la ruta de salida
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    // Lee el archivo
    const code = fs.readFileSync(filePath, 'utf8');

    // Ofusca el código
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true,
    }).getObfuscatedCode();

    // Escribe el código ofuscado en el directorio de salida
    fs.writeFileSync(outputPath, obfuscatedCode, 'utf8');
}

// Función para recorrer directorios de manera recursiva
function processDirectory(dirPath, relativeDirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const relativePath = path.join(relativeDirPath, file);

        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath, relativePath); // Llama a la función recursivamente para subdirectorios
        } else if (path.extname(file) === '.js') {
            obfuscateFile(fullPath, relativePath); // Procesa el archivo JavaScript
            console.log(`encrypted: ${relativePath} successfully.`);
        }
    });
}

// Inicia el proceso en el directorio de entrada
processDirectory(inputDir, '');

console.log('Ofuscación completada.');