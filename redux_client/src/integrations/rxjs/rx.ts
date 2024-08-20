import { useEffect, useState } from "react";
import { BehaviorSubject, observable, Subject } from 'rxjs';
import { setNewState } from "./utils/set-new-state";
import { createUpdateState, UpdateStateFunctions } from "./utils/create-update-state";
import { useRxState } from "./hooks/useRxState";

class RXJS<S> {

    private initialState: S;
    public subject: BehaviorSubject<S>;
    public manageState: UpdateStateFunctions<S>;
    constructor(initialState: S) {
        this.initialState = initialState;
        this.subject = new BehaviorSubject<S>(this.initialState);
        this.manageState = createUpdateState(this.initialState, this.subject);
    }

}
export default RXJS;