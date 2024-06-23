import InitialServices from "@config/services/initial-services";

import GeneratorService from "@generator/generator.service";
import FS from "@fs/fs.service";
import Ast from "@ast/ast.service";
import EndpointService from "@endpoint/endpoint.service";
import PackageService from "@package/package.service";
import ControllerService from "@/app/controller/controller.service";
import ValidationService from "@/app/validation/validation.service";

@InitialServices
export class AllServices {
  public readonly generator = new GeneratorService();
  public readonly fs = new FS();
  public readonly ast = new Ast();

  public readonly package = new PackageService();
  public readonly validation = new ValidationService();
  public readonly endpoint = new EndpointService();
  public readonly controller = new ControllerService();
}

const S = new AllServices();
export default S;
