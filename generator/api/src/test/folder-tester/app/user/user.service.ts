//<IMPORTS>
import { AllServices as S, BasicInject, BasicInjectable } from "@services_injector";
import throwError from "@throw_error";
import { UserDto } from "./_dtos/user.dto";

class UserService extends BasicInjectable {

createUser = async (user: UserDto) => {
}
}

export default UserService;