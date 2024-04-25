import React, { useEffect, useState } from "react";
import { countSubject } from "../../hooks/useCustomState";

export const Testing = () => {
  const [myCount, setMyCount] = useState({
    useCustomState: 0,
    useCustomEffect: 0,
  });

  useEffect(() => {
    const subscription = countSubject.subscribe((countValue) => {
      //   console.log("count en OtroComponente:", countValue);
      setMyCount({ ...countValue });

      // Realiza acciones con countValue
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          padding: "2rem",
          height: "100vh",
          fontSize: "2rem",
          color: "white",
        }}
      >
        <div>STATE :{myCount.useCustomEffect}</div>
        <div>EFFECT :{myCount.useCustomState}</div>
      </div>
    </>
  );
};
