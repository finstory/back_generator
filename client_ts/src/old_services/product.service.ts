import { Auto, AutoInstance } from "@services_injector";

@AutoInstance
class ProductService {

    getProduct(username: string, password: string) {

        console.log(username);
        console.log(password);
    }
}
export default ProductService;