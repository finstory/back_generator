//! NO SE USA O SE USARÁ LUEGO...
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
// const revenueData = [
//   {
//     label: "Jan",
//     revenue: 64854,
//     cost: 32652,
//   },
//   {
//     label: "Feb",
//     revenue: 54628,
//     cost: 42393,
//   },
//   {
//     label: "Mar",
//     revenue: 117238,
//     cost: 50262,
//   },
//   {
//     label: "Apr",
//     revenue: 82830,
//     cost: 64731,
//   },
//   {
//     label: "May",
//     revenue: 91208,
//     cost: 41893,
//   },
//   {
//     label: "Jun",
//     revenue: 103609,
//     cost: 83809,
//   },
//   {
//     label: "Jul",
//     revenue: 90974,
//     cost: 44772,
//   },
//   {
//     label: "Aug",
//     revenue: 82919,
//     cost: 37590,
//   },
//   {
//     label: "Sep",
//     revenue: 62407,
//     cost: 43349,
//   },
//   {
//     label: "Oct",
//     revenue: 82528,
//     cost: 45324,
//   },
//   {
//     label: "Nov",
//     revenue: 56979,
//     cost: 47978,
//   },
//   {
//     label: "Dec",
//     revenue: 87436,
//     cost: 39175,
//   },
// ];

const sourceData = [
  {
    label: "Ads",
    value: 32,
  },
  {
    label: "Subscriptions",
    value: 45,
  },
  {
    label: "Sponsorships",
    value: 23,
  },
];

const revenueData = [
  {
    label: "1/03",
  },
  {
    label: "2/03",
  },
  {
    label: "3/03",
  },
  {
    label: "4/03",
  },
  {
    label: "5/03",
  },
  {
    label: "6/03",
  },
  {
    label: "7/03",
  },
];

export const TestingLine = () => {
  const lineRef = useRef(null);

  const switchBtn = (area) => {
    if (lineRef.current.isDatasetVisible(area)) lineRef.current.hide(area);
    else lineRef.current.show(area);
  };
  const [color, setColor] = useState(() => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    while (randomColor.length < 7) {
      randomColor += "0";
    }
    return randomColor;
  });

  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            switchBtn(0);
          }}
          style={{
            backgroundColor: "var(--normal-green-color)",
            color: "white",
            padding: "10px 18px",
            borderRadius: "10px",
            border: " 1px solid var(--normal-green-color)",
          }}
        >
          Active
        </button>
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
            labels: revenueData.map((data) => data.label),

            datasets: [
              {
                label: " C°",
                data: [-1, 6, 26, 14, 2, 13, 19],
                borderColor: color,
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
                    gradient.addColorStop(0, color); // Red at the top
                    gradient.addColorStop(1, "#55555500"); // White at the bottom
                    return gradient;
                  }
                },
                fill: "start",
                smooth: true,
                pointBackgroundColor: color,
                pointBorderColor: "#3a3a3a", // Add this line to add border to the points
                pointBorderWidth: 1, // Adjust the border width as needed
                pointRadius: 6,
                pointHoverRadius: 16,
              },
            ],
          }}
          options={{
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
                  size: 22,
                },
                titleFont: {
                  size: 20,
                },

                padding: 15,

                backgroundColor: "rgba(39, 39, 39, 0.76)",
                displayColors: true,
              },

              title: {
                text: "Monthly Revenue & Cost",
              },
            },
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 14, // This is the font size of the labels
                  },
                },
              },
              y: {
                ticks: {
                  font: {
                    size: 14, // This is the font size of the labels
                  },
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};
