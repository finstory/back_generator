import { S, BasicInject, BasicInjectable, PrintError, PrintErrRes } from "@decorators";
import { userActions } from "@/_common/redux";

@PrintErrRes
class UserService extends BasicInjectable {

    public actions = userActions();

    someMethod = () => {
        this.actions["testName/comp"]("testName")
    };
}
export default UserService;