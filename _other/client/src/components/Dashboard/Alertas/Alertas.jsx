import React, { useState } from "react";
import { NumberPanel } from "../Panels/NumberPanel/NumberPanel";
import scss from "../../../assets/sass/components/panels/panels.module.scss";
import { Panel } from "../Panels/Panel";

export const Alertas = () => {
  const contentList = [
    {
      panelId: 2,
      homePanelId: "154",
      size: "semi_large",
      title: "",
      subtitle: "",
      description: "",
      optionsList: [],
      contentList: [
        {
          id: 1231234545,
          childrenLayoutStyle: "semi_large_wrap",
          wrapList: [
            {
              id: 3736,
              type: "realtime_small",
              compList: [
                {
                  id: 21212,
                  title: "Temperatura Actual",
                  value: 24,
                  measure: "° C",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709905170/Agro/Panel/small/Frame_29_c6js2u.svg",
                },
                {
                  id: 958261212,
                  title: "Temperatura Galpón",
                  value: 22,
                  measure: "° C",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709906446/Agro/Panel/small/Frame_29_1_x9ezcq.svg",
                },
                {
                  id: 954328765123,
                  title: "Humedad",
                  value: 74,
                  measure: "%",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709906449/Agro/Panel/small/Frame_29_2_wltw59.svg",
                },
                {
                  id: 86312378903,
                  title: "El Tiempo Ahora",
                  value: "Ola de Calor",
                  measure: "",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709906484/Agro/Panel/small/Frame_29_3_rmqxse.svg",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      {contentList.map((panel) => (
        <Panel key={panel.homePanelId} {...panel} />
      ))}
      <div
        style={{
          width: "140rem",
          // height: "50rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2.5rem",
          objectFit: "cover",
          borderRadius: "1rem",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1710530873/Agro/Panel/Frame_2610516_porvta.png"
          alt="Panel"
        />
      </div>
    </>
  );
};
