import React from "react";
import { Panel } from "../Panels/Panel";
import { cantLumenes } from "../../../test/helpers/automatic2";
import { v4 as uuidv4 } from "uuid";
import * as auto from "../../../test/helpers/automatic";

export const GestiónDeResiduos = () => {
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
    {
      panelId: 22,
      homePanelId: "15247",
      size: "giant",
      title: "RESIDUOS INTELIGENTES",
      subtitle: "Volumen",
      description: "Mediciones de Residuos Inteligentes",
      optionsList: [
        { value: "Guano", color: "" },
        { value: "Cama de Pollos", color: "" },
        { value: "Cadáveres", color: "" },
        { value: "Efluentes", color: "" },
      ],

      contentList: [
        {
          id: "Guano",
          childrenLayoutStyle: "img_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "normal_in_giant_img",
              compList: [
                {
                  isImage: true,
                  id: uuidv4(),
                  url: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710531129/Agro/Panel/Frame_2610514_bvlql3.png",
                },
              ],
            },
          ],
        },
        {
          id: "Cama de Pollos",
          childrenLayoutStyle: "img_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "normal_in_giant_img",
              compList: [{}],
            },
          ],
        },
        {
          id: "Cadáveres",
          childrenLayoutStyle: "img_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "normal_in_giant_img",
              compList: [{}],
            },
          ],
        },
        {
          id: "Efluentes",
          childrenLayoutStyle: "img_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "normal_in_giant_img",
              compList: [{}],
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
    </>
  );
};


