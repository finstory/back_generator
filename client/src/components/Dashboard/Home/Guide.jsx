import React, { useEffect } from "react";
import scss from "@sass/components/home/home.module.scss";
import { useHomeServices } from "../../../services/useHomeServices";

export const Guide = () => {
  const {
    home: {
      menu: { stack, sub_menu },
      homePanelsList,
    },
  } = useHomeServices();
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement && homePanelsList.length === 0 && stack === "dashboard") {
      rootElement.style.backgroundImage =
        "url('https://res.cloudinary.com/dz9smi3nc/image/upload/v1710472356/Agro/Infraestructura_submen%C3%BAs_4_vxbjr3.png')";
      // Cambiar otros estilos si es necesario
    } else {
      rootElement.style.backgroundImage = "none";
    }
    return () => {
      rootElement.style.backgroundImage = "none";
    };
  }, [sub_menu, stack]);

  return (
    <div className={scss.guide_container}>
      <div className={scss.guide}>
        <div className="">
          <img
            style={{ display: "relative" }}
            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1710470554/Agro/Tuto_1_du4jfu.png"
            alt="tutorial"
          />
        </div>
        <div className="">
          <img
            style={{ display: "relative" }}
            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1710470601/Agro/Tuto2_pbmxee.png"
            alt="tutorial"
          />
        </div>
        <div className="">
          <img
            style={{ display: "relative" }}
            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1710470604/Agro/Tuto3_m6r9jf.png"
            alt="tutorial"
          />
        </div>
      </div>
    </div>
  );
};
