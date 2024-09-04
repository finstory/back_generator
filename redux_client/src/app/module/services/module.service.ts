import { S, BasicInject, BasicInjectable, PrintError, PrintErrRes } from "@decorators";
import printAlert from "@/_common/_plugins/toast-alerts";
import { confirmAlert } from "@/_common/helpers/alert";

@PrintErrRes
class ModuleService extends BasicInjectable {

    @BasicInject private _api: S["api"];
    @BasicInject private _state: S["state"];
    @BasicInject private _action_module: S["action"]["module"];

    @PrintError
    fetchAllModules = async () => {
        const modulesList = await this._api.module.getModule();
        this._action_module.setModulesList(modulesList);
    }

    @PrintError
    addModule = async (moduleName: string) => {
        await this._api.module.postModule({ moduleName });
        await this.fetchAllModules();
        printAlert(`Module ${moduleName} added successfully`);
    }

    @PrintError
    renameModule = async (moduleName: string, newModuleName: string) => {
        printAlert(`Module ${moduleName} renamed to ${newModuleName} successfully`);
    }

    @PrintError
    removeModule = async (moduleName: string) => {
        const confirm = await confirmAlert(`Are you sure you want to remove module ${moduleName}?`);
        
        if (!confirm) return;

        await this._api.module.deleteModule({ moduleName });
        await this.fetchAllModules();

        printAlert(`Module ${moduleName} removed successfully`);
    }

    // someMethod = () => {

    //     const { children } = this._state.user;
    //     console.log("soy children", children.name);
    //     this._action_user.increment();
    //     this._action_user.changeChildrenName("facundo");
    //     console.log("soy children", this._state.user.children.name)

    // };
}

export default ModuleService;