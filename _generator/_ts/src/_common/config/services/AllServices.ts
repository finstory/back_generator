import Generator from "@/_common/modules/generator/generator.service";
import FS from "@/_common/modules/fs/fs.service";
import Ast from "@/_common/modules/ast/ast.service";

import PackageService from "@/app/package/package.service";
import EndpointService from "@/app/endpoint/endpoint.service";

export class AllServices {

    public readonly generator: Generator;
    public readonly fs: FS;
    public readonly ast: Ast;

    public readonly package: PackageService;
    public readonly endpoint: EndpointService;

    constructor() {

        this.generator = new Generator(this);
        this.fs = new FS(this);
        this.ast = new Ast(this);

        this.package = new PackageService(this);
        this.endpoint = new EndpointService(this);
    }
}


const S = new AllServices();

export default S;
