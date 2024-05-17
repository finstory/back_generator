import ServicesInjector from "@services_injector";

class ProductServices extends ServicesInjector {

    async createProduct() {
        console.log("ProductServices.create");
    }

    async test() {
        this.S.user.create("nose");
    }
}

export default ProductServices;