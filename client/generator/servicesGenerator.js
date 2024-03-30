// npm run add_s -- --name ${name_service} 

//$ example:
//$ npm run add_s -- --name auth

const fs = require('fs');

function UpFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateJSFile(name, directory) {
  const jsCode = `import React from 'react'
import axios from 'axios';
import { useRedux } from '../redux/reducer/useRedux';

export const ${name}Reducer = {
  user: {
    name: "Fulanito"
  }
};

export const use${UpFirst(name)}Services = () => {
  const services = { ...useRedux("${name}") };
  const { ${name}, set${UpFirst(name)} } = services;

  // Add your services (or redux actions)...

  services.changeUserName = () => {
    set${UpFirst(name)}({ user: { name: "Sion" } }, "CHANGE_USER_NAME");
  }

  return { ...services };
}

`;

  const fileName = 'use' + UpFirst(name) + 'Services' + '.js';
  const filePath = './src/services' + '/' + fileName;

  fs.writeFile(filePath, jsCode, function (err) {
    if (err) {
      console.error('An error occurred while generating the file:', err);
    } else {
      console.log(fileName, 'was generated in services path.');
    }
  });
}

async function editFileBetweenTags(startTag, endTag, lineToAdd) {
  // Leer el contenido del archivo

  const filePath = './src/redux/reducer/reducers.js';

  await new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('An error occurred while reading the file:', err);
        reject();
        return;
      }

      // Verificar si la línea ya existe en el archivo
      if (data.includes(lineToAdd)) {
        console.log('Error, Reducer was added before.');
        return;
      }

      // Buscar la posición del primer tag
      const startIndex = data.indexOf(startTag);
      if (startIndex === -1) {
        console.error('Start tag not found in the file.');
        return;
      }

      // Insertar la línea después del primer tag
      const insertIndex = startIndex + startTag.length;
      const newContent =
        data.slice(0, insertIndex) + '\n' + lineToAdd + data.slice(insertIndex);

      // Escribir el nuevo contenido en el archivo
      fs.writeFile(filePath, newContent, 'utf8', err => {
        if (err) {
          console.error('An error occurred while writing to the file:', err);
          reject();
          return;
        }
        resolve();
      });
    });
  });
}

async function generateImportsToRedux(name) {
  try {
    const nameImport = `import { ${name}Reducer } from "../../services/use${UpFirst(
      name,
    )}Services";`;
    const nameMethod = `reducers.${name} = ${name}Reducer;`;

    await editFileBetweenTags(
      '//$ GENERATE IMPORT REDUCERS',
      '//$',
      nameImport,
    );
    await editFileBetweenTags(
      '//$ GENERATE ADD REDUCERS TO INITIAL STATE',
      '//$',
      nameMethod,
    );

    console.log('Import generated successfully in reducer path.');
  } catch (error) {}
}

// Get env_name from npm script.
const args = process.argv.slice(3);
let env_name = '';
if (args[0] === '--name' && args[1]) env_name = args[1];
// else if (args[0] === '--say' && args[1]) getName = args[1];
else throw new Error('name is required!');
// console.log(env_name);

 generateJSFile(env_name);
 generateImportsToRedux(env_name);
