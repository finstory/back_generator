import { AuthApiService } from "../auth/auth.api.service";

class Injector {
    private instances: { [key: string]: any } = {};
  
    constructor(private className: string) {
        this.instances[this.className] = this.getInstance(this.className);
    }
  
    public getInstance<T>(className: string): T {
      if (!this.instances[className]) {
        switch (className) {
          case 'AuthApiService':
            this.instances[className] = new AuthApiService() as T;
            break;
          // Aquí puedes agregar más casos para otras clases que quieras instanciar
        }
      }
      return this.instances[className];
    }
  
  }
  
  // Uso:
  let auth_api = new Injector('AuthApiService').(accedo a todas las funciones de AuthApiService);
 let user_api = new Injector('UserApiServices').(accedo a todas las funciones de UserApiServices);