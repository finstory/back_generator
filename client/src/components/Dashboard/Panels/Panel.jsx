import React, { Children, useEffect, useState } from "react";
import scss from "@sass/components/panels/panels.module.scss";
import { Temperatura } from "./Temperatura";
import { Manometro } from "./Manometro";
import { RealTimeSmall } from "./RealTimeSmall";
import { useHomeServices } from "../../../services/useHomeServices";
import { NumberPanel } from "./NumberPanel/NumberPanel";
import { PieChart } from "./PieChart/PieChart";
import { PanelTop } from "./_PanelBody/PanelTop";
import { PanelSelector } from "./_PanelBody/PanelSelector";
import { SensorDeLuz } from "./SensorDeLuz";
import { FlujoDeAgua } from "../Hardcoding/FlujoDeAgua";
import { Humedad } from "./Humedad";
import { InsideNormalImg } from "../Hardcoding/PanelImage/InsideNormalImg";
import { NormaInsideGiantImg } from "../Hardcoding/PanelImage/NormaInsideGiantImg";

export const Panel = (props) => {
  const {
    panelId = 2,
    homePanelId = 2312,
    size = "normal",
    title = "Temperatura",
    subtitle = "medición ambiente",
    description = "",
    optionsList = [],
    contentList = [],
  } = props;

  const {
    home: {
      menu: { stack },
      homePanelsList,
    },
    removeHomePanel,
    addHomePanel,
  } = useHomeServices();

  const [panelInHome, setPanelInHome] = useState(false);

  const panelExistsInHome = () => {
    const searchPanelInHome = homePanelsList.find(
      (panel) => panel.homePanelId === homePanelId
    );

    if (searchPanelInHome)
      return (
        <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1710440412/Agro/Panel/Frame_2610508_qkzuso.svg"
          alt="pin"
        />
      );
    else
      return (
        <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1710439616/Agro/Panel/filter-outline_cvabyl.svg"
          alt="pin"
        />
      );
  };

  const [panelSize, setPanelSize] = useState({
    height: "52rem",
    width: "64rem",
    padding: "",
    backgroundImage: "",
  });

  const renderChildren = (type, children_props) => {
    const childrenProps = { ...children_props, optionsList };

    switch (type) {
      case "realtime_small":
        return <RealTimeSmall key={children_props.id} {...childrenProps} />;
      case "realtime_normal":
        return <NumberPanel key={children_props.id} {...childrenProps} />;
      case "pie_chart":
        return <PieChart key={children_props.id} {...childrenProps} />;
      case "sensor_de_luz":
        return <SensorDeLuz key={children_props.id} {...childrenProps} />;
      case "temperatura":
        return <Temperatura key={children_props.id} {...childrenProps} />;
      case "flujo_de_agua":
        return <FlujoDeAgua key={children_props.id} {...childrenProps} />;
      case "humedad":
        return <Humedad key={children_props.id} {...childrenProps} />;
      case "camara_termografica":
        return <InsideNormalImg key={children_props.id} {...childrenProps} />;

      case "normal_in_giant_img":
        return (
          <NormaInsideGiantImg key={children_props.id} {...childrenProps} />
        );
      default:
        return <></>;
    }
  };

  const setSizeToPanel = () => {
    switch (size) {
      case "semi_large":
        setPanelSize({
          ...panelSize,
          width: "140rem",
          height: "auto",
          padding: "0",
        });
        break;
      case "normal":
        setPanelSize({ ...panelSize, width: "68rem" });
        break;

      case "large":
        setPanelSize({ ...panelSize, width: "140rem" });
        break;
      case "giant":
        console.log("sdsd");
        setPanelSize({
          ...panelSize,
          height: "47rem",
          width: "140rem",
          backgroundImage:
            "url('https://res.cloudinary.com/dz9smi3nc/image/upload/v1710524229/Agro/Layer_1_cb82ka.svg')",
        });
        break;
    }
  };

  const [optionSelected, setOptionSelected] = useState(
    optionsList[0] ? optionsList[0].value : contentList[0].id
  );

  useEffect(() => {
    setSizeToPanel();
  }, [size]);

  return (
    <div
      className={scss.custom_panel}
      style={{
        width: panelSize.width,
        minHeight: panelSize.height,
        backgroundImage: panelSize.backgroundImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // padding: panelSize.padding,
      }}
    >
      <PanelTop
        scss={scss}
        size={size}
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <PanelSelector
        scss={scss}
        optionsList={optionsList}
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
      />
      <div
        className={scss.pin}
        style={{ display: size === "semi_large" ? "none" : "block" }}
        onClick={() => {
          if (stack === "dashboard") {
            removeHomePanel(homePanelId);
          } else addHomePanel(props);
        }}
      >
        {panelExistsInHome()}
      </div>

      {contentList.map((content) => {
        const { wrapList, childrenLayoutStyle } = content;
        if (content.id === optionSelected)
          return (
            <div key={content.id} className={scss[childrenLayoutStyle]}>
              {wrapList.map((wrap) => (
                <div key={wrap.id} className={scss.wrapper}>
                  {wrap.compList.map((compProps) =>
                    renderChildren(wrap.type, compProps)
                  )}
                </div>
              ))}
            </div>
          );
      })}
    </div>
  );
};
