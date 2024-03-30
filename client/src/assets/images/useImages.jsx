import React from "react";
import images from "./index.js";

export const useImages = () => {
  const createComponent = (imgName) => {
    return (
      <div className="image_test">
        <img src={images[imgName]} alt="" />{" "}
      </div>
    );
  };

  return { createComponent };
};
