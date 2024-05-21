import UserServices from "@/app/user/services/user.services";
import ProductServices from "@/app/user/services/product.services";

export class AllServices {

    public readonly user: UserServices;
    public readonly product: ProductServices;
    constructor() {

        this.user = new UserServices(this);
        this.product = new ProductServices(this);
    }
}


const S = new AllServices();

export default S;
