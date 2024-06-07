import InitialServices from "@config/services/initial-services";

import Generator from "@generator/generator.service";
import FS from "@fs/fs.service";
import Ast from "@ast/ast.service";
import EndpointService from "@endpoint/endpoint.service";
import PackageService from "@package/package.service";


@InitialServices
export class AllServices {

    public readonly endpoint = new EndpointService();
    public readonly generator = new Generator();
    public readonly fs = new FS();
    public readonly ast = new Ast();

}

const S = new AllServices();
export default S;
