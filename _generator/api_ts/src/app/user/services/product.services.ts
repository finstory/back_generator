import ServicesInjector from "@services_injector";
import throwError from "@throw_error";
class ProductServices extends ServicesInjector {

    async createProduct() {
         throwError("bad_request", "id");
        console.log("ProductServices.create");
    }

    async test() {
        this.S.user.create("nose");
    }
}

export default ProductServices;