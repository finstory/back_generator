import React from "react";
import { Panel } from "../Panels/Panel";
import * as auto from "../../../test/helpers/automatic";
import { cantLumenes } from "../../../test/helpers/automatic2";

export const Climatización = () => {
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
      homePanelId: "1524",
      title: "Calidad del Aire",
      subtitle: "Controles del Aire",
      description: "Sensores que monitorean las variaciones en el aire.",
      size: "large",
      panelId: 2,
      optionsList: [],
      contentList: [
        {
          id: 45645649,
          childrenLayoutStyle: "double_wrap",
          wrapList: [
            {
              id: 21422,
              type: "realtime_normal",
              compList: [
                {
                  id: 21212,
                  name: "Velocidad del Aire",
                  value: 24.02,
                  measure: "km/h",
                  different: auto.differentAir(),
                  yesterday: auto.yesterdayAir(),
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710363372/Agro/Panel/normal/Frame_29_7_s7cizm.svg",
                },
                {
                  id: 21213,
                  name: "Oxígeno en el Aire",
                  value: 19.7,
                  measure: "%",
                  different: auto.differentOxygen(),
                  yesterday: auto.yesterdayOxygen(),
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710448653/Agro/Panel/normal/Frame_29_11_exfn46.svg",
                },
                {
                  id: 21214,
                  name: "Amoníaco",
                  value: 3.2,
                  measure: "ppm",
                  different: auto.differentAmmonia(),
                  yesterday: auto.yesterdayAmmonia(),
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710448605/Agro/Panel/normal/Frame_29_10_wbuewo.svg",
                },
                {
                  id: 21225,
                  name: "Dióxido de Carbono",
                  value: 1.52,
                  measure: "% / 3ppm",
                  different: auto.differentCarbonDioxide(),
                  yesterday: auto.yesterdayCarbonDioxide(),
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710448543/Agro/Panel/normal/Frame_29_9_dpwhyp.svg",
                },
                {
                  id: 21216,
                  name: "Monóxico de Carbono",
                  value: 14.76,
                  measure: "ppm",
                  different: auto.differentCarbonMonoxide(),
                  yesterday: auto.yesterdayCarbonMonoxide(),
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710448494/Agro/Panel/normal/Frame_29_8_qqvefy.svg",
                },
                {
                  id: 21276,
                  name: "Polvo respirable",
                  value: 23.32,
                  measure: "ppm",
                  different: auto.differentRespirableDust(),
                  yesterday: auto.yesterdayRespirableDust(),
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710448699/Agro/Panel/normal/Frame_29_12_ioiriq.svg",
                },
              ],
            },
            {
              id: 214262,
              type: "pie_chart",
              compList: [
                {
                  id: 957348609,
                  title: "Temperatura Actual",
                  value: 25,
                  measure: "° C",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709905170/Agro/Panel/small/Frame_29_c6js2u.svg",
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
      title: "Sensores de luz",
      subtitle: "Control Lumínico",
      description: "Mediciones del flujo luminoso",
      optionsList: [
        { value: "Galpón 1", color: "" },
        { value: "Galpón 2", color: "" },
        { value: "Silos", color: "" },
        { value: "Hogar", color: "" },
      ],

      contentList: [
        {
          id: "Galpón 1",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: 3736,
              type: "sensor_de_luz",
              compList: [
                {
                  id: 1,
                  name: "Sensor 1",
                  activeRange: "10:57 AM - 13:57",
                  date: "10 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: 2,
                  name: "Sensor 5",
                  activeRange: "2:06 PM - 5:06 PM",
                  date: "10 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293513/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_2_o4ulk6.svg",
                },
                {
                  id: 223,
                  name: "Sensor 3",
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
              id: 776,
              type: "sensor_de_luz",
              compList: [
                {
                  id: 1,
                  name: "Sensor 2",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: 2,
                  name: "Sensor 4",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293509/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_1_pykf1j.svg",
                },
                {
                  id: 24,
                  name: "Sensor 8",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: 223,
                  name: "Sensor 6",
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
        {
          id: "Silos",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: 3736,
              type: "sensor_de_luz",
              compList: [
                {
                  id: 2,
                  name: "Sensor 10",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293509/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_1_pykf1j.svg",
                },
                {
                  id: 24,
                  name: "Sensor 12",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: 223,
                  name: "Sensor 11",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293513/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_2_o4ulk6.svg",
                },
              ],
            },
          ],
        },
        {
          id: "Hogar",
          childrenLayoutStyle: "scrolling_simple_wrap",
          wrapList: [
            {
              id: 776,
              type: "sensor_de_luz",
              compList: [
                {
                  id: 1,
                  name: "Sensor 14",
                  activeRange: "10:20 AM - 3:00 PM",
                  date: "14 February,2024",
                  value: cantLumenes(),
                  unit: "Lúmenes",
                  icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710293440/Agro/Panel/light_sensor/icons8-bombilla-globo-100_1_ht0qas.svg",
                },
                {
                  id: 2,
                  name: "Sensor 15",
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
      homePanelId: "152904",
      title: "Temperatura",
      subtitle: "Medición del Ambiente",
      description: "Gráficas semanales representadas en Celsius",
      size: "normal",
      panelId: 2,
      childrenLayoutStyle: "simple_wrap",
      optionsList: [
        { value: "Semana 1", color: "#2196F3" },
        { value: "Semana 2", color: "#0FCA7A" },
        { value: "Semana 3", color: "#F7A23B" },
        { value: "Semana 4", color: "#F75D5F" },
      ],
      contentList: [
        {
          id: "Semana 1",
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
                  valueList: [17, 25, 28, 26, 24, 20, 18],
                },
              ],
            },
          ],
        },
        {
          id: "Semana 2",
          childrenLayoutStyle: "simple_wrap",
          wrapList: [
            {
              id: 3736,
              type: "temperatura",
              compList: [
                {
                  id: 234771,
                  colorLine: "#0FCA7A",
                  colorTop: "#29e493",
                  colorBottom: "rgba(41, 228, 147, 0.28)",
                  dateList: [
                    { label: "08/03" },
                    { label: "09/03" },
                    { label: "10/03" },
                    { label: "11/03" },
                    { label: "12/03" },
                    { label: "13/03" },
                    { label: "14/03" },
                  ],
                  valueList: [21, 24, 27, 25, 23, 19, 20],
                },
              ],
            },
          ],
        },
        {
          id: "Semana 3",
          childrenLayoutStyle: "simple_wrap",
          wrapList: [
            {
              id: 3736,
              type: "temperatura",
              compList: [
                {
                  id: 882341,
                  colorLine: "#F7A23B",
                  colorTop: "#f4ab51",
                  colorBottom: "rgba(244, 172, 84, 0.22)",
                  dateList: [
                    { label: "15/03" },
                    { label: "16/03" },
                    { label: "17/03" },
                    { label: "18/03" },
                    { label: "19/03" },
                    { label: "20/03" },
                    { label: "21/03" },
                  ],
                  valueList: [20, 23, 20, 24, 22, 18, 16],
                },
              ],
            },
          ],
        },
        {
          id: "Semana 4",
          childrenLayoutStyle: "simple_wrap",
          wrapList: [
            {
              id: 3736,
              type: "temperatura",
              compList: [
                {
                  id: 2341,
                  colorLine: "#F75D5F",
                  colorTop: "#e16b6b",
                  colorBottom: "rgba(247, 93, 96, 0.24)",
                  dateList: [
                    { label: "22/03" },
                    { label: "23/03" },
                    { label: "24/03" },
                    { label: "25/03" },
                    { label: "26/03" },
                    { label: "27/03" },
                    { label: "28/03" },
                  ],
                  valueList: [19, 16, 12, 18, 21, 15, 12],
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
