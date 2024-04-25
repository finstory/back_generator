import React, { useEffect, useState } from "react";
import { useCustomState, useCustomEffect } from "../../hooks/useCustomState";

interface Props {
  id: number;
}

type MyUser = {
  id: number;
  name: string;
};

export const Home = ({ id }: Props) => {
  // const [darkMode, setDarkMode] = useState<boolean>(true);
  const [name, setName] = useCustomState<MyUser>({ id: 1, name: "hello" });

  useCustomEffect(() => {
    // console.log("yes");
  }, [name]);

  const onPress = () => {
    setName({ id: Math.random() * 2323, name: "hello" });
  };

  // useLoggingEffect();

  // useEffect(() => {
  //   console.log("Home mounted");
  //   return () => {
  //     console.log("Home unmounted");
  //   };
  // }, []);

  return (
    <div>
      <button onClick={onPress}>press {JSON.stringify(name)}</button>
    </div>
  );
};
