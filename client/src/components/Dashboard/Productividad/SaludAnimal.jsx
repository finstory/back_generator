import React from "react";
import { Panel } from "../Panels/Panel";
import { v4 as uuidv4 } from "uuid";

export const SaludAnimal = () => {
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
      title: "Alimentación",
      subtitle: "",
      description:
        "Información importante sobre el consumo y la conversión alimenticia.",
      optionsList: [
        { value: "Población", color: "" },
        { value: "Sanidad", color: "" },
        { value: "Peso", color: "" },
      ],

      contentList: [
        {
          id: "Población",
          childrenLayoutStyle: "img_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "normal_in_giant_img",
              compList: [
                {
                  isImage: true,
                  id: uuidv4(),
                  url: "https://res.cloudinary.com/die1hnh4p/image/upload/v1710516099/agro/Frame_2610504_wnxtj8.png",
                },
              ],
            },
            {
              id: uuidv4(),
              type: "normal_in_giant_img",
              compList: [
                {
                  isImage: true,
                  id: uuidv4(),
                  url: "https://res.cloudinary.com/die1hnh4p/image/upload/v1710516089/agro/Frame_2610503_ksbjop.png",
                },
              ],
            },
          ],
        },
        {
          id: "Sanidad",
          childrenLayoutStyle: "img_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "normal_in_giant_img",
              compList: [
                {
                  isImage: true,
                  id: uuidv4(),
                  url: "https://res.cloudinary.com/die1hnh4p/image/upload/v1710516141/agro/Sanidad_1_rgcnfy.png",
                },
                {
                  isImage: true,
                  id: uuidv4(),
                  url: "https://res.cloudinary.com/die1hnh4p/image/upload/v1710516148/agro/Sanidad_2_zu32wj.png",
                },
                {
                  isImage: true,
                  id: uuidv4(),
                  url: "https://res.cloudinary.com/die1hnh4p/image/upload/v1710516165/agro/Sanidad_3_m0g6hn.png",
                },
              ],
            },
          ],
        },
        {
          id: "Peso",
          childrenLayoutStyle: "img_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "normal_in_giant_img",
              compList: [
                {
                  isImage: true,
                  id: uuidv4(),
                  url: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710526231/Agro/Panel/Frame_2610504_zcayya.png",
                },
              ],
            },
            {
              id: uuidv4(),
              type: "normal_in_giant_img",
              compList: [
                {
                  isImage: true,
                  id: uuidv4(),
                  url: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710526269/Agro/Panel/Frame_2610503_dpou4m.png",
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
    </>
  );
};
