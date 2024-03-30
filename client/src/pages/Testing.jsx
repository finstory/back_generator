//! NO SE USA O SE USARÁ LUEGO...
import React, { useEffect, useRef, useState } from "react";
import { resultHours, resultDate } from "../test/helpers/automatic2";
export const Testing = () => {
  useEffect(() => {
    console.log(`${resultHours()} - ${resultDate()}`);
  }, []);

  return (
    <div className="testing">
      <div className="container"></div>
    </div>
  );
};
