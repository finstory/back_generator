import ServicesInjector from "@services_injector";

class UserServices extends ServicesInjector {

    async connectToProduct() {
        this.S.product.createProduct();

    }

    async create(string: any) {
        console.log(string);
    }
}

export default UserServices;