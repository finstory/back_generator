import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Context = createContext(null);

export const useContextWhitRedux = () => {
  function fistLetterUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const dispatch = useDispatch();

  let listReducers = {}; //* {setHome,setGlobal}.

  const state2 = useSelector((state: object) => {
    for (let name in state) {
      const setName = "set" + fistLetterUpperCase(name);
      listReducers = {
        ...listReducers,
        [setName]: (data, actionName) => {
          data = { [name]: data };
          if (actionName) dispatch({ type: actionName, payload: data });
          else dispatch({ type: Object.keys(data)[0], payload: data });
        },
      };
    }
  });

  return { listReducers };
};

export const useRedux = (name) => {
  const getReducer = (name) => {
    return useSelector((state) => state[name]);
  };

  function fistLetterUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const setReducer = (name) => {
    const dispatch = useDispatch();
    const setName = "set" + fistLetterUpperCase(name);
    return {
      [setName]: (data, actionName) => {
        data = { [name]: data };
        if (actionName) dispatch({ type: actionName, payload: data });
        else dispatch({ type: Object.keys(data)[0], payload: data });
      },
    };
  };
  return { ...setReducer(name), [name]: getReducer(name) };
};
