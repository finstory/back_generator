import React from "react";

import React from "react";

export const GiantImg = (url = "") => {
  return (
    <div
      style={{
        width: "1400rem",
        height: "65rem",
        borderRadius: "1.5rem",
        backgroundColor: "red",
      }}
    >
      <img
        src={url}
        alt="panel"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};
