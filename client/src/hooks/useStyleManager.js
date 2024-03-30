import { useCallback, useEffect, useState } from "react";

export const useStyleManager = () => {
  const compiler = {};

  compiler.getSizeOfElement = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const elementSize = { height, width };

    const refCallback = useCallback((node) => {
      if (!node) return
      setHeight(node.offsetHeight);
      setWidth(node.offsetWidth);
    }, [])


    return { refCallback, elementSize };
  };

  compiler.setActiveStyle = (condition = true, primaryClass, secondClass = false,) => {
    if (condition) {
      if (secondClass === false) return primaryClass;
      return `${primaryClass} ${secondClass}`;
    } else {
      if (secondClass === false) return "";
      return primaryClass;
    }
  };

  return compiler;
};
