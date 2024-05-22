import UserServices from "@app/user/services/user.services";
import ProductServices from "@app/user/services/product.services";
import Generator from "@/_common/modules/generator/generator.service";
import FS from "@/_common/modules/fs/fs.service";
import Ast from "@/_common/modules/ast/ast.service";

export class AllServices {

    public readonly user: UserServices;
    public readonly product: ProductServices;
    public readonly generator: Generator;
    public readonly fs: FS;
    public readonly ast: Ast;
    constructor() {

        this.user = new UserServices(this);
        this.product = new ProductServices(this);
        this.generator = new Generator(this);
        this.fs = new FS(this);
        this.ast = new Ast(this);
        
    }
}


const S = new AllServices();

export default S;
