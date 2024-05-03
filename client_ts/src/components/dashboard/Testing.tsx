import React, { useEffect, useState } from "react";

export const Testing = () => {
  const [myCount, setMyCount] = useState({
    useCustomState: 0,
    useCustomEffect: 0,
  });


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
      </div>
    </>
  );
};
