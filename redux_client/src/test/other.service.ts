import { S, BasicInject, BasicInjectable, Redux, ReduxConfig, PrintError, PrintErrRes, SetRedux } from "@decorators";

@PrintErrRes
class OtherService extends BasicInjectable {

    @BasicInject private _user: S["user"];

    otherMethod = () => {
        // this._user.actions.increment();

    };
}
export default OtherService;