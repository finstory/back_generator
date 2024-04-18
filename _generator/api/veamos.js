const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

// Código TypeScript como string
const codigoTS = `//HELLO

const controller:any = {};

controller.getAuth = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getAuth'};
    
  res.status(200).json(data);
};

const getNombre = (): string => {
  return 'Juan';
};`;
// Parse the code
const ast = parser.parse(codigoTS, {
    sourceType: 'module',
    plugins: ['typescript'],
});


const inicio = 35; // Posición inicial del código a imprimir
const fin = 186; // Posición final del código a imprimir (justo antes de "};")

// Extraer el código entre las posiciones inicial y final
const codigoImprimir = codigoTS.substring(inicio, fin);

// Imprimir el código extraído
console.log('Código a imprimir:');
console.log(codigoImprimir);