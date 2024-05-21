import ServicesInjector from "@services_injector";
import throwError from "@throw_error";
class UserServices extends ServicesInjector {

    async connectToProduct() {
        //  throwError("bad_request", "id");
        await this.S.product.createProduct();
        //    this.S.generator
    }

    async create(string: any) {
        console.log(string);
    }
}

export default UserServices;