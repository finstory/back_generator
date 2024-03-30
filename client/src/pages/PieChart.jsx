import { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { get, ref } from "firebase/database";
import { db } from "../firebase/firebase";
import { DoubleBorderGradient } from "../utilities/DoubleBorderGradient";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["red", "blue", "yellow"],
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Red", "Yellow", "Blue"],
};
function PieChart() {
  const [value, setValue] = useState(0);
  const [lum, setLum] = useState(0);
  const [color, setColor] = useState("red");
  function toPercentage(value, min, max) {
    if (value > max) return 100;

    const difference = max - min;
    const relativePosition = value - min;
    const percentage = (relativePosition / difference) * 100;

    return Math.round(percentage * 100) / 100;
  }

  const getGradient = (chart) => {
    const {
      ctx,
      chartArea: { left, right, top, bottom },
    } = chart;
    const gradientSegment = ctx.createLinearGradient(left, top, right, bottom);
    gradientSegment.addColorStop(0.4, color);
    gradientSegment.addColorStop(1, "rgba(48, 48, 48, 0.47)");
    return gradientSegment;
  };

  const pushData = async () => {
    const sensorRef = ref(db, "sensor_list/light");
    const snapshot = await get(sensorRef);
    return snapshot.val();
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      //   const valueGet = toPercentage(Math.random() * 200, 0, 200);
      const getLum = await pushData();
      setLum(getLum);
      const valueGet = toPercentage(getLum, 0, 3000);

      if (valueGet < 40) {
        setColor("rgba(56, 229, 248, 0.74)");
      } else if (valueGet < 55) {
        setColor("rgba(102, 251, 219, 0.76)");
      } else if (valueGet < 75) {
        setColor("rgba(203, 248, 56, 0.86)");
      } else {
        setColor("rgba(248, 62, 56, 0.73)");
      }
      setValue(valueGet);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <DoubleBorderGradient
      effectHeight="51rem"
      effect={true}
      className="light_panel"
      borderRadius="2rem"
      borderSize="2px"
      borderBetween="2px"
    >
      <div className="panel">
        <p className="panel_title">
          Luxómetro
          <img
            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1711325975/Agro/icons8-bombilla-globo-100_ndfagu.png"
            alt="Decibelimetro"
            style={{ width: "2rem", height: "2rem" }}
          />
        </p>
        <div className="graphic">
          <Doughnut
            // width={"100%"}
            height={"100%"}
            data={{
              datasets: [
                {
                  data: [value, Math.abs(100 - value)],

                  //   backgroundColor: [color, "black"],
                  backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) {
                      // This case happens on initial chart load
                      return null;
                    }
                    if (context.dataIndex === 0) {
                      return getGradient(chart);
                    } else return "#141414";
                  },
                  animation: {
                    duration: 300,
                    // easeInQuad
                    easing: "easeOutCirc",
                  },
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false, // This will prevent the auto-adjustment when zooming
              elements: {
                arc: {
                  borderWidth: 1.5,
                  borderColor: "#66fbdb",
                },
              },
              cutout: "84%",
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
          <p
            className="value"
            // style={{ color, textShadow: `0 0 4px ${color}` }}
          >
            {lum} lux
            <span>{value} %</span>
          </p>
        </div>
      </div>
    </DoubleBorderGradient>
  );
}

export default PieChart;
