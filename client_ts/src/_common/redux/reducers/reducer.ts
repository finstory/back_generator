import * as initialState from "../stores/store";

const rootReducer = (state = initialState, action: any) => {
  if (action.payload) {
    const nameReducer = Object.keys(action.payload)[0];
    const stateReducer = state[nameReducer];

    action.payload = action.payload[nameReducer];

    return { ...state, [nameReducer]: { ...stateReducer, ...action.payload } };
  } else return { ...state };
};

export default rootReducer;
