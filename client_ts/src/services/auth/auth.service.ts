import { Auto, AutoInstance } from "@services_injector";

@AutoInstance
class AuthService {
  
    login(username: string, password: string) {

        console.log(username);
        console.log(password);
    }
}
export default AuthService;