type IName = "fs" | "ast";

interface S {
  fs: any; // Tipo específico para 'fs'
  ast: any; // Tipo específico para 'ast'
}

function generateSymbolObject<T extends string>(strings: T[]): { [K in T]: unique symbol } {
  const symbolObject = {} as { [K in T]: unique symbol };

  strings.forEach(str => {
    symbolObject[str] = Symbol(str) as unique symbol;
  });

  return symbolObject;
}

// Lista de strings
const stringList: IName[] = ['fs', 'ast'];

// Generar un objeto de símbolos automáticamente a partir de la lista de strings
const symbols = generateSymbolObject(stringList);

// Definir los tipos de FS y AST (modifícalos según tus necesidades)
type FS = { someFSProperty: string };
type AST = { someASTProperty: string };

// Crear la clase Injector
class Injector {
  protected readonly [symbols["fs"]]: FS;
  protected readonly [symbols["ast"]]: AST;

  constructor(data: S) {
    this[symbols["fs"]] = data.fs;
    this[symbols["ast"]] = data.ast;
  }
}

// Ejemplo de uso
const fsData: FS = { someFSProperty: "FS Data" };
const astData: AST = { someASTProperty: "AST Data" };

const injectorInstance = new Injector({ fs: fsData, ast: astData });

// Acceder a las propiedades dinámicas
console.log(injectorInstance[symbols["fs"]]); // { someFSProperty: "FS Data" }
console.log(injectorInstance[symbols["ast"]]); // { someASTProperty: "AST Data" }
