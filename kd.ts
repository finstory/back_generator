// Definir la función base
const saseService = () => {
  this.baseMethod = function () {
    console.log("Base method");
  };
}

// Definir un método en el prototipo de BaseService
saseService.prototype.sharedMethod = function () {
  console.log("Shared method");
};

// Crear una instancia de BaseService
const baseServiceInstance = new saseService();
baseServiceInstance.baseMethod(); // Salida: "Base method"
baseServiceInstance.sharedMethod(); // Salida: "Shared method"
