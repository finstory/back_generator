import reducers from "./reducers";

export let initialState = {
  ...reducers,
};

const rootReducer = (state = initialState, action) => {
  if (action.payload) {
    const nameReducer = Object.keys(action.payload)[0];
    const stateReducer = state[nameReducer];

    action.payload = action.payload[nameReducer];

    return { ...state, [nameReducer]: { ...stateReducer, ...action.payload } };
  } else return { ...state };
};

export default rootReducer;
