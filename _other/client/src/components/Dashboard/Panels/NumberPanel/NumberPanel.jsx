import React, { useEffect, useState } from "react";
import scss from "@sass/components/panels/panels.module.scss";

export const NumberPanel = ({
  value = 23.13,
  percentValueUp = 2.5,
  measure = "",
  icon = "https://res.cloudinary.com/dz9smi3nc/image/upload/v1708856313/Agro/Panel/icons8-viento-64_ialhcq.png",
  name = "Calidad del Aire",
  different = 0,
}) => {
  const [valueRandom, setValueRandom] = useState(value);
  const [percentValueUpRandom, setPercentValueUpRandom] =
    useState(percentValueUp);
  useEffect(() => {
    setPercentValueUpRandom((Math.random() + percentValueUp).toFixed(2));

    const interval = setInterval(() => {
      setValueRandom(
        (Math.random() * 0.2 + value).toFixed(2).replace(/\.(\d)$/, ".$10")
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={scss.number_panel}>
      <div className={scss.info}>
        <div className={scss.box}>
          <p className={scss.value}>
            {valueRandom}
            <span> {measure}</span>
          </p>
          <p className={scss.name}>{name}</p>
        </div>
        <div className={scss.box}>
          <div className={scss.icon}>
            <img src={icon} alt="logo" />
          </div>
        </div>
      </div>

      <div className={scss.more_info}>
        <div className={scss.indicator}>
          <div
            className={scss.percent}
            style={{ backgroundColor: different >= 0 ? "#A5FBC7" : "#fdb698" }}
          >
            {different >= 0 ? "+" : "-"} {Math.abs(different)} %
          </div>
          <p className={scss.when}>Última hora</p>
        </div>
        <div className={scss.icon}>
          <img
            src={
              "https://res.cloudinary.com/dz9smi3nc/image/upload/v1710282802/Agro/Panel/small/Frame_2610496_1_zrmka6.png"
            }
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};
