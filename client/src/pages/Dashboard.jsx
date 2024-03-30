import { useHomeServices } from "../services/useHomeServices";
import MenuData from "../data/MenuData";
import { DoubleBorderGradient } from "../utilities/DoubleBorderGradient";
import { Graphic } from "../components/Dashboard/Charts/Graphic";
import { useEffect, useState } from "react";
import { db } from "../../src/firebase/firebase";
import { ref, onValue, set, get } from "firebase/database";
import PieChart from "./PieChart";

export const Dashboard = () => {
  const [dateList, setDateList] = useState([
    { label: "00:00" },
    { label: "00:00" },
    { label: "00:00" },
    { label: "00:00" },
    { label: "00:00" },
    { label: "00:00" },
    { label: "00:00" },
  ]);

  const [valueList, setValueList] = useState(
    // [35, 31, 40, 48, 59, 65, 66]
    [24, 24, 24, 24, 24, 24]
  );
  const graphicData = {
    id: 234771,
    colorLine: "#66fbdb",
    colorTop: "rgba(102, 251, 219, 0.59)",
    // colorBottom: "rgba(102, 251, 219, 0.03)",
    colorBottom: "rgba(58, 58, 58, 0.17)",
    minValue: 25,
    maxValue: 75,
    dateList,
    valueList,
  };
  const [maxListSize, setMaxListSize] = useState(5); // Set your maximum list size here
  const [color, setColor] = useState("red");
  const pushData = async () => {
    const sensorRef = ref(db, "sensor_list/sound");
    const snapshot = await get(sensorRef);
    const soundValue = snapshot.val();

    if (soundValue < 45) {
      setColor("rgba(56, 248, 226, 0.74)");
    } else if (soundValue < 60) {
      setColor("rgba(102, 251, 219, 0.85)");
    } else {
      setColor("rgba(248, 62, 56, 0.73)");
    }

    const newTime = new Date();
    const newLabel = { label: newTime.toISOString().substr(14, 5) };

    setDateList((prevDateList) => {
      if (prevDateList.length >= maxListSize) {
        return [
          ...prevDateList.slice(prevDateList.length - maxListSize + 1),
          newLabel,
        ];
      } else {
        return [...prevDateList, newLabel];
      }
    });

    setValueList((prevValueList) => {
      if (prevValueList.length >= maxListSize) {
        return [
          ...prevValueList.slice(prevValueList.length - maxListSize + 1),
          soundValue,
        ];
      } else {
        return [...prevValueList, soundValue];
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      pushData();
    }, 200);
    return () => clearInterval(interval);
  }, [maxListSize]); // Add maxListSize to the dependency array

  return (
    <div className="main_container">
      <p
        style={{
          position: "absolute",
          top: "0rem",
          color: "var(--white-color)",
          fontSize: "1.6rem",
          padding: "1rem 2rem",
          borderRadius: "0 0 1rem 1rem",
          letterSpacing: "0.2rem",
          border: "2px solid #358F8F",
          background:
            "linear-gradient(180deg, #358F8F 0%, rgba(57, 99, 99, 0.43) 100%)",
        }}
      >
        {" "}
        DEVELOPED BY : FACUNDO ALVAREZ
      </p>
      <DoubleBorderGradient
        effectHeight="51rem"
        effect={true}
        className="sound_panel"
        borderRadius="2rem"
        borderSize="2px"
        borderBetween="2px"
      >
        <div className="panel">
          <div style={{ position: "absolute", top: "1.6rem", right: "5rem" }}>
            <input
              type="range"
              id="maxListSize"
              min="5"
              max="20"
              value={maxListSize}
              onChange={(e) => setMaxListSize(e.target.value)}
            />
          </div>
          <p className="panel_title">
            Decibelimetro
            <img
              src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1711258476/Agro/icons8-listen-100_gbixnz.png"
              alt="Decibelimetro"
              style={{ width: "2rem", height: "2rem" }}
            />
          </p>
          <div className="value">
            <div className="box"></div>
            <div className="box">
              {valueList[valueList.length - 1] + " db "}
            </div>
            <div className="box" style={{ fontSize: "1.2rem" }}>
              {dateList[dateList.length - 1].label}
            </div>
          </div>
          <Graphic {...graphicData} colorTop={color} />
        </div>
      </DoubleBorderGradient>
      <PieChart />
    </div>
  );
};
