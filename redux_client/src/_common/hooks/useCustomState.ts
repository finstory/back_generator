import { useState, useEffect } from "react";
import { BehaviorSubject } from "rxjs";

type rxjs = {
  useCustomState: number;
  useCustomEffect: number;
};

export const countSubject = new BehaviorSubject<any>({
  useCustomState: 0,
  useCustomEffect: 0,
});

export const useCustomState = <T>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    // console.log("useState used: ", count);
    setCount(count + 1);
    countSubject.next({ ...countSubject.value, useCustomState: count + 1 });
    return () => {};
  }, [state]);

  return [state, setState] as const;
};

export const useCustomEffect = (effect: () => void, deps: any[]) => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    // console.log("useEffect used: ", count);
    countSubject.next({ ...countSubject.value, useCustomEffect: count });
  }, [count]);

  return useEffect(() => {
    effect();
    setCount(count + 1);
    return () => {};
  }, deps);
};
