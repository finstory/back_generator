import Generator from "@/_common/modules/generator/generator.service";
import FS from "@/_common/modules/fs/fs.service";
import Ast from "@/_common/modules/ast/ast.service";
import PackageService from "@/app/package/package.service";
import EndpointService from "@/app/endpoint/endpoint.service";
import FSFile from "@/_common/modules/fs/features/fs-file.service";
import GeneratorRouteFn from "@/_common/modules/generator/features/generator-route-fn.service";
import { Auto, Instantiate } from "./auto-instantiate.services";
import { initialInjector } from "./service-injector";

export class AllServices {

    public readonly generator: Generator;
    public readonly fs: FS;
    public readonly ast: Ast;

    constructor() {

        this.ast = new Ast();
        this.fs = new FS();
        this.generator = new Generator();

        initialInjector(this);
    }
}


const S = new AllServices();
export default S;
