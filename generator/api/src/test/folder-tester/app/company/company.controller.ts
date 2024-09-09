//<IMPORTS>
import { controller, validation } from "./_entities/company-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>

controller.getCompany = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getCompany" };

    res.status(200).json(data);
};

controller.putCompanyLogin = async ({ params, query, body }, res) => {
    console.log(body.id);

    const data: any = { controllerName: "getCompanyRegister" };

    res.status(200).json(data);
};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };
