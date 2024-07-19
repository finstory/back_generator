import reducers from "./reducers";

let initialState = { ...reducers };

const rootReducer = (state = initialState, { payload }) => {
  if (payload) {

    //* Nombre de mi Reducer : (ej: "home" (string))
    const nameReducer = Object.keys(payload)[0];
    //* Objeto Reducer : (ej: state.home (object))
    const stateReducer = state[nameReducer];
    //* Reduzco mi payload : (ej: payload.home (object))
    payload = payload[nameReducer];

    return { ...state, [nameReducer]: { ...stateReducer, ...payload } };

  } else return { ...state };
};
 

export default rootReducer;
