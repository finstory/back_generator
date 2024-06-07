import Generator from "@/_common/modules/generator/generator.service";
import FS from "@/_common/modules/fs/fs.service";
import Ast from "@/_common/modules/ast/ast.service";
import PackageService from "@/app/package/package.service";
import EndpointService from "@/app/endpoint/endpoint.service";
import InitialServices from "../config/services/initial-services";


@InitialServices
export class AllServices {

    public readonly endpoint = new EndpointService();
    public readonly generator = new Generator();
    public readonly fs = new FS();
    public readonly ast = new Ast();

}


const S = new AllServices();
export default S;
