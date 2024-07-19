import React from "react";
import { Panel } from "../Panels/Panel";
import * as auto from "../../../test/helpers/automatic";
import { cantLumenes } from "../../../test/helpers/automatic2";
import { v4 as uuidv4 } from "uuid";
import { NormalImg } from "../Hardcoding/PanelImage/NormalImg";
export const Movimiento = () => {
  const contentList = [
    //Va siempre
    {
      panelId: uuidv4(),
      homePanelId: "154",
      size: "semi_large",
      title: "",
      subtitle: "",
      description: "",
      optionsList: [],
      contentList: [
        {
          id: uuidv4(),
          childrenLayoutStyle: "semi_large_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "realtime_small",
              compList: [
                {
                  id: uuidv4(),
                  title: "Temperatura Actual",
                  value: 24,
                  measure: "° C",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709905170/Agro/Panel/small/Frame_29_c6js2u.svg",
                },
                {
                  id: uuidv4(),
                  title: "Temperatura Galpón",
                  value: 22,
                  measure: "° C",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709906446/Agro/Panel/small/Frame_29_1_x9ezcq.svg",
                },
                {
                  id: uuidv4(),
                  title: "Humedad",
                  value: 74,
                  measure: "%",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709906449/Agro/Panel/small/Frame_29_2_wltw59.svg",
                },
                {
                  id: uuidv4(),
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
        { value: "Sector 1", color: "" },
        { value: "Temperatura", color: "" },
        { value: "Flujo de Agua", color: "" },
      ],

      contentList: [
        {
          id: "Sector 1",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "camara_termografica",
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
      isImage: true,
      id: uuidv4(),
      size: "normal",
      url: "https://res.cloudinary.com/die1hnh4p/image/upload/v1710506438/agro/Frame_2610502_ks5wyb.png",
    },
    {
      panelId: 22,
      homePanelId: "15247",
      size: "normal",
      title: "Medición gallinero",
      subtitle: "Control Lumínico",
      description: "Mediciones del flujo luminoso",
      optionsList: [
        { value: "Galpón 1", color: "" },
        { value: "Galpón 2", color: "" },
      ],

      contentList: [
        {
          id: "Galpón 1",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "sensor_de_luz",
              compList: [
                {
                  id: uuidv4(),
                  name: "Sensor 7",
                  activeRange: "10:57 AM - 13:57",
                  date: "10 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 8",
                  activeRange: "2:06 PM - 5:06 PM",
                  date: "10 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293513/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_2_o4ulk6.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 10",
                  activeRange: "1:28 AM - 3:04 PM",
                  date: "4 March,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293509/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_1_pykf1j.svg",
                },
              ],
            },
          ],
        },
        {
          id: "Galpón 2",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "sensor_de_luz",
              compList: [
                {
                  id: uuidv4(),
                  name: "Sensor 1",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 3",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293509/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_1_pykf1j.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 2",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 5",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293509/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_1_pykf1j.svg",
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
      title: "Medición deposito",
      subtitle: "Control Lumínico",
      description: "Mediciones del flujo luminoso",
      optionsList: [
        { value: "Deposito 1", color: "" },
        { value: "Deposito 2", color: "" },
      ],

      contentList: [
        {
          id: "Deposito 1",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "sensor_de_luz",
              compList: [
                {
                  id: uuidv4(),
                  name: "Sensor 11",
                  activeRange: "10:57 AM - 13:57",
                  date: "10 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 14",
                  activeRange: "2:06 PM - 5:06 PM",
                  date: "10 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293513/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_2_o4ulk6.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 13",
                  activeRange: "1:28 AM - 3:04 PM",
                  date: "4 March,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293509/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_1_pykf1j.svg",
                },
              ],
            },
          ],
        },
        {
          id: "Deposito 2",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: uuidv4(),
              type: "sensor_de_luz",
              compList: [
                {
                  id: uuidv4(),
                  name: "Sensor 15",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 18",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293509/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_1_pykf1j.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 19",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 20",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293509/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_1_pykf1j.svg",
                },
                {
                  id: uuidv4(),
                  name: "Sensor 21",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
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
      {contentList.map((panel) => {
        if (!panel.isImage) return <Panel key={panel.homePanelId} {...panel} />;
        else {
          switch (panel.size) {
            case "normal":
              return <NormalImg url={panel.url} />;

            default:
              return <></>;
          }
        }
      })}
    </>
  );
};
