let initialState = {
  auth: {
    user: {
      name: "facu",
      password: "123",
    },
    name: "FACUNDO",
    token: "",
    isAuthenticated: false,
    loading: true,
  },
};

const rootReducer = (state = initialState, action) => {
  if (action.payload) {
    //* Nombre de mi Reducer : (ej: "home" (string))
    const nameReducer = Object.keys(action.payload)[0];
    //* Objeto Reducer : (ej: state.home (object))
    const stateReducer = state[nameReducer];
    //* Reduzco mi payload : (ej: payload.home (object))
    action.payload = action.payload[nameReducer];

    return { ...state, [nameReducer]: { ...stateReducer, ...action.payload } };
  } else return { ...state };
};

// function todos(state = initialState, action) {
//   return state;
// }

export default rootReducer;
