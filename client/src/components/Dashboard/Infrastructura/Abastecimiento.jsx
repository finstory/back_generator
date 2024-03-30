import React from "react";
import { Panel } from "../Panels/Panel";
import * as auto from "../../../test/helpers/automatic";
import { cantLumenes } from "../../../test/helpers/automatic2";
import { v4 as uuidv4 } from "uuid";

export const Abastecimiento = () => {
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
      size: "normal",
      title: "Suministro de Agua",
      subtitle: "Volumen",
      description: "Monitoreo que asegura un flujo de agua limpia y fresca.",
      optionsList: [
        { value: "Nivel de Reserva", color: "" },
        { value: "Temperatura", color: "" },
        { value: "Flujo de Agua", color: "" },
      ],

      contentList: [
        {
          id: "Nivel de Reserva",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "flujo_de_agua",
              compList: [{}],
            },
          ],
        },
        {
          id: "Temperatura",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "sensor_de_luz",
              compList: [],
            },
          ],
        },
        {
          id: "Flujo de Agua",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "sensor_de_luz",
              compList: [],
            },
          ],
        },
      ],
    },
    {
      homePanelId: "152904",
      title: "Temperatura",
      subtitle: "Medición del Ambiente",
      description: "Gráficas semanales representadas en Celsius",
      size: "normal",
      panelId: 2,
      childrenLayoutStyle: "simple_wrap",
      optionsList: [
        { value: "Temperatura", color: "#2196F3" },
        { value: "Humedad", color: "#0FCA7A" },
      ],
      //$Ajustar
      contentList: [
        {
          id: "Temperatura",
          childrenLayoutStyle: "simple_wrap",
          wrapList: [
            {
              id: 3736,
              type: "temperatura",
              compList: [
                {
                  id: 231,
                  colorLine: "#2196F3",
                  colorTop: "#00C7F2",
                  colorBottom: "rgba(0, 198, 242, 0.27)",
                  dateList: [
                    {
                      label: "01/03",
                    },
                    {
                      label: "02/03",
                    },
                    {
                      label: "03/03",
                    },
                    {
                      label: "04/03",
                    },
                    {
                      label: "05/03",
                    },
                    {
                      label: "06/03",
                    },
                    {
                      label: "07/03",
                    },
                  ],
                  valueList: [22, 22, 21, 20, 19, 23, 25],
                },
              ],
            },
          ],
        },
        {
          id: "Humedad",
          childrenLayoutStyle: "simple_wrap",
          wrapList: [
            {
              id: 3736,
              type: "humedad",
              compList: [
                {
                  id: 234771,
                  colorLine: "#0FCA7A",
                  colorTop: "#29e493",
                  colorBottom: "rgba(41, 228, 147, 0.28)",
                  minValue: 0,
                  maxValue: 100,
                  dateList: [
                    { label: "08/03" },
                    { label: "09/03" },
                    { label: "10/03" },
                    { label: "11/03" },
                    { label: "12/03" },
                    { label: "13/03" },
                    { label: "14/03" },
                  ],
                  valueList: [97, 77, 74, 67, 78, 70, 66],
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
