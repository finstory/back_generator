import React from "react";

export const NormaInsideGiantImg = ({ url = "" }) => {
  return (
    <div
      style={{
        // width: "64rem",
        // height: "36rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {url && <img src={url} alt="panel" />}
    </div>
  );
};
