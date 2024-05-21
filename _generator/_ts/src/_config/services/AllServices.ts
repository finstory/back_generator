import UserServices from "@app/user/services/user.services";
import ProductServices from "@app/user/services/product.services";
import Generator from "@ms/generator/generator.service";
import FS from "@ms/generator/features/fs/fs.service";

export class AllServices {

    public readonly user: UserServices;
    public readonly product: ProductServices;
    public readonly generator: Generator;

    constructor() {

        this.user = new UserServices(this);
        this.product = new ProductServices(this);
        this.generator = new Generator(this);
    }
}


const S = new AllServices();

export default S;
