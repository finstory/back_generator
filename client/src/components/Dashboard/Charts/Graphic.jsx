import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const Graphic = ({
  dateList = [{ label: "1/03" }, { label: "2/03" }],
  valueList = [-1, 6, 26, 14, 2, 13, 19],
  colorTop = "#354bae",
  colorBottom = "#f75d6000",
  colorLine = "#81f75d",
  minValue = -1,
  maxValue = 35,
}) => {
  const lineRef = useRef(null);

  const switchBtn = (area) => {
    if (lineRef.current.isDatasetVisible(area)) lineRef.current.hide(area);
    else lineRef.current.show(area);
  };

  return (
    <>
      {/* <button
        onClick={() => {
          switchBtn(0);
        }}
        style={{
          backgroundColor: "var(--normal-green-colorTop)",
          colorTop: "white",
          padding: "10px 18px",
          borderRadius: "10px",
          border: " 1px solid var(--normal-green-colorTop)",
        }}
      >
        Active
      </button> */}
      {/* <button
            onClick={() => {
              switchBtn(1);
            }}
            style={{ backgroundColor: "red" }}
          >
            CAMBIAR
          </button> */}

      <Line
        ref={lineRef}
        data={{
          labels: dateList.map((data) => data.label),

          datasets: [
            {
              label: " C°",
              data: valueList,
              borderColor: colorLine,
              backgroundColor: (context) => {
                // console.log(context.chart.chartArea)
                if (context.chart.chartArea) {
                  const chartArea = context.chart.chartArea;
                  const ctx = context.chart.ctx;
                  const gradient = ctx.createLinearGradient(
                    chartArea.left,
                    chartArea.top,
                    chartArea.left,
                    chartArea.bottom
                  );
                  gradient.addColorStop(0.6, colorTop);
                  gradient.addColorStop(1, colorBottom);
                  return gradient;
                }
              },
              fill: "start",
              smooth: true,
              animation: {
                duration: 300,
                // easeInQuad
                easing: "lineal",
                // easing: Scriptable<"linear" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | ... 26 more ... | "easeInOutBounce",
              },
              pointBackgroundColor: colorLine,
              pointBorderColor: "#575757", // Add this line to add border to the points
              pointBorderWidth: 1, // Adjust the border width as needed
              pointRadius: 6,
              pointHoverRadius: 16,
            },
          ],
        }}
        options={{
          y: {
            min: minValue,
            max: maxValue,
          },
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                title: function (tooltipItem) {
                  return tooltipItem[0].label;
                },
                label: function (tooltipItem) {
                  return tooltipItem.parsed.y;
                },
              },
              bodyFont: {
                text: "Monthly Revenue & Cost",
                size: 18,
              },
              titleFont: {
                size: 15,
              },

              backgroundColor: "#E2E8F0",
              displayColors: true,
              bodyColor: "#01192E",
              titleColor: "#011d36",
            },
          },
          scales: {
            x: {
              ticks: {
                padding: 20,
                color: "#fbfbfb",
                font: {
                  size: 11, // This is the font size of the labels
                },
              },
            },
            y: {
              ticks: {
                padding: 20,
                color: "#fbfbfb",
                font: {
                  size: 11, // This is the font size of the labels
                },
              },
            },
          },
        }}
      />
    </>
  );
};
